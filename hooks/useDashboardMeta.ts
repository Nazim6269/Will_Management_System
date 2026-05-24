// hooks/useDashboardMeta.ts
import { usePathname } from 'next/navigation';
import type { DashboardMeta } from '@/types/dashboardType';

// Define metadata for every route in a central map
const routeMeta: Record<string, DashboardMeta> = {
  '/agent/dashboard': { title: 'Dashboard',   breadcrumbs: [{ label: 'Dashboard' }] },
  '/agent/leads':     { title: 'My Leads',    breadcrumbs: [{ label: 'Dashboard', href: '/agent/dashboard' }, { label: 'Leads' }] },
  '/admin/users':     { title: 'User Management', breadcrumbs: [{ label: 'Admin', href: '/admin/dashboard' }, { label: 'Users' }] },
};

export function useDashboardMeta(): DashboardMeta {
  const pathname = usePathname();
  return routeMeta[pathname] ?? { title: 'Dashboard', breadcrumbs: [] };
}