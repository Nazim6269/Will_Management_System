// ---------------------------------------------------------------------------
// Tooltip (shown when sidebar is collapsed)

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
export default function NavTooltip({ label }: { label: string }) {
  return (
    <div
      role="tooltip"
      className={cn(
        "absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50",
        "px-2 py-1 rounded-md text-[11px] font-medium whitespace-nowrap",
        "bg-gray-800 text-gray-100 border border-white/10",
        "shadow-lg pointer-events-none",
        "opacity-0 group-hover:opacity-100 transition-opacity duration-150",
      )}
    >
      {label}
    </div>
  );
}
