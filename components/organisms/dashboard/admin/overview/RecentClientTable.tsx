"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import { CLIENT_TABLE_COLUMNS } from "./adminRecentTableConfig";
import { CLIENT_TABLE_DATA } from "@/constants/adminRecentData";
import { useTableToggle } from "@/hooks/useTableToggle";

const RecentClientTable = () => {
  const { isExpanded, displayedData, toggle, viewAllText } = useTableToggle(CLIENT_TABLE_DATA);

  return (
    <div>
      <div className="bg-blue16/50 mt-6 border border-borderColor/18 rounded-xl overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  h-[350px]">
        <GenericTableHeader
          title="Recent Clients"
          subtitle="Latest client accounts"
          variant={"paginated"}
          onViewAll={toggle}
          viewAllText={viewAllText}
        />
        <GenericTable
          columns={CLIENT_TABLE_COLUMNS}
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



export default RecentClientTable;
