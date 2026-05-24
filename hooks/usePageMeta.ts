import { usePathname, useParams } from "next/navigation";
import { useMemo } from "react";

import { routeConfig } from "@/components/organisms/dashboard/metaConfig";
import { resolvePageMeta } from "@/components/utils/resolveMeta";
import { useMetaContext, usePermission } from "@/hooks";

import type { PageMeta, RouteParams } from "@/types/metaType";

export function usePageMeta(): PageMeta {
  const pathname = usePathname();
  const params = useParams() as RouteParams;
  const { hasPermission } = usePermission() as any; 

  const { overrides } = useMetaContext();

  return useMemo(
    () =>
      resolvePageMeta({
        pathname,
        params,
        config: routeConfig,
        overrides,
        hasPermission,
      }),
    [pathname, JSON.stringify(params), hasPermission, overrides],
  );
}
