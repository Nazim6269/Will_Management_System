"use client";

import DataControls from "@/components/molecules/agent/invoice/DataControls";
import AgentGrid from "@/components/organisms/dashboard/admin/manage-agents/AgentGrid";
import Alert from "@/components/organisms/dashboard/admin/manage-agents/Alert";
import { FilterProvider } from "@/components/providers/FilterProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Agents",
  description: "Manage Agents",
};

import { ADMIN_AGENTS_FILTER_CONFIG } from "@/config/filterConfig";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const ManageAgent = () => {
  return (
    <Suspense fallback={<Loader2 />}>
      <div>
        <FilterProvider configs={ADMIN_AGENTS_FILTER_CONFIG}>
          <DataControls variant={"filter"} sectionName="agents" />
          <Alert />
          <AgentGrid />
        </FilterProvider>
      </div>
    </Suspense>
  );
};

export default ManageAgent;
