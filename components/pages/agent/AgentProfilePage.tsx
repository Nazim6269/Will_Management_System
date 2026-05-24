import AgentProfileCard from "@/components/organisms/dashboard/agent/profile/AgentProfileCard";
import React from "react";
import AccountStatusCard from "../../organisms/dashboard/agent/profile/AccountStatus";
import PersonalInfo from "../../organisms/dashboard/agent/profile/PersonalInfo";
import ChangePassword from "../../organisms/dashboard/agent/profile/ChangePassword";
import DangerZoneCard from "../../organisms/dashboard/agent/profile/DangerZone";

const AgentProfilePage = () => {
  return (
    <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-8">
      <div className="col-span-12 lg:col-span-4">
        <AgentProfileCard />
        <AccountStatusCard />
      </div>
      <div className="col-span-12 lg:col-span-8 space-y-5">
        <PersonalInfo />
        <ChangePassword />
        <DangerZoneCard />
      </div>
    </div>
  );
};

export default AgentProfilePage;
