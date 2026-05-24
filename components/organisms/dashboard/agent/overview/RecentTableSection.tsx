"use client";

import React from "react";
import TodayAppointments from "./TodayAppointments";
import RecentClientsTable from "./RecentClientsTable";
import RecentActivity from "./RecentActivity";

const RecentTableSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
      <div className="lg:col-span-8">
        <RecentClientsTable />
      </div>
      <div className="lg:col-span-4 space-y-4">
        <TodayAppointments />
        <RecentActivity />
      </div>
    </div>
  );
};

export default RecentTableSection;