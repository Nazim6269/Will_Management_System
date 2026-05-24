import { useState, useMemo } from "react";

export function useTableToggle<T>(data: T[], previewCount: number = 3) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedData = useMemo(() => {
    return isExpanded ? data : data.slice(0, previewCount);
  }, [data, isExpanded, previewCount]);

  const toggle = () => setIsExpanded((prev) => !prev);

  return {
    isExpanded,
    displayedData,
    toggle,
    viewAllText: isExpanded ? "View Less" : "View All",
  };
}
