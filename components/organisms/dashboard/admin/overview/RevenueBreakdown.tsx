"use client";

import { Target } from "lucide-react";

interface RevenueItem {
  label: string;
  value: string;
  amount: number;
  barClassName: string;
}

interface RevenueBreakdownCardProps {
  items?: RevenueItem[];
}

const defaultItems: RevenueItem[] = [
  {
    label: "Basic (£149)",
    value: "£2,384",
    amount: 2384,
    barClassName: "bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6]",
  },
  {
    label: "Standard (£249)",
    value: "£4,980",
    amount: 4980,
    barClassName: "bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]",
  },
  {
    label: "Premium (£399)",
    value: "£3,592",
    amount: 3592,
    barClassName: "bg-gradient-to-r from-[#06B6D4] to-[#2DD4BF]",
  },
];

export default function RevenueBreakdownCard({
  items = defaultItems,
}: RevenueBreakdownCardProps) {
  const max = Math.max(...items.map((i) => i.amount));

  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue14 p-5  -two" >
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-orange245/20 bg-orange245/10">
            <Target size={18} className="text-orange245" />
          </div>
        <h2 className="text-base font-bolde  text-blueF0">
            Revenue Breakdown
          </h2>
      </div>

      {/* Rows */}
      <div className="flex flex-col divide-y divide-borderColor/10">
        {items.map((item) => {
          const pct = Math.round((item.amount / max) * 100);
          return (
            <div key={item.label} className="py-2.5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-blue46">{item.label}</span>
                <span className="text-xs font-semibold text-blue70">
                  {item.value}
                </span>
              </div>
              {/* Bar track */}
              <div className="h-[5px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${item.barClassName}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
