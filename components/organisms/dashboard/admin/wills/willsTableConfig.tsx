import { CrossIcon, TableSaveIcon } from "@/components/atoms/icons";
import { ColumnConfig } from "@/components/molecules/shared/GenericTable";
import { Eye } from "lucide-react";
import { getInvoiceStatusColor } from "@/utils/tableUtils";
import { InvoiceStatus } from "@/types/tableTypes";

export const WILL_DOCUMENTS_COLUMNS: ColumnConfig[] = [
  {
    label: "Reference",
    accessor: "reference",
    width: {
      mobile: "30%",
      desktop: "16%",
    },
    formatter: (value: string) => (
      <span className="text-gray96 text-sm font-normal whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Client",
    accessor: "client",
    width: {
      mobile: "30%",
      desktop: "16%",
    },
    formatter: (value: string) => (
      <span className="text-violet85 text-sm font-medium whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Agent",
    accessor: "agent",
    width: {
      mobile: "30%",
      desktop: "16%",
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
    label: "Generated",
    accessor: "generated",
    width: {
      mobile: "25%",
      desktop: "14%",
    },
    formatter: (value: string) => (
      <span className="text-cyan65 text-sm whitespace-nowrap">{value}</span>
    ),
  },

  {
    label: "Status",
    accessor: "status",
    width: {
      mobile: "25%",
      desktop: "12%",
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

export const WILL_DOCUMENTS_CONFIG = [
  ...WILL_DOCUMENTS_COLUMNS,

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
