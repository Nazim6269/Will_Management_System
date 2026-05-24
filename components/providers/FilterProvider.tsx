import { useFilters } from "@/hooks";
import { FilterConfig, UseFilterReturns } from "@/types/filterType";
import { createContext, useContext, useMemo } from "react";

interface FilterContextValue extends UseFilterReturns {
  configs: FilterConfig[];
}

const filterContext = createContext<FilterContextValue | null>(null);

interface FilterProviderProps {
  configs: FilterConfig[];
  syncUrl?: boolean;
  onChange?: (state: Record<string, unknown>) => void;
  children: React.ReactNode;
}

export const FilterProvider = ({
  configs,
  syncUrl = true,
  onChange,
  children,
}: FilterProviderProps) => {
  const filtersApi = useFilters({ configs, syncUrl, onChange });
  const value = useMemo<FilterContextValue>(
    () => ({
      ...filtersApi,
      configs,
    }),
    [filtersApi, configs],
  );
  return (
    <filterContext.Provider value={value}>{children}</filterContext.Provider>
  );
};

export const useFilterContext = (): FilterContextValue => {
  const ctx = useContext(filterContext);
  if (!ctx)
    throw new Error("useFilterContext must be used within a FilterProvider");
  return ctx;
};
export function useFilterSelector<T>(
  selector: (ctx: FilterContextValue) => T,
): T {
  return selector(useFilterContext());
}

export const useOptionalFilterContext = () => {
  return useContext(filterContext);
};
