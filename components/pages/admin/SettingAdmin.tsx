import AdminSettingCard from "@/components/organisms/dashboard/admin/settings/AdminSettingCard";
import SettingsNav from "@/components/organisms/dashboard/agent/setting/SettingNav";
import React from "react";

const SettingAdmin = () => {
  return (
    <div className="grid xl:grid-cols-12 gap-4">
      <div className="xl:col-span-2">
        <SettingsNav variant={"admin"} />
      </div>
      <div className="xl:col-span-10">
        <AdminSettingCard />
      </div>
    </div>
  );
};

export default SettingAdmin;
