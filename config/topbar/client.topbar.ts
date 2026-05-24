// config/topbar/client.topbar.ts
import type { TopbarConfig } from "@/types/dashboardType";

export const clientTopbarConfig: TopbarConfig = {
  showSearch: true,
  showNotifications: true,
  showHelp: true,
  actions: [
    {
      id: "contact-agent",
      label: "Contact Agent",
      icon: "MessageSquare",
      variant: "primary",
      href: "/client/contact",
    },
  ],
};
