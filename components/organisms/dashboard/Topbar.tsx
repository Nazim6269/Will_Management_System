"use client";
import { useSidebar } from "@/context/sidebar-context";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTopbar } from "@/hooks";
import { getTopbarRightSection } from "@/config/topbar/topbarVariants";

const Topbar = () => {
  const { open, isDrawer } = useSidebar();
  const { meta, isHidden } = useTopbar();

  if (isHidden) return null;

  return (
    <div className="flex flex-col bg-blue16 border-b border-borderColor/18">
      {/* Upper part: Title and Actions */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile menu toggle */}
          {isDrawer && (
            <button
              type="button"
              onClick={open}
              className={cn(
                "text-cyan59",
                "hover:bg-blue20/80 transition-colors",
              )}
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>
          )}

          <div className="min-w-0">
            <h1 className="text-gray96 text-base sm:text-lg font-bold leading-6 truncate">
              {meta.title}
            </h1>
            {meta.description && (
              <p className="text-cyan4A7A74 text-xs leading-4 truncate">
                {meta.description}
              </p>
            )}
          </div>
        </div>

        {getTopbarRightSection(meta)}
      </div>
    </div>
  );
};


export default Topbar;
