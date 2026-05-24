"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";

import type {
  PrintContextValue,
  PrintDocumentVariant,
  PrintRegistry,
  PrintState,
  PrintTemplateDefinition,
} from "../types/printType";

const INITIAL_PRINT_STATE: PrintState = {
  status: "idle",
  error: null,
  documentType: null,
  startedAt: null,
};

const PrintContext = createContext<PrintContextValue | null>(null);
PrintContext.displayName = "PrintContext";

interface PrintProviderProps {
  children: ReactNode;
  templates?: PrintTemplateDefinition[];
}

export function PrintProvider({
  children,
  templates = [],
}: PrintProviderProps) {
  const registryRef = useRef<PrintRegistry>(new Map());

  useMemo(() => {
    templates.forEach((t) => registryRef.current.set(t.documentType, t));
  }, []);

  const [globalState, setGlobalState] = useReducer(
    (
      _prev: PrintState,
      next: PrintState | ((prev: PrintState) => PrintState),
    ) => (typeof next === "function" ? next(_prev) : next),
    INITIAL_PRINT_STATE,
  );

  const registerTemplate = useCallback(
    (definition: PrintTemplateDefinition) => {
      registryRef.current.set(definition.documentType, definition);
    },
    [],
  );

  const unregisterTemplate = useCallback(
    (documentType: PrintDocumentVariant) => {
      registryRef.current.delete(documentType);
    },
    [],
  );

  const getTemplate = useCallback(
    (documentType: PrintDocumentVariant) =>
      registryRef.current.get(documentType),
    [],
  );

  const value = useMemo<PrintContextValue>(
    () => ({
      registry: registryRef.current,
      registerTemplate,
      unregisterTemplate,
      getTemplate,
      globalState,
      setGlobalState,
    }),
    [globalState, getTemplate, registerTemplate, unregisterTemplate],
  );

  return (
    <PrintContext.Provider value={value}>{children}</PrintContext.Provider>
  );
}

export function usePrintContext(): PrintContextValue {
  const ctx = useContext(PrintContext);
  if (!ctx) {
    throw new Error(
      "[PrintSystem] usePrintContext must be used inside <PrintProvider>. " +
        "Wrap your app (or the relevant page) with <PrintProvider>.",
    );
  }
  return ctx;
}
