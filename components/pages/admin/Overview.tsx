import WelcomeCard from "@/components/molecules/shared/WelcomeCard";
import NeedsAttentionCard from "@/components/organisms/dashboard/admin/overview/NeedsAttention";
import RecentAgentTable from "@/components/organisms/dashboard/admin/overview/RecentAgentTable";
import RecentClientTable from "@/components/organisms/dashboard/admin/overview/RecentClientTable";
import RevenueBreakdownCard from "@/components/organisms/dashboard/admin/overview/RevenueBreakdown";
import StatGrid from "@/components/organisms/dashboard/admin/overview/StateGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Overview",
  description: "Admin Overview",
};

const Overview = () => {
  return (
    <div>
      <WelcomeCard variant="admin" />
      <StatGrid />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 xl:col-span-9">
          <RecentAgentTable />
          <RecentClientTable />
        </div>
        <div className="col-span-12 xl:col-span-3 space-y-4">
          <RevenueBreakdownCard />
          <NeedsAttentionCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
