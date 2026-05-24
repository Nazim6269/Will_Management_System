"use client";
import AppointmentStatsGrid from "../../organisms/dashboard/agent/appointments/AppointmentStatsGrid";
import AppointmentTable from "../../organisms/dashboard/agent/appointments/AppointmentTable";
import { AGENT_ALL_APPOINTMENTS_FILTER_CONFIG } from "@/config/filterConfig";
import { FilterProvider } from "@/components/providers/FilterProvider";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const AppointmentsPage = () => {
  return (
    <Suspense fallback={<Loader2 />}>
      <div>
        <AppointmentStatsGrid />
        <FilterProvider
          configs={AGENT_ALL_APPOINTMENTS_FILTER_CONFIG}
          syncUrl={true}
        >
          <AppointmentTable />
        </FilterProvider>
      </div>
    </Suspense>
  );
};

export default AppointmentsPage;
