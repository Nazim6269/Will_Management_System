"use client";
import React from "react";
import InvoiceGrid from "../../organisms/dashboard/admin/invoices/InvoiceGrid";
import InvoiceTable from "../../organisms/dashboard/admin/invoices/InvoiceTable";
import { FilterProvider } from "@/components/providers/FilterProvider";

import { ADMIN_INVOICES_FILTER_CONFIG } from "@/config/filterConfig";
import { Loader2 } from "lucide-react";
import  { Suspense } from "react";

const Invoices = () => {
  return (
    <Suspense fallback={<Loader2 />}>
      <FilterProvider configs={ADMIN_INVOICES_FILTER_CONFIG} syncUrl={true}>
        <InvoiceGrid />
        <InvoiceTable />
      </FilterProvider>
    </Suspense>
  );
};

export default Invoices;
