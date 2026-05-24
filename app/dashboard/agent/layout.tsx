import { DashboardLayout } from "@/components/templates/DashboardLayout";
import { agentTopbarConfig } from "@/config/topbarConfig";
import { PermissionProvider } from "@/components/providers/PermissionProvider";
import { getUserPermissions } from "@/lib/auth";

export default async function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const permissions = await getUserPermissions("agent");

  return (
    <PermissionProvider permissions={permissions}>
      <DashboardLayout role="agent" topbarConfig={agentTopbarConfig}>
        {children}
      </DashboardLayout>
    </PermissionProvider>
  );
}
