"use client";

import { AssetSummaryIcon } from "@/components/atoms/icons";
import { LayoutGrid } from "lucide-react";

interface AssetItem {
  label: string;
  value: string | null;
}

interface AssetSummaryCardProps {
  properties?: number | null;
  financial?: number | null;
  vehicles?: number | null;
  valuables?: number | null;
  debts?: number | null;
  bequests?: number | null;
}

function formatCurrency(value: number | null | undefined): string {
  if (value == null) return "–";
  return `£${value.toLocaleString("en-GB")}`;
}

function formatBequests(value: number | null | undefined): string {
  if (value == null || value === 0) return "0 item";
  return `${value} item${value > 1 ? "s" : ""}`;
}

export default function AssetSummaryCard({
  properties = 450000,
  financial = null,
  vehicles = null,
  valuables = null,
  debts = null,
  bequests = 0,
}: AssetSummaryCardProps) {
  const netEstate =
    (properties ?? 0) +
    (financial ?? 0) +
    (vehicles ?? 0) +
    (valuables ?? 0) -
    (debts ?? 0);

  const items: AssetItem[] = [
    { label: "Properties", value: formatCurrency(properties) },
    { label: "Financial", value: formatCurrency(financial) },
    { label: "Vehicles", value: formatCurrency(vehicles) },
    { label: "Valuables", value: formatCurrency(valuables) },
    { label: "Debts", value: formatCurrency(debts) },
    { label: "Bequests", value: formatBequests(bequests) },
  ];

  return (
    <div className="w-full rounded-2xl bg-blue10 border border-borderColor/18 p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        
          <AssetSummaryIcon />
       
        <h2 className="text-gray96 text-base font-bold tracking-[-0.2px]">
          Asset Summary
        </h2>
      </div>

      {/* Line items */}
      <div className="flex flex-col divide-y divide-borderColor/18">
        {items.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between py-3">
            <span className="text-cyan4A7A74 text-xs">{label}</span>
            <span className={`text-xs font-medium text-cyan4A7A74`}>
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-borderColor/18 mt-1 pt-3 flex items-center justify-between">
        <span className="text-gray96 text-xs font-bold">Net Estate</span>
        <span className="text-gray96 text-xs font-bold">
          {formatCurrency(netEstate)}
        </span>
      </div>
    </div>
  );
}
