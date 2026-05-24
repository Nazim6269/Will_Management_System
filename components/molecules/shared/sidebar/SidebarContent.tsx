import { useSidebar } from "@/context/sidebar-context";
import { useNavigation } from "@/hooks/useNavigation";
import type { NavConfig } from "@/constants/navItems";
import type { SidebarConfig } from "@/types/dashboardType";
import { NavSection } from "@/components/atoms/nav/NavSection";
import { SidebarFooter } from "@/components/atoms/nav/SidebarFooter";
import { SidebarHeader } from "@/components/atoms/nav/SidebarHeader";

export function SidebarContent({
  navConfig,
  config,
  isCollapsed,
  isDrawer,
  onClose,
}: {
  navConfig?: NavConfig;
  config?: SidebarConfig;
  isCollapsed: boolean;
  isDrawer: boolean;
  onClose: () => void;
}) {
  const { toggleCollapse } = useSidebar();

  // Normalize sections from config or navConfig
  const sections = config 
    ? config.sections.map(s => ({ title: s.label || '', items: s.items as any })) 
    : navConfig || [];

  const navigation = useNavigation({
    items: sections.flatMap((s) => s.items),
    onMobileClose: isDrawer ? onClose : undefined,
  });

  return (
    <div className="flex h-full flex-col bg-blue16">
      <SidebarHeader 
        isCollapsed={isCollapsed} 
        logo={config?.logo} 
        role={config?.role} 
      />

      <nav
        className="flex-1 overflow-y-auto overflow-x-hidden py-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
        role="navigation"
        aria-label="Main navigation"
      >
        {sections.map((section) => (
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
        footerConfig={config?.footer}
      />
    </div>
  );
}
