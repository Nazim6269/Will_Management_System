import { StatCard } from "@/components/molecules/shared/statCard/StatCard";
import { StatItem } from "@/constants/stat";

const appointmentStats: StatItem[] = [
  {
    title: "This Week",
    value: "9",
    subtitle: "↑ 2 vs last week",
    variant: "primary",
  },
  {
    title: "This Month",
    value: "14",
    subtitle: "↑ 2 vs last month",
    variant: "violet",
  },
  {
    title: "Pending Approval",
    value: "31",
    subtitle: "Awaiting your action",
    variant: "danger",
  },
  {
    title: "Today",
    value: "4",
    subtitle: "Next: 10:00 AM",
    variant: "warning",
  },
];

const AppointmentStatsGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {appointmentStats.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AppointmentStatsGrid;
