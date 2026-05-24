import type { TopbarConfig } from "@/types/dashboardType";

export const agentTopbarConfig: TopbarConfig = {
  showSearch: true,
  showNotifications: true,
  showHelp: true,
  actions: [
    {
      id: "new-lead",
      label: "New Lead",
      icon: "Plus",
      variant: "primary",
      href: "/agent/leads/new",
    },
  ],
};

export const adminTopbarConfig: TopbarConfig = {
  showSearch: true,
  showNotifications: true,
  showHelp: false,
  actions: [
    {
      id: "invite-user",
      label: "Invite User",
      icon: "UserPlus",
      variant: "primary",
      permissions: ["manage:users"],
      href: "/admin/users/invite",
    },
    {
      id: "export",
      label: "Export",
      icon: "Download",
      variant: "ghost",
      permissions: ["view:reports"],
    },
  ],
};
