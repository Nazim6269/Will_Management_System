"use client";

import { Gift } from "lucide-react";

interface BeqeustItem {
  label: string;
  assignedTo: string | null;
}

interface BequesstSummaryCardProps {
  items?: BeqeustItem[];
}

export default function BequesstSummaryCard({
  items = [{ label: "Bequest Item 1", assignedTo: null }],
}: BequesstSummaryCardProps) {
  return (
    <div className="w-full rounded-2xl bg-orange245/12 border border-orange245/28 p-6 ">
      {/* Header */}
      <h2 className="text-orangeFB text-base font-bold tracking-[-0.2px] mb-4">
        Bequests Summary
      </h2>

      {/* Items */}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Icon badge */}
            <div className="w-9 h-9 rounded-lg border border-orange245/28  flex items-center justify-center shrink-0">
              🎁
            </div>

            {/* Text */}
            <div className="space-y-1">
              <p className="text-gray96 text-xs font-semibold leading-[20px]">
                {item.label}
              </p>
              <p className="text-blue46 text-xs leading-[130%]">
                → {item.assignedTo ?? "Not yet assigned"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-borderColor/18 mt-5 pt-3 flex items-center justify-between">
        <span className="text-blue46 text-sm">Total items</span>
        <span className="text-orangeFB text-sm font-bold">
          {items.length}
        </span>
      </div>
    </div>
  );
}
