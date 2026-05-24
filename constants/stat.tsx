import { TextColorVariant } from "@/components/molecules/shared/statCard/StatCard";
import { ReactNode } from "react";

export type StatItem = {
  title: string;
  value: string | number;
  subtitle: string;
  variant?: "primary" | "warning" | "danger" | "violet";
  textColor?: TextColorVariant;
  icon?: React.ComponentType<any>;
};

export const statsData: StatItem[] = [
  {
    title: "TOTAL CLIENTS",
    value: 24,
    subtitle: "↑ 3 this month",
    variant: "primary",
    textColor: "default",
  },
  {
    title: "WILLS COMPLETED",
    value: 18,
    subtitle: "↑ 2 this week",
    variant: "violet",
    textColor: "violet",
  },
  {
    title: "PENDING INVOICES",
    value: "£3,200",
    subtitle: "3 unpaid",
    variant: "warning",
    textColor: "warning",
  },
  {
    title: "TODAY'S APPOINTMENTS",
    value: 3,
    subtitle: "Next: 10:00 AM",
    variant: "danger",
    textColor: "danger",
  },
];
