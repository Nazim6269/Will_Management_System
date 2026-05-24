import { useFilterContext } from "@/components/providers/FilterProvider";
import { RotateCcw } from "lucide-react";
import React from "react";

const FilterBarWrapper = ({
  children,
  className = "",
  showCount = true,
  resetLabel = "Reset filters",
}: {
  children: React.ReactNode;
  className?: string;
  showCount?: boolean;
  resetLabel?: string;
}) => {
  const { isDefaultState, resetAllFilters } = useFilterContext();

  return (
    <div
      className={`flex flex-col sm:flex-row gap-2 w-full sm:w-auto  ${className}`}
      role="search"
      aria-label="Table filters"
    >
      {children}
      {!isDefaultState && (
        <button
          type="button"
          onClick={resetAllFilters}
          className="mx-auto flex shrink-0 items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-500 dark:border-slate-600 dark:text-slate-400 dark:hover:border-red-700 dark:hover:bg-red-950/30 dark:hover:text-red-400 cursor-pointer"
          aria-label={resetLabel}
        >
          <RotateCcw className="h-3 w-3" />
          {resetLabel}
        </button>
      )}
    </div>
  );
};

export default FilterBarWrapper;
