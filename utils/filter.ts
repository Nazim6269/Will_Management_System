import { FilterConfig, FilterState, FilterValue } from "@/types/filterType";

export const buildInitialState = (
  configs: FilterConfig[],
  params: URLSearchParams,
): FilterState => {
  return Object.fromEntries(
    configs.map((config) => {
      const raw = params.get(config.key);
      if (raw !== null)
        return [config.key, deserializeFilterValue(config, raw)];

      return [config.key, config.defaultValue ?? null];
    }),
  );
};

const deserializeFilterValue = (config: FilterConfig, raw: string) => {
  if (!raw) return config.defaultValue ?? null;
  if (config.deserialize) {
    try {
      return config.deserialize(raw);
    } catch {
      return config.defaultValue ?? null;
    }
  }

  switch (config.type) {
    case "search":
      return raw;

    case "select": {
      const valid = config.options.find((o) => o.value === raw);
      return valid ? raw : (config.defaultValue ?? null);
    }
    default:
      return raw;
  }
};

export function stateToSearchParams(
  configs: FilterConfig[],
  state: FilterState,
): URLSearchParams {
  const params = new URLSearchParams();
  for (const config of configs) {
    const serialized = serializeFilterValue(config, state[config.key]);
    if (serialized !== null) params.set(config.key, serialized);
  }
  return params;
}

export function serializeFilterValue(
  config: FilterConfig,
  value: FilterValue,
): string | null {
  if (value === null || value === undefined || value === "") return null;
  if (config.serialize) return config.serialize(value);

  if (Array.isArray(value)) {
    return value.length === 0 ? null : value.join(",");
  }

  return String(value);
}

export function getActiveFilters(
  configs: FilterConfig[],
  state: FilterState,
): Record<string, NonNullable<FilterValue>> {
  const active: Record<string, NonNullable<FilterValue>> = {};
  for (const config of configs) {
    const value = state[config.key];
    if (isEmptyValue(value)) continue;
    if (isEqualToDefault(value, config.defaultValue)) continue;
    active[config.key] = value as NonNullable<FilterValue>;
  }
  return active;
}

function isEmptyValue(value: FilterValue): boolean {
  if (value === null || value === undefined || value === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

function isEqualToDefault(
  value: FilterValue,
  defaultValue: FilterValue,
): boolean {
  if (defaultValue === undefined) return false;
  return JSON.stringify(value) === JSON.stringify(defaultValue);
}
