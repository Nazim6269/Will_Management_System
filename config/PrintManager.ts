

import type {
  PrintConfig,
  PrintDocumentVariant,
  PrintError,
  PrintRegistry,
  PrintTemplateDefinition,
} from '../types/printType';
import {
  buildPageCSSRule,
  PRINT_CSS_CLASSES,
  PRINT_DELAYS,
  PRINT_PORTAL_ID,
} from '../config/printConfig';


interface PrintJobOptions<TData = unknown> {
  documentType: PrintDocumentVariant;
  data: TData;
  registry: PrintRegistry;
  renderToString: (documentType: PrintDocumentVariant, data: TData) => Promise<string>;
  onStatusChange?: (status: string) => void;
  printDelay?: number;
}


class PrintManagerService {
  private _activeJob: AbortController | null = null;

  async executePrintJob<TData = unknown>(options: PrintJobOptions<TData>): Promise<void> {
    const {
      documentType,
      data,
      registry,
      renderToString,
      onStatusChange,
      printDelay = PRINT_DELAYS.BEFORE_PRINT,
    } = options;

    this._activeJob?.abort();
    const controller = new AbortController();
    this._activeJob = controller;

    if (typeof window === 'undefined') {
      throw this._makeError('UNSUPPORTED_BROWSER', 'window.print() is not available in this environment.');
    }

    const template = registry.get(documentType);
    if (!template) {
      throw this._makeError('TEMPLATE_NOT_FOUND', `No template registered for documentType: "${documentType}".`);
    }

    onStatusChange?.('resolving');
    let resolvedData = data;
    if (template.resolveData) {
      try {
        resolvedData = await template.resolveData(data);
      } catch (err) {
        throw this._makeError('RESOLVE_FAILED', 'Data resolution failed before printing.', err);
      }
    }

    this._checkAbort(controller);

    onStatusChange?.('rendering');
    let htmlString: string;
    try {
      htmlString = await renderToString(documentType, resolvedData);
    } catch (err) {
      throw this._makeError('RENDER_FAILED', 'Failed to render print template.', err);
    }

    if (!htmlString.trim()) {
      throw this._makeError('EMPTY_CONTENT', 'Rendered print content is empty.');
    }

    this._checkAbort(controller);

    onStatusChange?.('ready');
    const portalEl = this._ensurePortal();
    const styleEl = this._injectPageStyles(template.config);
    portalEl.innerHTML = htmlString;

    await document.fonts.ready;
    await this._waitForImages(portalEl);
    await this._delay(printDelay);

    this._checkAbort(controller);

    onStatusChange?.('printing');
    window.print();

    await this._delay(PRINT_DELAYS.AFTER_CLEANUP);
    this._cleanup(portalEl, styleEl);
    this._activeJob = null;
    onStatusChange?.('complete');
  }

 
  cancel(): void {
    this._activeJob?.abort();
    this._activeJob = null;
    this._cleanupByPortalId();
  }


  private _ensurePortal(): HTMLElement {
    let portal = document.getElementById(PRINT_PORTAL_ID);
    if (!portal) {
      portal = document.createElement('div');
      portal.id = PRINT_PORTAL_ID;
      portal.setAttribute('aria-hidden', 'true');
      document.body.appendChild(portal);
    }
    return portal;
  }

  private _injectPageStyles(config: PrintConfig): HTMLStyleElement {
    const existing = document.getElementById('print-page-styles');
    if (existing) existing.remove();

    const styleEl = document.createElement('style');
    styleEl.id = 'print-page-styles';
    styleEl.textContent = buildPageCSSRule(
      config.pageSize,
      config.orientation,
      config.margins
    );
    document.head.appendChild(styleEl);
    return styleEl;
  }

  private _cleanup(portalEl: HTMLElement, styleEl: HTMLStyleElement): void {
    portalEl.innerHTML = '';
    styleEl.remove();
  }

  private _cleanupByPortalId(): void {
    const portal = document.getElementById(PRINT_PORTAL_ID);
    if (portal) portal.innerHTML = '';
    const style = document.getElementById('print-page-styles');
    if (style) style.remove();
  }

  private _waitForImages(container: HTMLElement): Promise<void> {
    const images = Array.from(container.querySelectorAll('img'));
    if (images.length === 0) return Promise.resolve();

    return Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) { resolve(); return; }
            img.onload = () => resolve();
            img.onerror = () => resolve(); 
          })
      )
    ).then(() => undefined);
  }

  private _delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private _checkAbort(controller: AbortController): void {
    if (controller.signal.aborted) {
      throw this._makeError('UNKNOWN', 'Print job was cancelled.');
    }
  }

  private _makeError(
    code: PrintError['code'],
    message: string,
    originalError?: unknown
  ): PrintError {
    return { code, message, originalError };
  }
}

export const PrintManager = new PrintManagerService();