import {
  FilterState,
  FilterValue,
  UseFilterReturns,
  UseFiltersOptions,
} from "@/types/filterType";
import {
  buildInitialState,
  getActiveFilters,
  stateToSearchParams,
} from "@/utils/filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const useDebounceCallback = <T extends (...args: Parameters<T>) => any>(
  fn: T,
  delay: number,
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => fnRef.current(...args), delay);
    },
    [delay],
  ) as T;
};

export function useFilters({
  configs,
  syncUrl,
  onChange,
}: UseFiltersOptions): UseFilterReturns {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [filters, setFilters] = useState<FilterState>(() =>
    buildInitialState(configs, searchParams || new URLSearchParams()),
  );

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const paramString = searchParams?.toString();
  const prevParamString = useRef(paramString);

  useEffect(() => {
    if (prevParamString.current !== paramString) {
      prevParamString.current = paramString;
      setFilters(
        buildInitialState(configs, searchParams || new URLSearchParams()),
      );
    }
  }, [paramString]);

  const pushToUrl = useDebounceCallback((newState: FilterState) => {
    if (!syncUrl) return;
    const params = stateToSearchParams(configs, newState);
    const qs = params.toString();

    startTransition(() => {
      router.push(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    });
  }, 300);

  const setFilter = useCallback(
    (key: string, value: FilterValue) => {
      setFilters((prev) => {
        const next = { ...prev, [key]: value };

        onChangeRef.current?.(next);
        pushToUrl(next);

        return next;
      });
    },
    [pushToUrl],
  );

  const activeFilters = useMemo(
    () => getActiveFilters(configs, filters),
    [configs, filters],
  );

  const activeCount = useMemo(
    () => Object.keys(activeFilters).length,
    [activeFilters],
  );

  const resetFilter = useCallback(
    (key: string) => {
      const config = configs.find((c) => c.key === key);
      setFilter(key, config?.defaultValue ?? null);
    },
    [configs, setFilter],
  );

  const resetAllFilters = useCallback(() => {
    const defaultState = Object.fromEntries(
      configs.map((c) => [c.key, c.defaultValue ?? null]),
    );

    setFilters(defaultState);
    onChangeRef.current?.(defaultState);

    if (syncUrl) {
      startTransition(() => {
        router.push(pathname || "", { scroll: false });
      });
    }
  }, [configs, syncUrl, pathname, router]);

  const buildQueryString = useCallback(
    () => stateToSearchParams(configs, filters).toString(),
    [configs, filters],
  );
  return {
    filters,
    activeFilters,
    activeCount,
    setFilter,
    resetFilter,
    resetAllFilters,
    isDefaultState: activeCount === 0,
    buildQueryString,
  };
}
