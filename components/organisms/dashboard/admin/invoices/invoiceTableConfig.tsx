import { CrossIcon, TableSaveIcon } from "@/components/atoms/icons";
import { ColumnConfig } from "@/components/molecules/shared/GenericTable";
import { Eye } from "lucide-react";
import { getInvoiceStatusColor } from "@/utils/tableUtils";
import { InvoiceStatus } from "@/types/tableTypes";

export const INVOICES_COLUMNS: ColumnConfig[] = [
  {
    label: "Invoice",
    accessor: "invoice",
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
    label: "Amount",
    accessor: "amount",
    width: {
      mobile: "20%",
      desktop: "12%",
    },
    formatter: (value: number) => (
      <span className="text-gray96 text-sm font-normal">
        £{value}
      </span>
    ),
  },

  {
    label: "Due Date",
    accessor: "dueDate",
    width: {
      mobile: "25%",
      desktop: "14%",
    },
    formatter: (value: string) => (
      <span className="text-cyan65 text-sm whitespace-nowrap">
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

export const INVOICES_CONFIG = [
  ...INVOICES_COLUMNS,

  {
    label: "Actions",
    accessor: "actions",
    width: {
      mobile: "120px",
      desktop: "140px",
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
          title="Download"
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