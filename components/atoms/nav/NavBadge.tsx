import { cn } from "@/lib/utils";

export function NavBadge({ value }: { value: string | number }) {
  const isNumeric = typeof value === "number";
  return (
    <span
      className={cn(
        "ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded-full leading-none",
        isNumeric
          ? "bg-cyan64/20 text-cyan64 tabular-nums"
          : "bg-cyan64/15 text-cyan64",
      )}
    >
      {value}
    </span>
  );
}
