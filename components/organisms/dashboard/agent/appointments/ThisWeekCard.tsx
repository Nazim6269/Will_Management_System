"use client";

import { BarChart3 } from "lucide-react";

interface WeeklyStat {
  label: string;
  value: number;
  valueClassName?: string;
}

interface ThisWeekCardProps {
  stats?: WeeklyStat[];
}

const defaultStats: WeeklyStat[] = [
  {
    label: "Confirmed",
    value: 5,
    valueClassName: "text-cyan65",
  },
  {
    label: "Pending",
    value: 2,
    valueClassName: "text-[#EDAA4C]",
  },
  {
    label: "Complete",
    value: 1,
    valueClassName: "text-violet85",
  },
  {
    label: "Cancelled",
    value: 1,
    valueClassName: "text-[#FF5F56]",
  },
];

export default function ThisWeekCard({
  stats = defaultStats,
}: ThisWeekCardProps) {
  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue10 p-5 mt-4">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-base font-bold tracking-[-0.2px] text-gray96 border-b border-borderColor/18 pb-2">
          This Week
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[0.625rem] border border-borderColor/18 bg-blue10 px-4 py-5"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <span
                className={`text-[2rem] font-bold leading-none ${item.valueClassName}`}
              >
                {item.value}
              </span>

              <span className="mt-1 text-xs text-cyan4A7A74">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
