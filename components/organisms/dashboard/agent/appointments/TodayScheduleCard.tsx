"use client";

import { CalendarDays } from "lucide-react";

interface ScheduleItem {
  time: string;
  name: string;
  title: string;
  dotColor: string;
  outlined?: boolean;
}

interface TodayScheduleCardProps {
  date?: string;
  schedules?: ScheduleItem[];
}

const defaultSchedules: ScheduleItem[] = [
  {
    time: "10:00",
    name: "Jennifer Scott",
    title: "Initial Consultation",
    dotColor: "bg-blue66",
  },
  {
    time: "13:30",
    name: "Michael Brown",
    title: "Will Review & Sign-off",
    dotColor: "bg-orange50",
  },
  {
    time: "15:00",
    name: "Emma Williams",
    title: "Asset Discussion",
    dotColor: "border border-cyan4A7A74 bg-transparent",
    outlined: true,
  },
];

export default function TodayScheduleCard({
  date = "Mon, 06 Apr 2026",
  schedules = defaultSchedules,
}: TodayScheduleCardProps) {
  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue10 p-5 shadow-xl">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-y-1 items-start border-b border-borderColor/18 pb-2">
        <h2 className="text-base font-bold tracking-[-0.2px] text-gray96">
          Today&apos;s Schedule
        </h2>

        <p className="text-xs text-cyan4A7A74">{date}</p>
        
      </div>

      {/* Schedule List */}
      <div className="flex flex-col divide-y divide-borderColor/18">
        {schedules.map((item) => (
          <div
            key={`${item.time}-${item.name}`}
            className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
          >
            {/* Time */}
            <span className="min-w-[42px] pt-0.5 text-xs font-medium text-violet85">
              {item.time}
            </span>

            {/* Content */}
            <div className="flex flex-1 gap-3">
              {/* Dot */}
              <div
                className={`mt-1.5 h-2.5 w-2.5 rounded-full shrink-0 ${item.dotColor}`}
              />

              {/* Info */}
              <div className="flex flex-col">
                <h3 className="text-sm font-bold leading-5 text-gray96">
                  {item.name}
                </h3>

                <p className="mt-0.5 text-xs text-cyan4A7A74">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
