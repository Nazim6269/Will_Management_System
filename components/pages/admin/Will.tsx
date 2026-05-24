"use client"

import WillsGrid from "@/components/organisms/dashboard/admin/wills/WillsGrid";
import WillsTable from "@/components/organisms/dashboard/admin/wills/WillsTable";
import { FilterProvider } from "@/components/providers/FilterProvider";
import { ADMIN_WILLS_FILTER_CONFIG } from "@/config/filterConfig";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const Will = () => {
  return (
    <Suspense fallback={<Loader2 />}>
    <FilterProvider configs={ADMIN_WILLS_FILTER_CONFIG} syncUrl={true}>
      <WillsGrid />
      <WillsTable />
    </FilterProvider>
    </Suspense>
  );
};

export default Will;
