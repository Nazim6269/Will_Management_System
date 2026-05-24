"use client";

import React, { useMemo, type ReactNode } from "react";
import { TabsContext, type TabsContextValue } from "./TabsContext";

export interface TabsRootProps {
  value: string;
  onChange: (tab: string) => void;
  children: ReactNode;
  className?: string;
}

export function TabsRoot({ value, onChange, children, className }: TabsRootProps) {
  const ctx = useMemo<TabsContextValue>(
    () => ({ activeTab: value, setActiveTab: onChange }),
    [value, onChange]
  );

  return (
    <TabsContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}
