// ---------------------------------------------------------------------------
// Sub-item (child route)

import Link from "next/link";
import { NavBadge } from "./NavBadge";
import { cn } from "@/lib/utils";
import { NavItemChild } from "@/constants/navItems";

// ---------------------------------------------------------------------------
interface NavSubItemProps {
  item: NavItemChild;
  isActive: boolean;
  onNavigate: (href: string) => void;
}

export default function NavSubItem({ item, isActive, onNavigate }: NavSubItemProps) {
  return (
    <Link
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(item.href);
      }}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex items-center gap-2 rounded-md pl-9 pr-3 py-1.5 text-[12.5px]",
        "transition-colors duration-150 w-full",
        isActive
          ? "text-cyan64 font-medium"
          : "text-cyan65 hover:text-cyan64 hover:bg-cyan64/10",
      )}
    >

      {item.label}
      {item.badge !== undefined && <NavBadge value={item.badge} />}
    </Link>
  );
}
