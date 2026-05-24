import type { ComponentType } from "react";

export type PathSegment = string;
export type Pathname = string;
export type RouteParams = Record<string, string | string[]>;
export type PermissionKey = string;

export interface RouteMetadata {
  title: string | ((params: RouteParams) => string);
  description?: string | ((params: RouteParams) => string);
  breadcrumbLabel?: string | ((params: RouteParams) => string);
  breadcrumbIcon?: ComponentType<{ size?: number; className?: string }>;
  hideBreadcrumbs?: boolean;
  excludeFromBreadcrumbs?: boolean;
  requiredPermission?: PermissionKey | null;
  hideTopbar?: boolean;
  pageIcon?: ComponentType<{ size?: number; className?: string }>;
  layoutVariant?: "default" | "actions" | "primary";
  primaryAction?: {
    label: string;
    icon?: ComponentType<{ size?: number; className?: string }>;
  };
  meta?: Record<string, unknown>;
}

export interface RouteConfigNode {
  metadata: RouteMetadata;
  children?: RouteConfigTree;
}

export type RouteConfigTree = Record<PathSegment, RouteConfigNode>;

export interface Breadcrumb {
  label: string;
  href: string;
  isCurrentPage: boolean;
  icon?: ComponentType<{ size?: number; className?: string }>;
}

export interface PageMeta {
  title: string;
  description: string | undefined;
  hideBreadcrumbs: boolean;
  hideTopbar: boolean;
  layoutVariant: "default" | "actions" | "primary";
  primaryAction?: {
    label: string;
    icon?: ComponentType<{ size?: number; className?: string }>;
  };
  pageIcon?: ComponentType<{ size?: number; className?: string }>;
}

export type PageMetaOverrides = Partial<
  Pick<PageMeta, "title" | "description" | "hideBreadcrumbs">
>;

export type PermissionChecker = (permission: PermissionKey) => boolean;

export interface MetaContextValue {
  overrides: PageMetaOverrides;
  setOverrides: (overrides: PageMetaOverrides) => void;
}
