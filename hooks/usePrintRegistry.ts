'use client';

// ─────────────────────────────────────────────────────────────────────────────
// PRINT SYSTEM — usePrintRegistry HOOK
// Register/unregister print templates from within feature modules.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from 'react';
import type { PrintDocumentVariant, PrintTemplateDefinition } from '../types/printType';
import { usePrintContext } from '@/context/print-context';

/**
 * Register a print template when a feature component mounts.
 * Auto-unregisters on unmount.
 *
 * Usage:
 *   usePrintRegistry(invoiceTemplateDefinition);
 */
export function usePrintRegistry<TData = any>(
  definition: PrintTemplateDefinition<TData>,
): void {
  const { registerTemplate, unregisterTemplate } = usePrintContext();

  useEffect(() => {
    registerTemplate(definition);
    return () => unregisterTemplate(definition.documentType);
  }, [definition, registerTemplate, unregisterTemplate]);
}

/**
 * Get a specific template definition from the registry.
 * Returns undefined if not registered.
 */
export function useGetPrintTemplate(
  documentType: PrintDocumentVariant
): PrintTemplateDefinition | undefined {
  const { getTemplate } = usePrintContext();
  return getTemplate(documentType);
}