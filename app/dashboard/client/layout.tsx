import { DashboardLayout } from "@/components/templates/DashboardLayout";
import { clientTopbarConfig } from "@/config/topbar/client.topbar";
import { PermissionProvider } from "@/components/providers/PermissionProvider";
import { getUserPermissions } from "@/lib/auth";
import { PrintProvider } from "@/context/print-context";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const permissions = await getUserPermissions('client');

  return (
    <PermissionProvider permissions={permissions}>
      <PrintProvider>
        <DashboardLayout role="client" topbarConfig={clientTopbarConfig}>
          {children}
        </DashboardLayout>
      </PrintProvider>
    </PermissionProvider>
  );
}