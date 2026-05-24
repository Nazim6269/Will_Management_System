import { LogoutButton } from "@/components/molecules/shared/sidebar/LogoutButton";
import { cn } from "@/lib/utils";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Image from "next/image";

export function SidebarFooter({
  isCollapsed,
  isCollapsible,
  onToggleCollapse,
  footerConfig,
}: {
  isCollapsed: boolean;
  isCollapsible: boolean;
  onToggleCollapse: () => void;
  footerConfig?: {
    showUserMenu: boolean;
    showThemeToggle: boolean;
  };
}) {
  return (
    <div className="border-t border-white/[0.07] p-2 space-y-1">
      {/* User profile */}
      {footerConfig?.showUserMenu !== false && (
        <button
          type="button"
          className={cn(
            "group flex w-full items-center gap-2.5 rounded-lg p-2",
            "text-left transition-colors hover:bg-white/[0.05]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60",
          )}
          aria-label="Open user menu"
        >
          <div className="relative flex-shrink-0">
            <div className="h-9 w-9 rounded-full">
              <Image
                src="/avatar.png"
                alt="User"
                width={36}
                height={36}
                className="rounded-full"
              />
            </div>
          </div>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray96 font-semibold">
                James Thornton
              </p>
              <p className="truncate text-[11px] text-cyan4A7A74">
                james@inherix.com{" "}
              </p>
            </div>
          )}
        </button>
      )}

      <LogoutButton isCollapsed={isCollapsed} onLogout={() => {}} />

      {/* Collapse toggle — desktop only */}
      {isCollapsible && (
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={cn(
            "flex w-full items-center gap-2.5 rounded-lg p-2",
            "text-gray-500 text-[12.5px] transition-colors",
            "hover:bg-white/[0.05] hover:text-gray-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60",
            isCollapsed && "justify-center",
          )}
        >
          {isCollapsed ? (
            <PanelLeftOpen size={15} />
          ) : (
            <>
              <PanelLeftClose size={15} />
              <span>Collapse</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
