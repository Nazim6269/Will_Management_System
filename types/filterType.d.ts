export type FilterConfig = SearchFilterConfig | SelectFilterConfig;

export interface SearchFilterConfig extends BaseFilterConfig {
  type: "search";
  placeholder?: string;
  debounceMs?: number;
}

export interface SelectFilterConfig extends BaseFilterConfig {
  type: "select";
  options: SelectOption[];
  placeholder?: string;
}

export interface SelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface BaseFilterConfig {
  key: string;
  label: string;
  defaultValue?: FilterValue;
  deserialize: (raw: string) => FilterValue;
  serialize: (value: FilterValue) => string;
}

export type FilterValue =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | DateRange
  | NumberRange
  | null
  | undefined;

export interface UseFilterReturns {
  filters: FilterState;
  activeFilters: ActiveFilters;
  activeCount: number;
  setFilter: (key: string, value: FilterValue) => void;
  resetFilter: (key: string) => void;
  resetAllFilters: () => void;
  isDefaultState: boolean;
  buildQueryString: () => string;
}

export type FilterState = Record<string, FilterValue>;
export type ActiveFilters = Record<string, NonNullable<FilterValue>>;

export interface UseFiltersOptions {
  configs: FilterConfig[];
  syncUrl?: boolean;
  onChange?: (state: FilterState) => void;
}