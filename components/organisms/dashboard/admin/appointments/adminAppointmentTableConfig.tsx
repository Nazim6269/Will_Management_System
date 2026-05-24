import { CrossIcon, TableSaveIcon } from "@/components/atoms/icons";
import { ColumnConfig } from "@/components/molecules/shared/GenericTable";
import { Eye } from "lucide-react";
import {  getStatusColor } from "@/utils/tableUtils";
import { Status } from "@/types/tableTypes";

export const APPOINTMENTS_COLUMNS: ColumnConfig[] = [
  {
    label: "Date & Time",
    accessor: "dateTime",
    width: {
      mobile: "35%",
      desktop: "16%",
    },
    formatter: (value: { date: string; time: string }) => (
      <div className="flex flex-col gap-0.5">
        <span className="text-gray96 text-sm font-semibold whitespace-nowrap">
          {value.date}
        </span>
        <span className="text-cyan4A7A74 text-xs whitespace-nowrap">
          {value.time}
        </span>
      </div>
    ),
  },

  {
    label: "Client",
    accessor: "client",
    width: {
      mobile: "25%",
      desktop: "14%",
    },
    formatter: (value: string) => (
      <span className="text-cyan4A7A74 text-sm font-medium whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Agent",
    accessor: "agent",
    width: {
      mobile: "25%",
      desktop: "14%",
    },
    formatter: (value: string) => (
      <span className="text-violet85 text-sm font-medium whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Type",
    accessor: "type",
    width: {
      mobile: "25%",
      desktop: "14%",
    },
    formatter: (value: string) => (
      <span className="text-gray96 text-sm font-medium whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Format",
    accessor: "format",
    width: {
      mobile: "20%",
      desktop: "10%",
    },
    formatter: (value: string) => (
      <span className="text-cyan4A7A74 text-sm whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Status",
    accessor: "status",
    width: {
      mobile: "25%",
      desktop: "12%",
    },
    formatter: (value: Status) => (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap ${getStatusColor(value)}`}
      >
        {value}
      </span>
    ),
  },
];

export const APPOINTMENTS_CONFIG: ColumnConfig[] = [
  ...APPOINTMENTS_COLUMNS,
  {
    label: "Actions",
    accessor: "actions",
    width: {
      mobile: "100px",
      desktop: "120px",
    },
    formatter: () => (
      <div className="flex items-center gap-2">
        <button
          className="text-cyan4A7A74 hover:text-cyan64 transition-colors border border-borderColor/18 rounded-xl p-2 cursor-pointer"
          title="View"
        >
          <Eye size={16} />
        </button>
        <button
          className="text-cyan4A7A74 hover:text-cyan64 transition-colors border border-borderColor/18 rounded-xl p-2 cursor-pointer"
          title="Export"
        >
          <TableSaveIcon />
        </button>
        <button
          className="text-red60/70 hover:text-red60 transition-colors border border-borderColor/18 rounded-xl p-2 cursor-pointer"
          title="Delete"
        >
          <CrossIcon />
        </button>
      </div>
    ),
  },
];