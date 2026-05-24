import React, {
  useRef,
  useId,
  useCallback,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";

import { cn } from "@/lib/utils";
import {
  GenericSearchHandle,
  GenericSearchProps,
  SearchResult,
} from "@/types/searchType";
import {
  useClickOutside,
  useDebounce,
  useKeyboardNav,
  useSearch,
} from "@/hooks";
import { cva, type VariantProps } from "class-variance-authority";
import { SearchIcon } from "lucide-react";
import { SearchDropdown } from "../molecules/shared/search/SearchDropdown";
import { ClearIcon, LoadingSpinner } from "./icons";

const genericSearchVariants = cva(
  "flex items-center gap-1.5 px-3 w-full border transition-all duration-150 ease-out",
  {
    variants: {
      isFocused: {
        true: "border-borderColor shadow-[0_0_0_3px_rgba(123,92,246,0.2)] bg-blue14",
        false: "border-borderColor bg-blue14",
      },

      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },

      radius: {
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
      },
      size: {
        sm: "h-8",
        md: "h-9.5",
        lg: "h-11",
      },
    },
    defaultVariants: {
      isFocused: false,
      disabled: false,
      radius: "md",
      size: "md",
    },
  },
);

const inputVariants = cva(
  "flex-1 min-w-0 bg-transparent h-full outline-none text-gray96 placeholder:text-cyan4A7A74 text-sm font-normal [&::-webkit-search-cancel-button]:hidden",
);


interface Props<T extends SearchResult>
  extends GenericSearchProps<T>,
    Omit<VariantProps<typeof genericSearchVariants>, "disabled" | "radius" | "size"> {}

function GenericSearchInner<T extends SearchResult>(
  props: Props<T>,
  ref: React.ForwardedRef<GenericSearchHandle>,
) {
  const {
    value: controlledValue,
    defaultValue = "",
    onSearch,
    onSelect,
    onFocus,
    onBlur,
    onClear,
    onChange,
    placeholder = "Search…",
    debounceMs = 300,
    minChars = 1,
    maxResults = 50,
    size = "md",
    radius = "md",
    showIcon = true,
    showClear = true,
    showRecentSearches = true,
    recentSearches = [],
    renderResult,
    renderEmpty,
    renderLoading,
    renderError,
    groupBy,
    filterResults,
    className,
    inputClassName,
    dropdownClassName,
    disabled = false,
    autoFocus = false,
    ariaLabel = "Search",
    id: externalId,
  } = props;

  const internalId = useId();
  const id = externalId ?? internalId;
  const listboxId = `${id}-listbox`;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputValue = isControlled ? controlledValue : internalValue;

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(inputValue, debounceMs);

  const shouldSearch = debouncedQuery.trim().length >= minChars && isFocused;

  const { results, status, error } = useSearch({
    query: debouncedQuery,
    enabled: shouldSearch,
    onSearch,
    maxResults,
    filterResults,
  });

  const isOpen =
    isFocused &&
    (shouldSearch ||
      (showRecentSearches && recentSearches.length > 0 && !inputValue));

  const displayItems = useMemo(() => {
    if (!shouldSearch && showRecentSearches && !inputValue) {
      return recentSearches.map((r) => ({ ...r, _isRecent: true }));
    }
    return results;
  }, [shouldSearch, showRecentSearches, inputValue, recentSearches, results]);

  const handleSelect = useCallback(
    (item: T) => {
      const displayLabel = item.label || String(item.id);

      if (!isControlled) setInternalValue(displayLabel);
      onChange?.(displayLabel);
      onSelect?.(item);
      setIsFocused(false);
      inputRef.current?.blur();
    },
    [isControlled, onChange, onSelect],
  );

  const { activeIndex, resetIndex } = useKeyboardNav({
    isOpen,
    itemCount: displayItems.length,
    onSelect: (idx: any) => handleSelect(displayItems[idx] as T),
    onClose: () => {
      setIsFocused(false);
      inputRef.current?.blur();
    },
    inputRef,
  });

  useClickOutside(containerRef, () => {
    setIsFocused(false);
    resetIndex();
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
      resetIndex();
    },
    [isControlled, onChange, resetIndex],
  );

  const handleClear = useCallback(() => {
    if (!isControlled) setInternalValue("");
    onChange?.("");
    onClear?.();
    resetIndex();
    inputRef.current?.focus();
  }, [isControlled, onChange, onClear, resetIndex]);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
    },
    [onBlur],
  );

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: handleClear,
    getValue: () => inputValue,
  }));

  const showLoadingIcon = status === "loading" && shouldSearch;
  const showClearButton = showClear && inputValue.length > 0 && !disabled;

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-owns={listboxId}
    >
      <div
        className={cn(
          genericSearchVariants({ isFocused, disabled, radius, size }),
          "w-full", // Overriding/Ensuring width
        )}
      >
        {showIcon && (
          <span className="shrink-0 text-cyan4A7A74 transition-colors duration-150">
            {showLoadingIcon ? <LoadingSpinner /> : <SearchIcon size={18}/>}
          </span>
        )}

        <input
          ref={inputRef}
          id={id}
          type="search"
          role="searchbox"
          autoComplete="off"
          autoFocus={autoFocus}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-activedescendant={
            activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          className={cn(inputVariants(), inputClassName)}
        />


        {showClearButton && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            tabIndex={-1}
            className={cn(
              "shrink-0 flex items-center justify-center",
              "w-5 h-5 rounded-full",
              "text-cyan4A7A74 hover:text-gray96",
              "hover:bg-white/10",
              "transition-colors duration-100",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-borderColor",
            )}
          >
            <ClearIcon  />
          </button>
        )}
      </div>

      {isOpen && (
        <SearchDropdown
          id={listboxId}
          items={displayItems as T[]}
          activeIndex={activeIndex}
          status={status}
          error={error}
          query={debouncedQuery}
          groupBy={groupBy}
          renderResult={renderResult}
          renderEmpty={renderEmpty}
          renderLoading={renderLoading}
          renderError={renderError}
          onSelect={handleSelect}
          className={dropdownClassName}
        />
      )}
    </div>
  );
}

export const GenericSearch = forwardRef(GenericSearchInner) as (<T>(
  props: GenericSearchProps<T> & {
    ref?: React.ForwardedRef<GenericSearchHandle>;
  },
) => React.ReactElement) & { displayName?: string };

GenericSearch.displayName = "GenericSearch";
