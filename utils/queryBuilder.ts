import { FilterConfig, FilterState } from "@/types/filterType";
import { getActiveFilters } from "@/utils/filter";

export function buildClientPredicate<T extends Record<string, unknown>>(
  configs: FilterConfig[],
  state: FilterState,
): (row: T) => boolean {
  const active = getActiveFilters(configs, state);
  const checks: Array<(row: T) => boolean> = [];

  for (const [key, value] of Object.entries(active)) {
    const config = configs.find((c) => c.key === key);
    if (!config) continue;

    switch (config.type) {
      case "search": {
        const term = (value as string).toLowerCase();
        checks.push((row) =>
          Object.values(row).some((val) =>
            String(val ?? "")
              .toLowerCase()
              .includes(term),
          ),
        );
        break;
      }
      case "select":
        checks.push((row) => row[key] === value);
        break;
    }
  }

  return (row) => checks.every((check) => check(row));
}
