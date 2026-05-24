import { StatCard } from "@/components/molecules/shared/statCard/StatCard";
import { StatItem } from "@/constants/stat";
import React from "react";

const invoiceStats: StatItem[] = [
  {
    title: "Total Revenue",
    value: "£12,450",
    subtitle: "↑ £2,100 this month",
    variant: "primary",
    textColor: "default",
  },
  {
    title: "Pending Amount",
    value: "£3,200",
    subtitle: "3 unpaid invoices",
    variant: "violet",
    textColor: "violet",
  },
  {
    title: "Total Invoices",
    value: "31",
    subtitle: "Average days overdue: 18",
    variant: "danger",
    textColor: "danger",
  },
  {
    title: "Overdue",
    value: "£800",
    subtitle: "↓ 1 overdue invoice",
    variant: "warning",
    textColor: "warning",
  },
];

const InvoiceStateGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {invoiceStats.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};

export default InvoiceStateGrid;
