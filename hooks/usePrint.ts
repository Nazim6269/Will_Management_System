'use client';


import { useCallback, useRef, useState } from 'react';
import type {
  PrintError,
  PrintStatus,
  UsePrintOptions,
  UsePrintReturn,
} from '../types/printType';
import { usePrintContext } from '@/context/print-context';
import { PrintManager } from '@/config/PrintManager';
import { renderTemplateToHTML } from '@/config/PrintRenderer';

export function usePrint<TData = unknown>({
  documentType,
  data,
  metadata,
  onSuccess,
  onError,
  printDelay,
}: UsePrintOptions<TData>): UsePrintReturn {
  const { registry } = usePrintContext();

  const [status, setStatus] = useState<PrintStatus>('idle');
  const [error, setError] = useState<PrintError | null>(null);

  const dataRef = useRef(data);
  dataRef.current = data;

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  const print = useCallback(async (): Promise<void> => {
    setError(null);
    setStatus('resolving');

    try {
      await PrintManager.executePrintJob({
        documentType,
        data: dataRef.current,
        registry,
        renderToString: (docType, resolvedData) =>
          renderTemplateToHTML(docType, resolvedData, registry),
        onStatusChange: (s) => setStatus(s as PrintStatus),
        printDelay,
      });

      setStatus('complete');
      onSuccess?.();
    } catch (err) {
      const printError = err as PrintError;
      setError(printError);
      setStatus('error');
      onError?.(printError);
    }
  }, [documentType, registry, onSuccess, onError, printDelay]);

  const preview = useCallback((): void => {
    console.info('[PrintSystem] Preview triggered for:', documentType);
  }, [documentType]);

  return {
    print,
    preview,
    status,
    error,
    isLoading: status === 'resolving' || status === 'rendering' || status === 'ready',
    isReady: status === 'idle' || status === 'complete' || status === 'error',
    reset,
  };
}