"use client";

import AppointmentsTable from "@/components/organisms/dashboard/admin/appointments/AppointmentsTable";
import { FilterProvider } from "@/components/providers/FilterProvider";

import { ADMIN_APPOINTMENTS_FILTER_CONFIG } from "@/config/filterConfig";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Appointments = () => {
  return (
    <Suspense fallback={<Loader2 />}>
      <FilterProvider configs={ADMIN_APPOINTMENTS_FILTER_CONFIG} syncUrl={true}>
        <AppointmentsTable />
      </FilterProvider>
    </Suspense>
  );
};

export default Appointments;
