import { ColumnConfig } from "@/components/molecules/shared/GenericTable";
import { AgentTableItem, ClientTableItem } from "@/constants/adminRecentData";
import { getStatusColor } from "@/utils/tableUtils";

export type AgentStatus = "Active" | "Pending" | "Inactive";

export const AGENT_TABLE_COLUMNS: ColumnConfig[] = [
  {
    label: "Agent",
    accessor: "agentName",
    width: {
      mobile: "40%",
      desktop: "32%",
    },

    formatter: (value: string, row: AgentTableItem) => (
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-blueF0">{value}</span>

        <span className="text-xs text-blue46">{row.email}</span>
      </div>
    ),
  },

  {
    label: "Agents",
    accessor: "agents",
    width: {
      mobile: "15%",
      desktop: "15%",
    },

    formatter: (value: number) => (
      <span className="text-sm text-blue70 font-normal">{value}</span>
    ),
  },

  {
    label: "Wills",
    accessor: "wills",
    width: {
      mobile: "15%",
      desktop: "15%",
    },

    formatter: (value: number) => (
      <span className="text-sm text-blue70 font-normal">{value}</span>
    ),
  },

  {
    label: "Status",
    accessor: "status",
    width: {
      mobile: "20%",
      desktop: "18%",
    },

    formatter: (value: AgentStatus) => (
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${getStatusColor(
          value,
        )}`}
      >
        {value}
      </span>
    ),
  },

  {
    label: "Actions",
    accessor: "actions",
    width: {
      mobile: "20%",
      desktop: "20%",
    },

    formatter: (_: any, row: AgentTableItem) => (
      <button
        className={`rounded-xl cursor-pointer border px-4 py-1.5 text-xs font-medium transition-all w-18 ${
          row.status === "Pending"
            ? "border-orange50 text-orange50 hover:bg-orange50/10"
            : "border-borderColor/32 text-blue46 hover:bg-blue46/10"
        }`}
      >
        {row.status === "Pending" ? "Review" : "View"}
      </button>
    ),
  },
];

export const AGENT_TABLE_CONFIG = [...AGENT_TABLE_COLUMNS];

export const CLIENT_TABLE_COLUMNS: ColumnConfig[] = [
  {
    label: "Client",
    accessor: "clientName",
    width: {
      mobile: "40%",
      desktop: "32%",
    },

    formatter: (value: string, row: ClientTableItem) => (
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-blueF0">{value}</span>

        <span className="text-xs text-blue46">{row.email}</span>
      </div>
    ),
  },

  {
    label: "Clients",
    accessor: "clients",
    width: {
      mobile: "15%",
      desktop: "15%",
    },

    formatter: (value: number) => (
      <span className="text-sm text-blue70 font-normal">{value}</span>
    ),
  },

  {
    label: "Wills",
    accessor: "wills",
    width: {
      mobile: "15%",
      desktop: "15%",
    },

    formatter: (value: number) => (
      <span className="text-sm text-blue70 font-normal">{value}</span>
    ),
  },

  {
    label: "Status",
    accessor: "status",
    width: {
      mobile: "20%",
      desktop: "18%",
    },

    formatter: (value: AgentStatus) => (
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${getStatusColor(
          value,
        )}`}
      >
        {value}
      </span>
    ),
  },

  {
    label: "Actions",
    accessor: "actions",
    width: {
      mobile: "20%",
      desktop: "20%",
    },

    formatter: (_: any, row: AgentTableItem) => (
      <button
        className={`rounded-xl cursor-pointer border px-4 py-1.5 text-xs font-medium transition-all w-18 ${
          row.status === "Pending"
            ? "border-orange50 text-orange50 hover:bg-orange50/10"
            : "border-borderColor/32 text-blue46 hover:bg-blue46/10"
        }`}
      >
        {row.status === "Pending" ? "Review" : "View"}
      </button>
    ),
  },
];
