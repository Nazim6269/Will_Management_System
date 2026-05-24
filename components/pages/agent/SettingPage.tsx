import React from "react";
import SettingsNav from "../../organisms/dashboard/agent/setting/SettingNav";
import DisplayLocalisationCard from "../../organisms/dashboard/agent/setting/SettingCard";

const SettingPage = () => {
  return (
    <div className="grid xl:grid-cols-12 gap-4">
      <div className="xl:col-span-2">
        <SettingsNav />
      </div>
      <div className="xl:col-span-10">
        <DisplayLocalisationCard />
      </div>
    </div>
  );
};

export default SettingPage;
