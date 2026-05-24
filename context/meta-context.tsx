"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { MetaContextValue, PageMetaOverrides } from "@/types/metaType";

const MetaContext = createContext<MetaContextValue>({
  overrides: {},
  setOverrides: () => {},
});

MetaContext.displayName = "MetaContext";


export function useMetaContext(): MetaContextValue {
  return useContext(MetaContext);
}

export interface MetaProviderProps {
  children: ReactNode;
  title?: string;
  description?: string;
  overrides?: PageMetaOverrides;
}


export function MetaProvider({
  children,
  title,
  description,
  overrides: overridesProp = {},
}: MetaProviderProps) {
  const initialOverrides: PageMetaOverrides = useMemo(
    () => ({
      ...overridesProp,
      ...(title !== undefined && { title }),
      ...(description !== undefined && { description }),
    }),
 
    [title, description, JSON.stringify(overridesProp)]
  );

  const [overrides, setOverridesState] = useState<PageMetaOverrides>(initialOverrides);

  const setOverrides = useCallback((next: PageMetaOverrides) => {
    setOverridesState((prev) => ({ ...prev, ...next }));
  }, []);

  const value = useMemo<MetaContextValue>(
    () => ({ overrides, setOverrides }),
    [overrides, setOverrides]
  );

  return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
}

export function useSetPageTitle(title: string): void {
  const { setOverrides } = useMetaContext();

  useMemo(() => {
    setOverrides({ title });
  }, [title]);
}