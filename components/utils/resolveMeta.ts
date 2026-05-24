import type {
  PageMeta,
  PageMetaOverrides,
  PermissionChecker,
  RouteConfigNode,
  RouteConfigTree,
  RouteParams,
} from "@/types/metaType";

function resolveField(
  field: string | ((params: RouteParams) => string) | undefined,
  params: RouteParams,
): string | undefined {
  if (!field) return undefined;
  return typeof field === "function" ? field(params) : field;
}

function findDeepestNode(
  pathname: string,
  config: RouteConfigTree,
): RouteConfigNode | undefined {
  const segments = pathname.replace(/^\//, "").split("/").filter(Boolean);

  let currentTree: RouteConfigTree | undefined = config;
  let lastNode: RouteConfigNode | undefined;

  for (const segment of segments) {
    if (!currentTree) break;

    const node: RouteConfigNode =
      currentTree[segment] ??
      Object.values(currentTree).find((_, i) => {
        const key = Object.keys(currentTree!)[i];
        return key.startsWith("[") && key.endsWith("]");
      });

    if (!node) break;

    lastNode = node;
    currentTree = node.children;
  }

  return lastNode;
}

export interface ResolvePageMetaOptions {
  pathname: string;
  params?: RouteParams;
  config: RouteConfigTree;
  overrides?: PageMetaOverrides;
  hasPermission?: PermissionChecker;
}

const NOT_FOUND_META: PageMeta = {
  title: "Not Found",
  description: undefined,
  hideBreadcrumbs: true,
  hideTopbar: false,
  layoutVariant: "default",
};

const FORBIDDEN_META: PageMeta = {
  title: "Access Restricted",
  description: "You do not have permission to view this page.",
  hideBreadcrumbs: true,
  hideTopbar: false,
  layoutVariant: "default",
};

export function resolvePageMeta({
  pathname,
  params = {},
  config,
  overrides = {},
  hasPermission,
}: ResolvePageMetaOptions): PageMeta {
  const node = findDeepestNode(pathname, config);

  if (!node) return NOT_FOUND_META;

  const { metadata } = node;

  if (
    hasPermission &&
    metadata.requiredPermission != null &&
    !hasPermission(metadata.requiredPermission)
  ) {
    return FORBIDDEN_META;
  }

  const resolvedTitle =
    overrides.title ??
    resolveField(metadata.title, params) ??
    NOT_FOUND_META.title;

  const resolvedDescription =
    overrides.description ?? resolveField(metadata.description, params);

  const hideBreadcrumbs =
    overrides.hideBreadcrumbs ?? metadata.hideBreadcrumbs ?? false;

  const hideTopbar = metadata.hideTopbar ?? false;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    hideBreadcrumbs,
    hideTopbar,
    layoutVariant: metadata.layoutVariant ?? "default",
    primaryAction: metadata.primaryAction,
    pageIcon: metadata.pageIcon,
  };
}
