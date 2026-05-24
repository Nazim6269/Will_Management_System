"use client";

import { useMemo } from "react";
import type { PageMeta,  } from "@/types/metaType";
import { usePageMeta } from "./usePageMeta";

export interface TopbarState {
  meta: PageMeta;
  isHidden: boolean;
}

export function useTopbar(): TopbarState {
  const meta = usePageMeta();
  return useMemo(
    () => ({
      meta,
      isHidden: meta.hideTopbar,
    }),
    [meta],
  );
}
