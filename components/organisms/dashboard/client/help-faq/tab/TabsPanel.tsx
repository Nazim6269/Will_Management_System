"use client";

import React, { type ReactNode } from "react";
import { useTabsContext } from "./TabsContext";

export interface TabsPanelProps {
  value: string;
  children: ReactNode;
  className?: string;
  strategy?: "lazy" | "eager";
}

export function TabsPanel({
  value,
  children,
  className,
  strategy = "lazy",
}: TabsPanelProps) {
  const { activeTab } = useTabsContext("Tabs.Panel");
  const isActive = activeTab === value;

  if (strategy === "lazy" && !isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={strategy === "eager" ? !isActive : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
