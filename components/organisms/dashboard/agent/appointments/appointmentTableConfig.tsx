import { CheckIcon, CrossIcon, ResetIcon } from "@/components/atoms/icons";
import { ColumnConfig } from "@/components/molecules/shared/GenericTable";
import { InvoiceStatus } from "@/constants/recentClients";
import { getInvoiceStatusColor } from "@/utils/tableUtils";

export const APPOINTMENT_TABLE_COLUMNS: ColumnConfig[] = [
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
    label: "Type",
    accessor: "type",
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
    label: "Date & Time",
    accessor: "date",
    width: {
      mobile: "20%",
      desktop: "10%",
    },
    formatter: (value: string) => (
      <span className="text-cyan65 text-sm font-medium whitespace-nowrap">
        {value}
      </span>
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
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getInvoiceStatusColor(
          value,
        )}`}
      >
        {value}
      </span>
    ),
  },
];

export const APPOINTMENT_TABLE_CONFIG = [
  ...APPOINTMENT_TABLE_COLUMNS,
  {
    label: "Actions",
    accessor: "actions",
    width: {
      mobile: "30%",
      desktop: "10%",
    },
    formatter: (_: any, row: any) => (
      <div className="flex items-center gap-2">
        <button
          className="text-cyan4A7A74 hover:text-cyan64 transition-colors border border-borderColor/18 rounded-xl p-2 cursor-pointer"
          title="View"
        >
          <CheckIcon />
        </button>

        <button
          className="text-cyan4A7A74 hover:text-cyan64 transition-colors border border-borderColor/18 rounded-xl p-2 cursor-pointer"
          title="Download"
        >
          <ResetIcon />
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
