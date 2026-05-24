
export function SidebarHeader({ 
  isCollapsed,
  logo,
  role 
}: { 
  isCollapsed: boolean;
  logo?: { src: string; alt: string; href: string };
  role?: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-6 min-h-[60px]">
      {isCollapsed && (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg  text-white font-bold text-sm select-none bg-gradient-to-br from-cyan-600 to-cyan-500">
          {logo?.alt?.[0] || 'I'}
        </div>
      )}
      {!isCollapsed && (
        <div className="flex min-w-0 flex-col">
          <span className="truncate gradient-text-one font-extrabold text-[1.25rem]">
            {logo?.alt || 'Inherix'}
          </span>
          <span className="text-xs font-semibold text-cyan4A7A74  capitalize tracking-[1px]">
            {role ? `${role} portal` : 'agent portal'}
          </span>
        </div>
      )}
    </div>
  );
}