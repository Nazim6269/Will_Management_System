"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import DataControls from "@/components/molecules/agent/invoice/DataControls";
import { usePagination } from "@/hooks";
import { Pagination } from "@/components/molecules/agent/invoice/Pagination";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import { CLIENTS_TABLE_CONFIG } from "./clientTableConfig";
import { ADMIN_CLIENTS_TABLE_DATA } from "@/constants/adminClientData";

const ClientTable = () => {
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
    data: ADMIN_CLIENTS_TABLE_DATA,
    itemsPerPage: 8,
    siblingCount: 1,
    resetDeps: [ADMIN_CLIENTS_TABLE_DATA],
  });
  return (
    <div>
      <DataControls variant={"filter"} />
      <div className="border border-borderColor/18 rounded-2xl">
        <GenericTableHeader title="All Clients" subtitle="Showing 8 clients" />

        <GenericTable
          data={paginatedData}
          columns={CLIENTS_TABLE_CONFIG}
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

export default ClientTable;
