import { CrossIcon, TableSaveIcon } from "@/components/atoms/icons";
import { ColumnConfig } from "@/components/molecules/shared/GenericTable";
import { Eye } from "lucide-react";
import { getInvoiceStatusColor, getWillStatusColor } from "@/utils/tableUtils";
import { InvoiceStatus, Status } from "@/types/tableTypes";

export const CLIENTS_TABLE_COLUMNS: ColumnConfig[] = [
  {
    label: "Client",
    accessor: "clientName",
    width: {
      mobile: "40%",
      desktop: "20%",
    },
    formatter: (_: any, row: any) => (
      <div className="flex flex-col">
        <span className="font-semibold text-gray96 text-sm">
          {row.clientName}
        </span>

        <span className="text-cyan4A7A74 text-xs">{row.email}</span>
      </div>
    ),
  },

  {
    label: "Assigned Agent",
    accessor: "assignedAgent",
    width: {
      mobile: "30%",
      desktop: "18%",
    },
    formatter: (value: string) => (
      <span className="text-violet85 text-sm font-medium whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Plan",
    accessor: "plan",
    width: {
      mobile: "20%",
      desktop: "12%",
    },
    formatter: (value: string) => (
      <span className="text-gray96 text-sm font-normal">{value}</span>
    ),
  },

  {
    label: "Will",
    accessor: "willStatus",
    width: {
      mobile: "25%",
      desktop: "15%",
    },
    formatter: (value: Status) => (
      <span
        className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getWillStatusColor(
          value,
        )}`}
      >
        {value}
      </span>
    ),
  },

  {
    label: "Created",
    accessor: "created",
    width: {
      mobile: "25%",
      desktop: "14%",
    },
    formatter: (value: string) => (
      <span className="text-cyan65 text-sm whitespace-nowrap">{value}</span>
    ),
  },

  {
    label: "Invoice",
    accessor: "invoiceStatus",
    width: {
      mobile: "25%",
      desktop: "14%",
    },
    formatter: (value: InvoiceStatus) => (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${getInvoiceStatusColor(
          value,
        )}`}
      >
        {value}
      </span>
    ),
  },
];

export const CLIENTS_TABLE_CONFIG = [
  ...CLIENTS_TABLE_COLUMNS,

  {
    label: "Actions",
    accessor: "actions",
    width: {
      mobile: "120px",
      desktop: "140px",
    },

    formatter: () => (
      <div className="flex items-center gap-2">
        {/* View */}
        <button
          className="text-cyan4A7A74 hover:text-cyan64 transition-colors border border-borderColor/18 rounded-xl p-2 cursor-pointer"
          title="View"
        >
          <Eye size={16} />
        </button>

        {/* Download */}
        <button
          className="text-cyan4A7A74 hover:text-cyan64 transition-colors border border-borderColor/18 rounded-xl p-2 cursor-pointer"
          title="Download"
        >
          <TableSaveIcon />
        </button>

        {/* Delete */}
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
