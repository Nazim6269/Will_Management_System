"use client";

import { TabsRoot as Root } from "./TabsRoot";
import { TabsList as List } from "./TabsList";
import { TabsTrigger as Trigger } from "./TabsTrigger";
import { TabsPanel as Panel } from "./TabsPanel";
import { useTabsContext } from "./TabsContext";

export const Tabs = { Root, List, Trigger, Panel };

export { Root, List, Trigger, Panel, useTabsContext };
export type { TabsRootProps } from "./TabsRoot";
export type { TabsListProps } from "./TabsList";
export type { TabsTriggerProps } from "./TabsTrigger";
export type { TabsPanelProps } from "./TabsPanel";