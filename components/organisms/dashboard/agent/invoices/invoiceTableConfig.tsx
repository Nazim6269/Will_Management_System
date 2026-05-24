import { CrossIcon, ResetIcon, TableSaveIcon } from "@/components/atoms/icons";
import { ColumnConfig } from "@/components/molecules/shared/GenericTable";

import { InvoiceStatus } from "@/constants/recentClients";
import { getInvoiceStatusColor } from "@/utils/tableUtils";
import { Eye, Download, Trash2 } from "lucide-react";

export const INVOICE_TABLE_COLUMNS: ColumnConfig[] = [
  {
    label: "Invoice #",
    accessor: "id",
    width: {
      mobile: "30%",
      desktop: "15%",
    },
    formatter: (value: string) => (
      <span className="text-blue75 font-bold text-xs">{value}</span>
    ),
  },

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
    label: "Fee Type",
    accessor: "feeType",
    width: {
      mobile: "30%",
      desktop: "15%",
    },
    formatter: (value: string) => (
      <span className="px-3 py-1  text-xs bg-borderColor/15 text-violet85 border border-borderColor/18 rounded-2xl whitespace-nowrap">
        {value}
      </span>
    ),
  },

  {
    label: "Amount",
    accessor: "amount",
    width: {
      mobile: "20%",
      desktop: "10%",
    },
    formatter: (value: number) => (
      <span className="text-gray96 text-sm font-medium">£{value}</span>
    ),
  },

  {
    label: "Issued",
    accessor: "issued",
    width: {
      mobile: "30%",
      desktop: "12%",
    },
    formatter: (value: string) => (
      <span className="text-cyan65 text-sm whitespace-nowrap">{value}</span>
    ),
  },

  {
    label: "Due",
    accessor: "due",
    width: {
      mobile: "30%",
      desktop: "12%",
    },
    formatter: (value: string) => (
      <span className="text-cyan65 text-sm whitespace-nowrap">{value}</span>
    ),
  },

  {
    label: "Status",
    accessor: "status",
    width: {
      mobile: "30%",
      desktop: "10%",
    },
    formatter: (value: InvoiceStatus) => (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium ${getInvoiceStatusColor(
          value,
        )}`}
      >
        {value}
      </span>
    ),
  },
];

export const INVOICE_TABLE_CONFIG = [
  ...INVOICE_TABLE_COLUMNS,
  {
    label: "Actions",
    accessor: "actions",
    width: {
      mobile: "120px",
      desktop: "150px",
    },
    formatter: (_: any, row: any) => (
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
