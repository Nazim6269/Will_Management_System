"use client";

import React, { type InputHTMLAttributes } from "react";
import { GenericSearch } from "@/components/atoms/GenericSearch";
import { useSearchInput } from "@/hooks/useSearchInput";
import { invoicesData } from "@/constants/invoiceData";
import { appointmentsData } from "@/constants/appointmentData";
import { ADMIN_CLIENTS_TABLE_DATA } from "@/constants/adminClientData";
import { AGENT_TABLE_DATA, CLIENT_TABLE_DATA } from "@/constants/adminRecentData";
import { INVOICES_DATA as ADMIN_INVOICES_DATA } from "@/constants/adminInvoiceData";
import { APPOINTMENTS_DATA as ADMIN_APPOINTMENTS_DATA } from "@/constants/adminAppointmentsData";
import { ALL_WILL_DOCUMENTS_DATA } from "@/constants/willsData";

const SEARCH_DATA_REGISTRY: Record<string, any[]> = {
  invoices: invoicesData,
  appointments: appointmentsData,
  agents: AGENT_TABLE_DATA,
  clients: CLIENT_TABLE_DATA,
  admin_invoices: ADMIN_INVOICES_DATA,
  admin_appointments: ADMIN_APPOINTMENTS_DATA,
  admin_clients: ADMIN_CLIENTS_TABLE_DATA,
  admin_wills: ALL_WILL_DOCUMENTS_DATA,
  admin_agents: AGENT_TABLE_DATA,
};

const getDisplayLabel = (item: any): string => {
  return (
    item.agentName ||
    item.clientName ||
    item.client ||
    item.name ||
    item.agent ||
    item.invoice ||
    item.id?.toString() ||
    ""
  );
};

interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onSelect"
> {
  filterKey: string;
  className?: string;
  sectionName?: string;
}

export function FilterWithSearch({
  filterKey,
  className = "",
  sectionName,
  ...rest
}: SearchInputProps) {
  const { value, placeholder, onChange, onClear, setFilter } =
    useSearchInput(filterKey);

  const handleSearchSuggestions = async (query: string) => {
    if (!sectionName) return [];

    const dataSource = SEARCH_DATA_REGISTRY[sectionName];
    if (!dataSource) return [];

    const term = query.toLowerCase();
    const filtered = dataSource.filter((item) =>
      Object.values(item).some((val) =>
        String(val ?? "")
          .toLowerCase()
          .includes(term),
      ),
    );

    return filtered.map((item) => ({
      ...item,
      label: getDisplayLabel(item),
    }));
  };

  const handleSelect = (item: any) => {
    setFilter(filterKey, item.label || null);
  };

  return (
    <GenericSearch
      value={value}
      onChange={onChange}
      onClear={onClear}
      onSearch={handleSearchSuggestions}
      onSelect={handleSelect}
      placeholder={placeholder}
      className={className}
      {...(rest as any)}
    />
  );
}
