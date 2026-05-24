import {
  TotalAgents,
  TotalClients,
  TotalRevenue,
  WillCompleted,
} from "@/components/atoms/icons";
import { StatCard } from "@/components/molecules/shared/statCard/StatCard";
import { StatItem } from "@/constants/stat";

const statData: StatItem[] = [
  {
    title: "Total Agents",
    value: "8",
    subtitle: "↑ 1 this month",
    variant: "primary",
    textColor: "default",
    icon: TotalAgents,
  },
  {
    title: "Total Clients",
    value: "48",
    subtitle: "↑ 6 this month",
    variant: "violet",
    textColor: "violet",
    icon: TotalClients,
  },
  {
    title: "Wills Completed",
    value: "38",
    subtitle: "↑ 4 this month",
    variant: "danger",
    textColor: "danger",
    icon: WillCompleted,
  },
  {
    title: "Total Revenue",
    value: "£11,250",
    subtitle: "↑ £2,100 this month",
    variant: "warning",
    textColor: "warning",
    icon: TotalRevenue,
  },
];

const StatGrid = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2  lg:grid-cols-4 mt-6">
      {statData.map((item, index) => (
        <StatCard key={index} {...item} size="md" />
      ))}
    </div>
  );
};

export default StatGrid;
