import { useMemo } from "react";
import { buildClientPredicate } from "@/utils/queryBuilder";
import { useFilterContext } from "@/components/providers/FilterProvider";
import { FilterConfig } from "@/types/filterType";

export const useTableFilter = (config: FilterConfig[], data: any[]) => {
  const { filters } = useFilterContext();
  return useMemo(() => {
    const predicate = buildClientPredicate(config, filters);
    return data.filter(predicate);
  }, [config, filters, data]);
};
