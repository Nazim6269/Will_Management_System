import { useNavigation } from "@/hooks/useNavigation";
import type { NavConfig } from "@/constants/navItems";
import { NavItemButton } from "./NavitemButton";

export function NavSection({
  title,
  items,
  isCollapsed,
  navigation,
}: {
  title: string;
  items: NavConfig[number]["items"];
  isCollapsed: boolean;
  navigation: ReturnType<typeof useNavigation>;
}) {
  return (
    <div className="mb-2">
      {!isCollapsed && (
        <p className="mb-1 px-2.5 py-2 text-[10px] font-semibold uppercase tracking-widest text-cyan4A7A74">
          {title}
        </p>
      )}
      <div className="flex flex-col gap-0.5 px-1.5">
        {items.map((item) => (
          <NavItemButton
            key={item.id}
            item={item}
            isActive={navigation.isActive(item.href) && !item.children?.length}
            isParentActive={navigation.isParentActive(item)}
            isCollapsed={isCollapsed}
            isSubmenuOpen={navigation.isSubmenuOpen(item.id)}
            onToggleSubmenu={navigation.toggleSubmenu}
            onNavigate={navigation.navigate}
            isChildActive={(childId) => {
              const child = item.children?.find((c) => c.id === childId);
              return child ? navigation.isActive(child.href) : false;
            }}
          />
        ))}
      </div>
    </div>
  );
}
