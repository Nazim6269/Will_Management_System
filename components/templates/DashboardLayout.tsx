"use client";
import { SidebarProvider } from "@/context/sidebar-context";
import { MetaProvider } from "@/context/meta-context";
import { Sidebar } from "@/components/organisms/dashboard/agent/overview/Sidebar";
import Topbar from "@/components/organisms/dashboard/Topbar";
import type {
  DashboardLayoutProps,
  SidebarConfig,
} from "@/types/dashboardType";
import { useSidebar } from "@/context/sidebar-context";
import {
  AGENT_NAV_CONFIG,
  CLIENT_NAV_CONFIG,
  ADMIN_NAV_CONFIG,
} from "@/constants/navItems";

function DashboardLayoutContent({
  children,
  role,
}: Pick<DashboardLayoutProps, "children" | "role" | "topbarConfig">) {
  const { open } = useSidebar();

  const navConfig =
    role === "admin"
      ? ADMIN_NAV_CONFIG
      : role === "client"
        ? CLIENT_NAV_CONFIG
        : AGENT_NAV_CONFIG;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-blue8 text-gray-100">
      <Sidebar navConfig={navConfig} />

      {/* Main content area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-3 sm:p-6">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <MetaProvider>
        <DashboardLayoutContent {...props} />
      </MetaProvider>
    </SidebarProvider>
  );
}
