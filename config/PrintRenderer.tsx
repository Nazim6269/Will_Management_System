'use client';


import React from 'react';
import { createRoot } from 'react-dom/client';
import type { PrintDocumentVariant, PrintRegistry } from '../types/printType';


export async function renderTemplateToHTML(
  documentType: PrintDocumentVariant,
  data: unknown,
  registry: PrintRegistry
): Promise<string> {
  const template = registry.get(documentType);
  if (!template) {
    throw new Error(`[PrintRenderer] No template found for: "${documentType}"`);
  }

  const { component: Component, config, config: { rootClassName } } = template;

  const container = document.createElement('div');
  container.className = rootClassName ?? 'print-root';
  container.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;overflow:hidden;';
  document.body.appendChild(container);

  return new Promise<string>((resolve, reject) => {
    let root: ReturnType<typeof createRoot> | null = null;

    try {
      root = createRoot(container);
      root.render(
        React.createElement(Component, { data, config, isPreview: false })
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try {
            const html = container.innerHTML;
            resolve(html);
          } catch (err) {
            reject(err);
          } finally {
            // Unmount and remove the off-screen container
            setTimeout(() => {
              root?.unmount();
              container.remove();
            }, 0);
          }
        });
      });
    } catch (err) {
      root?.unmount();
      container.remove();
      reject(err);
    }
  });
}