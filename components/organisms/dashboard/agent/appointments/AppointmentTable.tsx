"use client";

import GenericTable from "@/components/molecules/shared/GenericTable";
import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import DataControls from "@/components/molecules/agent/invoice/DataControls";
import { Pagination } from "@/components/molecules/agent/invoice/Pagination";
import { usePagination } from "@/hooks";
import { APPOINTMENT_TABLE_CONFIG } from "./appointmentTableConfig";
import { appointmentsData } from "@/constants/appointmentData";
import TodayScheduleCard from "./TodayScheduleCard";
import ThisWeekCard from "./ThisWeekCard";
import ThisWeekTwo from "./ThisWeekTwo";
import { useTableFilter } from "@/hooks/useTableFilter";
import { AGENT_ALL_APPOINTMENTS_FILTER_CONFIG } from "@/config/filterConfig";

const AppointmentTable = () => {
  const filteredAppointments = useTableFilter(
    AGENT_ALL_APPOINTMENTS_FILTER_CONFIG,
    appointmentsData,
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
    data: filteredAppointments,
    itemsPerPage: 8,
    siblingCount: 1,
    resetDeps: [appointmentsData], // ← resets page when filters change
  });
  return (
    <div>
      <DataControls />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
        <div className="border border-borderColor/18 rounded-2xl flex-1 xl:col-span-9">
          <GenericTableHeader
            title="All Appointments"
            subtitle="Showing 8 appointments"
          />

          <GenericTable
            data={paginatedData}
            columns={APPOINTMENT_TABLE_CONFIG}
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
        <div className="xl:col-span-3">
          <TodayScheduleCard />
          <ThisWeekCard />
          <ThisWeekTwo />
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
