import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/constants/navItems";
import { NavBadge } from "./NavBadge";
import NavSubItem from "./NavSubItem";
import NavTooltip from "./NavTolltip";
import { useActiveNav } from "@/hooks";

export interface NavItemButtonProps {
  item: NavItem;
  isActive: boolean;
  isParentActive: boolean;
  isCollapsed: boolean;
  isSubmenuOpen: boolean;
  onToggleSubmenu: (id: string) => void;
  onNavigate: (href: string) => void;
  isChildActive: (id: string) => boolean;
}

export function NavItemButton({
  item,
  isActive,
  isParentActive,
  isCollapsed,
  isSubmenuOpen,
  onToggleSubmenu,
  onNavigate,
  isChildActive,
}: NavItemButtonProps) {
  const hasChildren = !!item.children?.length;
  const { isActive: isSearchOpen } = useActiveNav();
  const isHighlighted = isActive || isParentActive;
  const Icon = item.icon;

  const handleClick = () => {
    onNavigate(item.href);
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSubmenu(item.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="relative">
      {/* Item button */}
      <button
        type="button"
        role="link"
        aria-expanded={hasChildren ? isSubmenuOpen : undefined}
        aria-controls={hasChildren ? `submenu-${item.id}` : undefined}
        aria-current={isActive ? "page" : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "group relative flex w-full items-center gap-3 rounded-lg px-2.5 py-2 cursor-pointer",
          "text-sm transition-all duration-150 outline-none",
          "focus-visible:ring-2 focus-visible:ring-indigo-500/60 ",
          isHighlighted
            ? "bg-cyan64/10 text-cyan64"
            : "text-cyan65 hover:bg-cyan64/20 hover:text-cyan64",
        )}
      >
        {/* Active indicator bar */}
        {isHighlighted && (
          <span className="absolute left-0 top-1.5 bottom-1.5 w-[2.5px] rounded-r-full bg-cyan64" />
        )}

        {/* Icon */}
        <Icon
          size={16}
          className={cn(
            "shrink-0 transition-colors",
            isHighlighted
              ? "text-cyan64"
              : "text-cyan65 group-hover:text-cyan64",
          )}
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 truncate text-left text-base font-medium">
              {item.label}
            </span>
            {item.badge !== undefined && <NavBadge value={item.badge} />}
            {hasChildren && (
              <div
                className="ml-auto p-1 hover:bg-white/10 rounded-md transition-all duration-200"
                onClick={handleToggle}
              >
                <ChevronDown
                  size={14}
                  className={cn(
                    "flex-shrink-0 text-gray-500 transition-transform duration-200",
                    isSubmenuOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </div>
            )}
          </>
        )}

        {isCollapsed && <NavTooltip label={item.label} />}
      </button>

      {hasChildren && !isCollapsed && (
        <AnimatePresence initial={false}>
          {isSubmenuOpen && (
            <motion.div
              id={`submenu-${item.id}`}
              role="group"
              aria-label={`${item.label} submenu`}
              key="submenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-0.5 pb-1 pt-0.5">
                {item.children!.map((child) => (
                  <NavSubItem
                    key={child.id}
                    item={child}
                    isActive={isChildActive(child.id)}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
