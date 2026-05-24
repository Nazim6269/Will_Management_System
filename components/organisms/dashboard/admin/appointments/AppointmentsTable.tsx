"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import DataControls from "@/components/molecules/agent/invoice/DataControls";
import { usePagination } from "@/hooks";
import { Pagination } from "@/components/molecules/agent/invoice/Pagination";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import { APPOINTMENTS_DATA } from "@/constants/adminAppointmentsData";
import { APPOINTMENTS_CONFIG } from "./adminAppointmentTableConfig";

import { useTableFilter } from "@/hooks/useTableFilter";
import { ADMIN_APPOINTMENTS_FILTER_CONFIG } from "@/config/filterConfig";

const AppointmentTable = () => {
  const filteredData = useTableFilter(
    ADMIN_APPOINTMENTS_FILTER_CONFIG,
    APPOINTMENTS_DATA,
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
    itemsPerPage: 5,
    siblingCount: 1,
    resetDeps: [filteredData],
  });

  return (
    <div>
      <DataControls variant={"filter"} sectionName="admin_appointments" />
      <div className="border border-borderColor/18 rounded-2xl">
        <GenericTableHeader
          title="All Appointments"
          subtitle={`Showing ${totalItems} appointments`}
        />

        <GenericTable
          data={paginatedData}
          columns={APPOINTMENTS_CONFIG}
          currentPage={currentPage}
          totalpage={totalPages}
          itemsPerPage={5}
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

export default AppointmentTable;
