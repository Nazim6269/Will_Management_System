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
    title: "Total wills",
    value: "8",
    subtitle: "All time",
    variant: "primary",
    textColor: "default",
    icon: TotalWillsIcon,
  },
  {
    title: "Completed",
    value: "28",
    subtitle: "↑ 6 this month",
    variant: "violet",
    textColor: "violet",
    icon: CompletedWills,
  },
  {
    title: "In Progress",
    value: "8",
    subtitle: "Active draft",
    variant: "danger",
    textColor: "danger",
    icon: Inprogress,
  },
  {
    title: "Not Started",
    value: "3",
    subtitle: "Pending",
    variant: "warning",
    textColor: "warning",
    icon: NotStarted,
  },
];

const WillsGrid = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2  lg:grid-cols-4">
      {statData.map((item, index) => (
        <StatCard key={index} {...item} size="md" />
      ))}
    </div>
  );
};

export default WillsGrid;
