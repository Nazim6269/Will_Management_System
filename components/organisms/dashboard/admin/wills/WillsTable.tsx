"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import DataControls from "@/components/molecules/agent/invoice/DataControls";
import { usePagination } from "@/hooks";
import { Pagination } from "@/components/molecules/agent/invoice/Pagination";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import { ALL_WILL_DOCUMENTS_DATA } from "@/constants/willsData";
import { WILL_DOCUMENTS_CONFIG } from "./willsTableConfig";

import { useTableFilter } from "@/hooks/useTableFilter";
import { ADMIN_WILLS_FILTER_CONFIG } from "@/config/filterConfig";

const WillsTable = () => {
  const filteredData = useTableFilter(
    ADMIN_WILLS_FILTER_CONFIG,
    ALL_WILL_DOCUMENTS_DATA,
  );

  const {
    paginatedData,
    currentPage,
    totalPages,
    totalItems,
    pageRange,
    goToPage,
    goToNext,
    goToPrev,
    canGoNext,
    canGoPrev,
    startIndex,
    endIndex,
  } = usePagination({
    data: filteredData,
    itemsPerPage: 8,
    siblingCount: 1,
    resetDeps: [filteredData],
  });

  return (
    <div>
      <DataControls variant={"filter"} sectionName="admin_wills" />
      <div className="border border-borderColor/18 rounded-2xl">
        <GenericTableHeader
          title="All Will Documents"
          subtitle={`Showing ${totalItems} documents`}
        />

        <GenericTable
          data={paginatedData}
          columns={WILL_DOCUMENTS_CONFIG}
          currentPage={currentPage}
          totalpage={totalPages}
          itemsPerPage={8}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          pageRange={pageRange}
          canGoNext={canGoNext}
          canGoPrev={canGoPrev}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={goToPage}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      </div>
    </div>
  );
};

export default WillsTable;
