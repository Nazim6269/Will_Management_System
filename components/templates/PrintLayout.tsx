

import { PAGE_SIZE_MAP, PRINT_CSS_CLASSES } from '@/config/printConfig';
import { PrintConfig, PrintPageContext } from '@/types/printType';
import React, { type ReactNode } from 'react';


interface PrintLayoutProps {
  config: PrintConfig;
  children: ReactNode;
  pageContext?: PrintPageContext;
}


export function PrintLayout({ config, children, pageContext }: PrintLayoutProps) {
  const dimensions = PAGE_SIZE_MAP[config.pageSize];
  const isLandscape = config.orientation === 'landscape';

  const pageWidth = isLandscape ? dimensions.height : dimensions.width;
  const pageHeight = isLandscape ? dimensions.width : dimensions.height;

  const cssVars = config.cssVariables
    ? Object.entries(config.cssVariables)
        .map(([k, v]) => `${k}: ${v}`)
        .join(';')
    : '';

  return (
    <div
      className={`${PRINT_CSS_CLASSES.ROOT} ${config.rootClassName ?? ''}`}
      style={{
        width: '100%',
        maxWidth: pageWidth,
        minHeight: pageHeight,
        position: 'relative',
        boxSizing: 'border-box',
        ...(cssVars ? { style: cssVars } : {}),
      }}
    >
      {config.watermark && <PrintWatermark config={config.watermark} />}

      {config.header?.enabled && pageContext && (
        <PrintHeader config={config.header} pageContext={pageContext} />
      )}

      <main className="print-content">{children}</main>

      {config.footer?.enabled && pageContext && (
        <PrintFooter config={config.footer} pageContext={pageContext} />
      )}
    </div>
  );
}


function PrintWatermark({ config }: { config: NonNullable<PrintConfig['watermark']> }) {
  const opacity = config.opacity ?? 0.12;
  const angle = config.angle ?? -45;
  const fontSize = config.fontSize ?? '72px';
  const color = config.color ?? '#000000';

  return (
    <div
      className={PRINT_CSS_CLASSES.WATERMARK}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        opacity,
        pointerEvents: 'none',
        zIndex: 9999,
        userSelect: 'none',
        whiteSpace: 'nowrap',
        fontSize,
        color,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}
    >
      {config.variant === 'text' && config.text}
      {config.variant === 'image' && config.imageUrl && (
        <img src={config.imageUrl} alt="" style={{ maxWidth: '50vw' }} />
      )}
    </div>
  );
}


function PrintHeader({
  config,
  pageContext,
}: {
  config: NonNullable<PrintConfig['header']>;
  pageContext: PrintPageContext;
}) {
  return (
    <header
      className={PRINT_CSS_CLASSES.HEADER}
      style={{ height: config.height ?? 'auto', marginBottom: '8mm' }}
    >
      {config.render ? config.render(pageContext) : null}
    </header>
  );
}


function PrintFooter({
  config,
  pageContext,
}: {
  config: NonNullable<PrintConfig['footer']>;
  pageContext: PrintPageContext;
}) {
  const pageLabel =
    config.showPageNumbers
      ? config.pageNumberFormat === 'fraction'
        ? `Page ${pageContext.currentPage} of ${pageContext.totalPages}`
        : `Page ${pageContext.currentPage}`
      : null;

  return (
    <footer
      className={PRINT_CSS_CLASSES.FOOTER}
      style={{
        height: config.height ?? 'auto',
        marginTop: '8mm',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '0.5pt solid #ccc',
        paddingTop: '4mm',
        fontSize: '9pt',
        color: '#666',
      }}
    >
      {config.render ? (
        config.render(pageContext)
      ) : (
        <>
          <span>{pageContext.metadata?.title ?? ''}</span>
          {pageLabel && <span>{pageLabel}</span>}
        </>
      )}
    </footer>
  );
}


export function PrintPageBreak() {
  return (
    <div
      className={PRINT_CSS_CLASSES.PAGE_BREAK}
      style={{ pageBreakAfter: 'always', breakAfter: 'page' }}
      aria-hidden="true"
    />
  );
}