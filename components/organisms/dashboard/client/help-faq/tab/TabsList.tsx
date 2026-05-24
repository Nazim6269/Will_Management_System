"use client";

import React, { type ReactNode } from "react";

export interface TabsListProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

export function TabsList({ children, className, label = "Tabs" }: TabsListProps) {
  return (
    <div role="tablist" aria-label={label} className={className}>
      {children}
    </div>
  );
}
