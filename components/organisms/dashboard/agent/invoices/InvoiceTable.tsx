"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import DataControls from "@/components/molecules/agent/invoice/DataControls";
import { invoicesData } from "@/constants/invoiceData";
import { INVOICE_TABLE_CONFIG } from "./invoiceTableConfig";
import { usePagination } from "@/hooks";
import { Pagination } from "@/components/molecules/agent/invoice/Pagination";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import { AGENT_ALL_INVOICES_FILTER_CONFIG } from "@/config/filterConfig";
import { useTableFilter } from "@/hooks/useTableFilter";

const InvoiceTable = () => {
  const filteredUser = useTableFilter(
    AGENT_ALL_INVOICES_FILTER_CONFIG,
    invoicesData,
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
    data: filteredUser,
    itemsPerPage: 8,
    siblingCount: 1,
    resetDeps: [invoicesData],
  });
  return (
    <div>
      <DataControls sectionName="invoices" />
      <div className="border border-borderColor/18 rounded-2xl">
        <GenericTableHeader
          title="All Invoices"
          subtitle="Showing 8 invoices"
        />

        <GenericTable
          data={paginatedData}
          columns={INVOICE_TABLE_CONFIG}
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
