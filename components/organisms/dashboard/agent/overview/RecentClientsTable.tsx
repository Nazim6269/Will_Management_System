"use client";

import React from "react";
import GenericTable from "@/components/molecules/shared/GenericTable";
import { recentClients } from "@/constants/recentClients";
import { RECENT_TABLE_CONFIG } from "./recentTableConfig";
import { ArrowRight } from "lucide-react";

const RecentClientsTable = () => {
  return (
    <div className="bg-indigo30/40 border border-borderColor/15 rounded-2xl overflow-hidden h-full">
      <div className="flex justify-between items-center py-4.5 px-5.5 border-b border-borderColor/18">
        <div>
          <h4 className="text-gray96 text-base font-bold leading-6 tracking-[-0.3px] font-plus-jakarta-sans">
            Recent Clients
          </h4>
          <p className="text-cyan4A7A74 text-xs">Your active clients</p>
        </div>
        <button className="text-cyan64 text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer">
          View all <ArrowRight size={16} />
        </button>
      </div>

      <div className="p-4 overflow-x-auto">
        <GenericTable
          columns={RECENT_TABLE_CONFIG}
          data={recentClients}
           currentPage={1}
           itemsPerPage={8}

           totalpage={1}
        />
      </div>
    </div>
  );
};

export default RecentClientsTable;
