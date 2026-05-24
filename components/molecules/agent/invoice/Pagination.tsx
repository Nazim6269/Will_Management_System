
import React, { useCallback } from "react";
import { DOTS, type UsePaginationReturn } from "@/hooks/usePagination";

type PaginationProps<T> = Pick<
  UsePaginationReturn<T>,
  | "currentPage"
  | "totalPages"
  | "totalItems"
  | "pageRange"
  | "canGoNext"
  | "canGoPrev"
  | "startIndex"
  | "endIndex"
> & {
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
  isLoading?: boolean;
  className?: string;
};

function PageButton({
  page,
  isActive,
  isDisabled,
  onClick,
}: {
  page: number | string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}) {
  const baseClass =
    "inline-flex items-center justify-center h-8 w-8 px-2 text-sm rounded-lg font-medium transition-all duration-150 select-none cursor-pointer";

  if (page === DOTS) {
    return (
      <span
        className={`${baseClass} text-slate-400 cursor-default pointer-events-none`}
      >
        ···
      </span>
    );
  }

  if (isDisabled) {
    return (
      <button
        disabled
        className={`${baseClass} text-slate-300 cursor-not-allowed`}
        aria-disabled="true"
      >
        {page}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? `${baseClass} bg-borderColor/15 font-semibold text-violet85 border border-borderColor/50`
          : `${baseClass} text-cyan65 font-semibold hover:bg-cyan65/35 hover:text-white border border-borderColor/50`
      }
    >
      {page}
    </button>
  );
}

function ChevronButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous page" : "Next page"}
      className={`inline-flex border border-borderColor/30 items-center  justify-center w-9 h-9 rounded-lg transition-all duration-150
        ${
          disabled
            ? "text-slate-300 cursor-not-allowed"
            : "text-slate-500 hover:bg-cyan65/35 hover:text-white cursor-pointer"
        }`}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

export function Pagination<T>({
  currentPage,
  totalPages,
  totalItems,
  pageRange,
  canGoNext,
  canGoPrev,
  startIndex,
  endIndex,
  onPageChange,
  onNext,
  onPrev,
  isLoading = false,
  className = "",
}: PaginationProps<T>) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft" && canGoPrev) onPrev();
      if (e.key === "ArrowRight" && canGoNext) onNext();
    },
    [canGoPrev, canGoNext, onPrev, onNext],
  );

  if (totalPages <= 1 && totalItems === 0) return null;

  return (
    <div
      role="navigation"
      aria-label="Pagination"
      onKeyDown={handleKeyDown}
      className={`flex flex-col sm:flex-row gap-4 items-center justify-between px-4 py-3 ${className}`}
    >
      {/* Results summary */}
      <p className="text-xs text-cyan4A7A74 tabular-nums">
        {isLoading ? (
          <span className="animate-pulse">Loading…</span>
        ) : (
          <>
            Showing{" "}
            <span className="font-semibold text-cyan4A7A74">
              {startIndex}–{endIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-cyan4A7A74">{totalItems}</span>
          </>
        )}
      </p>

      {/* Controls */}
      <div className="flex items-center gap-1.5" aria-label="Page controls">
        <ChevronButton
          direction="prev"
          disabled={!canGoPrev || isLoading}
          onClick={onPrev}
        />

        {pageRange.map((page, i) => (
          <PageButton
            key={page === DOTS ? `dots-${i}` : page}
            page={page}
            isActive={page === currentPage}
            isDisabled={isLoading}
            onClick={
              typeof page === "number" ? () => onPageChange(page) : undefined
            }
          />
        ))}

        <ChevronButton
          direction="next"
          disabled={!canGoNext || isLoading}
          onClick={onNext}
        />
      </div>
    </div>
  );
}
