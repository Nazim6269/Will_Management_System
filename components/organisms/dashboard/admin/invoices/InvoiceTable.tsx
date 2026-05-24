"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import DataControls from "@/components/molecules/agent/invoice/DataControls";
import { usePagination } from "@/hooks";
import { Pagination } from "@/components/molecules/agent/invoice/Pagination";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import { INVOICES_DATA } from "@/constants/adminInvoiceData";
import { INVOICES_CONFIG } from "./invoiceTableConfig";

import { useTableFilter } from "@/hooks/useTableFilter";
import { ADMIN_INVOICES_FILTER_CONFIG } from "@/config/filterConfig";

const InvoiceTable = () => {
  const filteredData = useTableFilter(
    ADMIN_INVOICES_FILTER_CONFIG,
    INVOICES_DATA,
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
      <DataControls variant={"filter"} sectionName="admin_invoices" />
      <div className="border border-borderColor/18 rounded-2xl">
        <GenericTableHeader
          title="All Invoices"
          subtitle={`Showing ${totalItems} invoices`}
        />

        <GenericTable
          data={paginatedData}
          columns={INVOICES_CONFIG}
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

export default InvoiceTable;
