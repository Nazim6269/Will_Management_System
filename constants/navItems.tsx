import {
  CalenderIcon,
  FileIcon,
  MultiUserIcon,
  NotificationIcon,
  Profile,
  WillIcon,
  Dashboard,
  Nomination,
  DashboardSetting,
  InvoiceIcon,
  ManageAgentIcon,
} from "@/components/atoms/icons";

export interface NavItemChild {
  id: string;
  label: string;
  href: string;
  badge?: string | number;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.FC<any> ;
  badge?: string | number;
  children?: NavItemChild[];
}

export type NavConfig = {
  title: string;
  items: NavItem[];
}[];

export const AGENT_NAV_CONFIG: NavConfig = [
  {
    title: "Main",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "/dashboard/agent",
        icon: Dashboard,
      },
      {
        id: "my-clients",
        label: "My Clients",
        href: "/dashboard/agent/clients",
        icon: MultiUserIcon,
      },
      {
        id: "will-forms",
        label: "Will Forms",
        href: "/dashboard/agent/will-forms",
        icon: FileIcon,
        children: [
          {
            id: "assets",
            label: "Assets",
            href: "/dashboard/agent/will-forms/assets",
          },
          {
            id: "requests",
            label: "Specific Requests",
            href: "/dashboard/agent/will-forms/requests",
          },
        ],
      },

      {
        id: "invoices",
        label: "Invoices",
        href: "/dashboard/agent/invoices",
        icon: InvoiceIcon,
        badge: 3,
      },
      {
        id: "appointments",
        label: "Appointments",
        href: "/dashboard/agent/appointments",
        icon: CalenderIcon,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        id: "profile",
        label: "My Profile",
        href: "/dashboard/agent/profile",
        icon: Profile,
      },
      {
        id: "notification",
        label: "Notifications",
        href: "/dashboard/agent/notifications",
        icon: NotificationIcon,
      },
      {
        id: "Settings",
        label: "Settings",
        href: "/dashboard/agent/settings",
        icon: DashboardSetting,
      },
    ],
  },
];

export const CLIENT_NAV_CONFIG: NavConfig = [
  {
    title: "Main",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "/dashboard/client",
        icon: Dashboard,
      },
      {
        id: "my-wills",
        label: "My Wills",
        href: "/dashboard/client/my-wills",
        icon: WillIcon,
      },
      {
        id: "nominations",
        label: "Nominations",
        href: "/dashboard/client/nominations",
        icon: Nomination,
      },

      {
        id: "invoices",
        label: "Invoices",
        href: "/dashboard/client/invoices",
        icon: InvoiceIcon,
        badge: 3,
      },
      {
        id: "appointments",
        label: "Appointments",
        href: "/dashboard/client/appointments",
        icon: CalenderIcon,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        id: "profile",
        label: "My Profile",
        href: "/dashboard/client/profile",
        icon: Profile,
      },
      {
        id: "contact-agent",
        label: "Contact Agent",
        href: "/dashboard/client/contact-agent",
        icon: NotificationIcon,
      },
      {
        id: "help-faq",
        label: "Help & FAQ",
        href: "/dashboard/client/help-faq",
        icon: DashboardSetting,
      },
    ],
  },
];

export const ADMIN_NAV_CONFIG: NavConfig = [
  {
    title: "Overview",
    items: [
      {
        id: "admin-dashboard",
        label: "Dashboard",
        href: "/dashboard/admin",
        icon: Dashboard,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        id: "admin-agents-manage",
        label: "Manage Agents",
        href: "/dashboard/admin/manage-agents",
        icon: ManageAgentIcon,
      },
      {
        id: "admin-cients-manage",
        label: "Manage Clients",
        href: "/dashboard/admin/manage-clients",
        icon: InvoiceIcon,
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        id: "admin-wills",
        label: "All Wills",
        href: "/dashboard/admin/wills",
        icon:Profile,
      },
      {
        id: "admin-invoices",
        label: "All Invoices",
        href: "/dashboard/admin/invoices",
        icon: NotificationIcon,
      },
      {
        id: "admin-appointments",
        label: "Appointments",
        href: "/dashboard/admin/appointments",
        icon: CalenderIcon ,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        id: "admin-settings",
        label: "Settings",
        href: "/dashboard/admin/settings",
        icon: DashboardSetting,
      },
    ],
  },
];
