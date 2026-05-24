import React from "react";
import { StatsGrid } from "../../organisms/dashboard/agent/overview/StatGrid";
import QuicActions from "../../organisms/dashboard/agent/overview/QuicActions";
import RecentTableSection from "../../organisms/dashboard/agent/overview/RecentTableSection";

const AgentOverview = () => {
  return (
    <div className="flex flex-col gap-6">
      <StatsGrid />
      <QuicActions />
      <RecentTableSection />
    </div>
  );
};

export default AgentOverview;
