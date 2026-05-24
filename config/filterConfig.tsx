import {
  FilterConfig,
  SearchFilterConfig,
  SelectFilterConfig,
} from "@/types/filterType";

export const AGENT_ALL_INVOICES_FILTER_CONFIG: FilterConfig[] = [
  {
    key: "search",
    type: "search",
    label: "Search",
    placeholder: "Search invoices or clients ",
    debounceMs: 350,
  } as SearchFilterConfig,
  {
    key: "status",
    type: "select",
    options: [
      { label: "All Status", value: "" },
      { label: "Paid", value: "Paid" },
      { label: "Unpaid", value: "Unpaid" },
      { label: "Pending", value: "Pending" },
      { label: "Overdue", value: "Overdue" },
    ],
  } as SelectFilterConfig,
  {
    key: "feeType",
    type: "select",
    label: "Invoices",
    placeholder: "All invoices",
    options: [
      { label: "All", value: "" },
      { label: "Will writing", value: "Will-writing" },
      { label: "Revision", value: "Revision" },
      { label: "Vault storage", value: "Vault-storage" },
    ],
  } as SelectFilterConfig,
];

export const AGENT_ALL_APPOINTMENTS_FILTER_CONFIG: FilterConfig[] = [
  {
    key: "search",
    type: "search",
    label: "Search",
    placeholder: "Search appointments or clients ",
    debounceMs: 350,
  } as SearchFilterConfig,
  {
    key: "status",
    type: "select",
    options: [
      { label: "All Statuses", value: "" },
      { label: "Confirmed", value: "Confirmed" },
      { label: "Pending", value: "Pending" },
      { label: "Cancelled", value: "Cancelled" },
    ],
  } as SelectFilterConfig,
];

export const ADMIN_AGENTS_FILTER_CONFIG: FilterConfig[] = [
  {
    key: "search",
    type: "search",
    label: "Search",
    placeholder: "Search agents",
    debounceMs: 350,
  } as SearchFilterConfig,
  {
    key: "status",
    type: "select",
    label: "Agents",
    placeholder: "All Agents",
    options: [
      { label: "All", value: "" },
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
    ],
  } as SelectFilterConfig,
];

export const ADMIN_CLIENTS_FILTER_CONFIG: FilterConfig[] = [
  {
    key: "search",
    type: "search",
    label: "Search",
    placeholder: "Search clients",
    debounceMs: 350,
  } as SearchFilterConfig,
  {
    key: "status",
    type: "select",
    label: "Status",
    placeholder: "All Status",
    options: [
      { label: "All", value: "" },
      { label: "Active", value: "Active" },
      { label: "Pending", value: "Pending" },
      { label: "Inactive", value: "Inactive" },
    ],
  } as SelectFilterConfig,
];

export const ADMIN_WILLS_FILTER_CONFIG: FilterConfig[] = [
  {
    key: "search",
    type: "search",
    label: "Search",
    placeholder: "Search wills",
    debounceMs: 350,
  } as SearchFilterConfig,
  {
    key: "status",
    type: "select",
    label: "Status",
    placeholder: "All Status",
    options: [
      { label: "All", value: "" },
      { label: "Paid", value: "Paid" },
      { label: "Unpaid", value: "Unpaid" },
      { label: "Pending", value: "Pending" },
      { label: "Overdue", value: "Overdue" },
    ],
  } as SelectFilterConfig,
];

export const ADMIN_INVOICES_FILTER_CONFIG: FilterConfig[] = [
  {
    key: "search",
    type: "search",
    label: "Search",
    placeholder: "Search invoices",
    debounceMs: 350,
  } as SearchFilterConfig,
  {
    key: "status",
    type: "select",
    label: "Status",
    placeholder: "All Status",
    options: [
      { label: "All Status", value: "" },
      { label: "Paid", value: "Paid" },
      { label: "Unpaid", value: "Unpaid" },
      { label: "Pending", value: "Pending" },
      { label: "Overdue", value: "Overdue" },
    ],
  } as SelectFilterConfig,
  {
    key: "feeType",
    type: "select",
    label: "Invoices",
    placeholder: "All invoices",
    options: [
      { label: "All", value: "" },
      { label: "Will writing", value: "Will-writing" },
      { label: "Revision", value: "Revision" },
      { label: "Vault storage", value: "Vault-storage" },
    ],
  } as SelectFilterConfig,
];

export const ADMIN_APPOINTMENTS_FILTER_CONFIG: FilterConfig[] = [
  {
    key: "search",
    type: "search",
    label: "Search",
    placeholder: "Search appointments",
    debounceMs: 350,
  } as SearchFilterConfig,
  {
    key: "status",
    type: "select",
    label: "Status",
    placeholder: "All Status",
    options: [
      { label: "All Statuses", value: "" },
      { label: "Confirmed", value: "Confirmed" },
      { label: "Pending", value: "Pending" },
      { label: "Cancelled", value: "Cancelled" },
    ],
  } as SelectFilterConfig,
];
