import { DashboardLayout } from "@/components/templates/DashboardLayout";
import { ADMIN_NAV_CONFIG } from "@/constants/navItems";
import { adminTopbarConfig } from "@/config/topbarConfig";
import { PermissionProvider } from "@/components/providers/PermissionProvider";
import { getUserPermissions } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const permissions = await getUserPermissions('admin');

  return (
    <PermissionProvider permissions={permissions}>
      <DashboardLayout role="admin" topbarConfig={adminTopbarConfig}>
        {children}
      </DashboardLayout>
    </PermissionProvider>
  );
}