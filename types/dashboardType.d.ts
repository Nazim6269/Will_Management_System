// types/dashboard.types.ts

export type DashboardRole = "agent" | "client" | "admin";

export type Permission =
  | "view:reports"
  | "manage:users"
  | "view:leads"
  | "manage:settings"
  | "view:billing";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  badge?: number | string;
  permissions?: Permission[];
  children?: NavItem[];
  isExternal?: boolean;
}

export interface NavSection {
  id: string;
  label?: string;
  items: NavItem[];
}

export interface SidebarConfig {
  role: DashboardRole;
  logo: { src: string; alt: string; href: string };
  sections: NavSection[];
  footer?: {
    showUserMenu: boolean;
    showThemeToggle: boolean;
  };
}

export interface TopbarAction {
  id: string;
  label: string;
  icon?: string;
  variant: "primary" | "ghost" | "danger";
  permissions?: Permission[];
  onClick?: () => void;
  href?: string;
}

export interface TopbarConfig {
  showSearch: boolean;
  showNotifications: boolean;
  showHelp: boolean;
  actions?: TopbarAction[];
  customRight?: React.ReactNode;
}

export interface DashboardMeta {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarConfig?: SidebarConfig;
  navConfig?: any;
  topbarConfig: TopbarConfig;
  role: DashboardRole;
}
