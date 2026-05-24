"use client";

import { AlertTriangle } from "lucide-react";

interface AttentionItem {
  label: string;
  value: number;
  rowClassName: string;
  labelClassName: string;
  valueClassName: string;
}

interface NeedsAttentionCardProps {
  items?: AttentionItem[];
}

const defaultItems: AttentionItem[] = [
  {
    label: "Overdue Invoices",
    value: 5,
    rowClassName: "bg-red60/10 border border-red60/20",
    labelClassName: "text-red60",
    valueClassName: "text-red60",
  },
  {
    label: "Agent Applications",
    value: 2,
    rowClassName: "bg-orangeFB/10 border border-orangeFB/20",
    labelClassName: "text-orangeFB",
    valueClassName: "text-orangeFB",
  },
  {
    label: "Wills In Progress",
    value: 9,
    rowClassName: "bg-blue10 border border-borderColor/18",
    labelClassName: "text-blue70",
    valueClassName: "text-violet85",
  },
];

export default function NeedsAttentionCard({
  items = defaultItems,
}: NeedsAttentionCardProps) {
  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue14 p-5  -two">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-orange245/20 bg-orange245/10">
            <AlertTriangle size={18} className="text-orange245" />
          </div>
          <h2 className="text-base font-bold text-blueF0">Needs Attention</h2>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center justify-between rounded-[10px] px-3.5 py-3 ${item.rowClassName}`}
          >
            <span
              className={`text-[13px] font-semibold ${item.labelClassName}`}
            >
              {item.label}
            </span>
            <span
              className={`text-lg font-extrabold leading-none ${item.valueClassName}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
