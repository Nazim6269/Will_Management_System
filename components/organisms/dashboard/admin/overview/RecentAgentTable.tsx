"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import React from "react";
import { AGENT_TABLE_CONFIG } from "./adminRecentTableConfig";
import { AGENT_TABLE_DATA } from "@/constants/adminRecentData";
import { useTableToggle } from "@/hooks/useTableToggle";

const RecentAgentTable = () => {
  const { isExpanded, displayedData, toggle, viewAllText } = useTableToggle(AGENT_TABLE_DATA);

  return (
    <div>
      <div className="bg-blue16/50  border border-borderColor/18 rounded-xl h-[350px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <GenericTableHeader
          title="Recent Agents"
          subtitle="Latest agent accounts"
          variant={"paginated"}
          onViewAll={toggle}
          viewAllText={viewAllText}
        />
        <GenericTable
          columns={AGENT_TABLE_CONFIG}
          data={displayedData}
          currentPage={1}
          totalpage={10}
          itemsPerPage={8}
          variant="ghost"
        />
      </div>
    </div>
  );
};



export default RecentAgentTable;      