"use client";

import { createContext, useContext, type ReactNode } from "react";

export interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext(componentName: string): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error(`<${componentName}> must be used inside <Tabs.Root>`);
  }
  return ctx;
}
