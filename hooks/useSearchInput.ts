import { useCallback, useEffect, useRef, useState } from "react";
import type { SearchFilterConfig } from "@/types/filterType";
import { useFilterContext } from "@/components/providers/FilterProvider";

export function useSearchInput(filterKey: string) {
  const { filters, setFilter, resetFilter, configs } = useFilterContext();
  const config = configs.find((c) => c.key === filterKey) as
    | SearchFilterConfig
    | undefined;
  const debounceMs = config?.debounceMs ?? 300;
  const storeValue = (filters[filterKey] as string) ?? "";
  const [localValue, setLocalValue] = useState(storeValue);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setLocalValue(storeValue);
  }, [storeValue]);

  const handleChange = useCallback(
    (value: string) => {
      setLocalValue(value);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(
        () => setFilter(filterKey, value || null),
        debounceMs,
      );
    },
    [filterKey, setFilter, debounceMs],
  );

  const handleClear = useCallback(() => {
    setLocalValue("");
    resetFilter(filterKey);
  }, [filterKey, resetFilter]);

  return {
    value: localValue,
    placeholder: config?.placeholder ?? "Search…",
    onChange: handleChange,
    onClear: handleClear,
    hasValue: localValue.length > 0,
    setFilter,
  };
}