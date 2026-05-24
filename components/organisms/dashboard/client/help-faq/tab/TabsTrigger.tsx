"use client";

import React, { useCallback, type ReactNode, type KeyboardEvent } from "react";
import { useTabsContext } from "./TabsContext";

export interface TabsTriggerProps {
  value: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  render?: (props: {
    isActive: boolean;
    isDisabled: boolean;
    onClick: () => void;
    onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
    role: string;
    "aria-selected": boolean;
    "aria-controls": string;
    id: string;
    tabIndex: number;
    disabled: boolean;
    children?: ReactNode;
  }) => ReactNode;
}

export function TabsTrigger({
  value,
  children,
  className,
  disabled = false,
  render,
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext("Tabs.Trigger");
  const isActive = activeTab === value;

  const handleClick = useCallback(() => {
    if (!disabled) setActiveTab(value);
  }, [disabled, setActiveTab, value]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!disabled) setActiveTab(value);
      }
    },
    [disabled, setActiveTab, value]
  );

  const sharedProps = {
    role: "tab",
    "aria-selected": isActive,
    "aria-controls": `tabpanel-${value}`,
    id: `tab-${value}`,
    tabIndex: isActive ? 0 : -1,
    disabled,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    children,
  };

  if (render) {
    return <>{render({ ...sharedProps, isActive, isDisabled: disabled })}</>;
  }

  return (
    <button {...sharedProps} className={className}>
      {children}
    </button>
  );
}
