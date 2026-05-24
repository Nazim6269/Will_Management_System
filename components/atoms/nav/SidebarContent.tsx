import { useSidebar } from "@/context/sidebar-context";
import { useNavigation } from "@/hooks/useNavigation";
import type { NavConfig } from "@/constants/navItems";
import { NavSection } from "./NavSection";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";

function SidebarContent({
  navConfig,
  isCollapsed,
  isDrawer,
  onClose,
}: {
  navConfig: NavConfig;
  isCollapsed: boolean;
  isDrawer: boolean;
  onClose: () => void;
}) {
  const { toggleCollapse } = useSidebar();
  const navigation = useNavigation({
    items: navConfig.flatMap((s) => s.items),
    onMobileClose: isDrawer ? onClose : undefined,
  });

  return (
    <div className="flex h-full flex-col bg-[#0f1117]">
      <SidebarHeader isCollapsed={isCollapsed} />

      <nav
        className="flex-1 overflow-y-auto overflow-x-hidden py-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
        role="navigation"
        aria-label="Main navigation"
      >
        {navConfig.map((section) => (
          <NavSection
            key={section.title}
            title={section.title}
            items={section.items}
            isCollapsed={isCollapsed}
            navigation={navigation}
          />
        ))}
      </nav>

      <SidebarFooter
        isCollapsed={isCollapsed}
        isCollapsible={!isDrawer}
        onToggleCollapse={toggleCollapse}
      />
    </div>
  );
}
