import { Bell, FolderOpen, User, Plus } from "lucide-react";

import type { RouteConfigTree } from "@/types/metaType";

export const routeConfig: RouteConfigTree = {
  dashboard: {
    metadata: {
      title: "Dashboard",
    },
    children: {
      agent: {
        metadata: {
          title: "Good morning, James ",
          description: "Here's your overview for today",
        },
        children: {
          clients: {
            metadata: {
              title: "My Clients",
              description: "24 active clients assigned to you",
              layoutVariant: "primary",
              primaryAction: {
                label: "New Client",
                icon: Plus,
              },
            },
          },

          "will-forms": {
            metadata: {
              title: "Will Form - Sarah Johnson",
              description:
                "Complete all sections to generate the PDF will document",
              layoutVariant: "actions",
            },
            children: {
              assets: {
                metadata: {
                  title: (params) => `Will Form - Sarah Johnson`,
                  description: (params) =>
                    `Complete all sections to generate the PDF will document`,
                  layoutVariant: "actions",
                },
              },
              requests: {
                metadata: {
                  title: (params) => `Specific Bequests - Sarah Johnson`,
                  description: (params) =>
                    `Premium feature - tie specific assets to named beneficiaries`,
                  layoutVariant: "actions",
                },
              },
            },
          },

          invoices: {
            metadata: {
              title: "Invoices ",
              description: "Create and manage all client invoices",
            },
          },

          appointments: {
            metadata: {
              title: "Appointments ",
              description: "Manage your schedule and client appointments",
            },
          },

          settings: {
            metadata: {
              title: "Settings",
              description: "Manage settings",
            },
          },

          profile: {
            metadata: {
              title: "Profile",
              description: "Manage your profile",
            },
          },

          notifications: {
            metadata: {
              title: "Notifications",
              description: "Manage your notifications",
            },
          },
        },
      },
      client: {
        metadata: {
          title: "Client Portal",
          description: "Manage your personal estate planning",
        },
        children: {
          "my-wills": {
            metadata: { title: "My Wills", description: "View and manage your completed will documents" },
          },
          nominations: {
            metadata: { title: "Nominations", description: "Manage your beneficiaries and executor nominations" },
          },
          invoices: {
            metadata: { title: "Invoices", description: "View and pay your estate planning invoices" },
          },
          appointments: {
            metadata: { title: "Appointments", description: "Your upcoming meetings with our team" },
          },
          profile: {
            metadata: { title: "My Profile", description: "Manage your personal information" },
          },
          "contact-agent": {
            metadata: { title: "Contact Agent", description: "Get in touch with your dedicated agent" },
          },
          "help-faq": {
            metadata: { title: "Help & FAQ", description: "Common questions and documentation" },
          },
        },
      },
      admin: {
        metadata: {
          title: "Admin Dashboard",
          description: "Global system overview and user management",
        },
        children: {
          users: {
            metadata: { title: "User Management", description: "Manage agents, clients, and internal staff" },
          },
          reports: {
            metadata: { title: "System Reports", description: "Global performance and usage statistics" },
          },
          billing: {
            metadata: { title: "Global Billing", description: "Monitor all transaction and subscription logs" },
          },
          settings: {
            metadata: { title: "Global Settings", description: "System-wide configuration and preferences" },
          },
        },
      },
    },
  },
};




