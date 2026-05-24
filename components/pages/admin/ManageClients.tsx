"use client"
import ClientTable from "@/components/organisms/dashboard/admin/manage-clients/ClientsTable";
import { FilterProvider } from "@/components/providers/FilterProvider";
import { ADMIN_CLIENTS_FILTER_CONFIG } from "@/config/filterConfig";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const ManageClients = () => {
  return (
    <Suspense fallback={<Loader2 />}>
      <FilterProvider configs={ADMIN_CLIENTS_FILTER_CONFIG}>
        <ClientTable />
      </FilterProvider>
    </Suspense>
  );
};

export default ManageClients;
