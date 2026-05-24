"use client";

import React from "react";
import InvoiceStateGrid from "../../organisms/dashboard/agent/invoices/InvoiceStateGrid";
import InvoiceTable from "../../organisms/dashboard/agent/invoices/InvoiceTable";
import { FilterProvider } from "@/components/providers/FilterProvider";
import { AGENT_ALL_INVOICES_FILTER_CONFIG } from "@/config/filterConfig";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const InvoicePage = () => {
  return (
    <Suspense fallback={<Loader2 />}>
      <div className="flex flex-col">
        <InvoiceStateGrid />
        <FilterProvider
          configs={AGENT_ALL_INVOICES_FILTER_CONFIG}
          syncUrl={true}
        >
          <InvoiceTable />
        </FilterProvider>
      </div>
    </Suspense>
  );
};

export default InvoicePage;
