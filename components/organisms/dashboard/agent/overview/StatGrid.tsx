import { StatCard } from "@/components/molecules/shared/statCard/StatCard";
import { statsData } from "@/constants/stat";

export const StatsGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};
