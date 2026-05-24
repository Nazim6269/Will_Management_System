import { ColumnConfig } from "@/components/molecules/shared/GenericTable";
import { InvoiceStatus, Status } from "@/types/tableTypes";
import { getInvoiceStatusColor, getWillStatusColor } from "@/utils/tableUtils";

export const RECENT_TABLE_COLUMNS: ColumnConfig[] = [
  {
    label: "Client Name",
    accessor: "name",
    width: {
      mobile: "30%",
      desktop: "20%",
    },
    formatter: (value: string, row: any) => (
      <div className="flex flex-col">
        <span className="font-semibold text-gray96 text-sm">{value}</span>
        <span className="text-cyan4A7A74 text-xs">{row.email}</span>
      </div>
    ),
  },

  {
    label: "Will Status",
    accessor: "willStatus",
    width: {
      mobile: "20%",
      desktop: "20%",
    },
    formatter: (value: any) => (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-normal ${getWillStatusColor(
          value as Status,
        )}`}
      >
        {value}
      </span>
    ),
  },
  {
    label: "Invoice Status",
    accessor: "invoice",
    width: {
      mobile: "20%",
      desktop: "20%",
    },
    formatter: (value: any) => (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-normal ${getInvoiceStatusColor(
          value as InvoiceStatus,
        )}`}
      >
        {value}
      </span>
    ),
  },
  {
    label: "Next Appointment",
    accessor: "nextAppointment",
    width: {
      mobile: "20%",
      desktop: "20%",
    },
    formatter: (value: any) => (
      <span className="text-cyan65 text-sm font-normal font-plus-jakarta">{value || "-"}</span>
    ),
  },
];

export const RECENT_TABLE_CONFIG = [
  ...RECENT_TABLE_COLUMNS,
//   {
//     label: "Actions",
//     accessor: "actions",
//     width: {
//       mobile: "100px",
//       desktop: "150px",
//     },
//     formatter: (_: any, row: any) => (
//       <div className="flex items-center gap-3">
//         <button
//           className="text-cyan4A7A74 hover:text-cyan64 transition-colors"
//           title="View"
//         >
//           <EyeIcon size={18} />
//         </button>
//         <button
//           className="text-cyan4A7A74 hover:text-cyan64 transition-colors"
//           title="Edit"
//         >
//           <Edit2 size={18} />
//         </button>
//         <button
//           className="text-red60/70 hover:text-red60 transition-colors"
//           title="Delete"
//         >
//           <Trash size={18} />
//         </button>
//       </div>
//     ),
//   },
];
