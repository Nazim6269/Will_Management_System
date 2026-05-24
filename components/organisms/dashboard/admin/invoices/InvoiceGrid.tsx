import {

    CompletedWills,
  Inprogress,
  NotStarted,
  TotalAgents,
  TotalClients,
  TotalRevenue,
  TotalWillsIcon,
  WillCompleted,
  
} from "@/components/atoms/icons";
import { StatCard } from "@/components/molecules/shared/statCard/StatCard";
import { StatItem } from "@/constants/stat";

const statData: StatItem[] = [
  {
    title: "Total revenue",
    value: "$8",
    subtitle: "All time",
    variant: "primary",
    textColor: "default",
    icon: TotalRevenue,
  },
  {
    title: "Paid",
    value: "28",
    subtitle: "32 invoices",
    variant: "violet",
    textColor: "violet",
    icon: WillCompleted,
  },
  {
    title: "Pending",
    value: "8",
    subtitle: "6 invoices",
    variant: "danger",
    textColor: "danger",
    icon: Inprogress,
  },
  {
    title: "Overdue",
    value: "3",
    subtitle: "2 invoices",
    variant: "warning",
    textColor: "warning",
    icon: NotStarted,
  },
];

const InvoiceGrid = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2  lg:grid-cols-4 ">
      {statData.map((item, index) => (
        <StatCard key={index} {...item} size="md" />
      ))}
    </div>
  );
};

export default InvoiceGrid;
