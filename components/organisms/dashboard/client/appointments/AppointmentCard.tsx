"use client";

import GenericButton from "@/components/atoms/GenericButton";
import { Video, CalendarPlus, X } from "lucide-react";
import DateChip from "./DateChip";
import Tag from "./Tag";
import type { Appointment } from "@/constants/clientAppointment";
import { statusConfig } from "@/constants/clientAppointment";

interface AppointmentCardProps {
  appt: Appointment;
  showActions?: boolean;
}

export default function AppointmentCard({
  appt,
  showActions,
}: AppointmentCardProps) {
  const sc = statusConfig[appt.status];

  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue14 p-4 sm:p-5 mb-3 gradient-border-top">
      {/* Top Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* Date */}
        <div className="flex items-start justify-between sm:block">
          <DateChip day={appt.day} month={appt.month} />

          {/* Mobile Status */}
          <span
            className={`sm:hidden flex-shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold ${sc.className}`}
          >
            {sc.label}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="truncate text-sm sm:text-[15px] font-extrabold text-gray96">
                {appt.title}
              </p>

              <p className="mt-1 text-[12px] text-blue46 truncate">
                with {appt.with}
              </p>
            </div>

            {/* Desktop Status */}
            <span
              className={`hidden sm:inline-flex flex-shrink-0 rounded-full border px-3.5 py-1.5 text-[11px] font-bold ${sc.className}`}
            >
              {sc.label}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            <Tag label={appt.time} />
            <Tag label={appt.duration} />
            <Tag label={appt.format} />
          </div>
        </div>
      </div>

      {/* Actions */}
      {showActions && (
        <div className="mt-4 border-t border-borderColor/18 pt-4">
          <div className="flex flex-col lg:flex-row gap-2">
            <GenericButton
              title="Join Zoom Call"
              variant="primary"
              size="xmd"
              icon={<Video size={14} />}
              iconPosition="left"
              onClick={() => {}}
              className="w-full lg:w-auto"
            />

            <GenericButton
              title="Add to Calendar"
              variant="glass"
              size="xmd"
              icon={<CalendarPlus size={14} />}
              iconPosition="left"
              onClick={() => {}}
              className="w-full lg:w-auto"
            />

            <GenericButton
              title="Cancel"
              variant="danger"
              size="xmd"
              icon={<X size={14} />}
              iconPosition="left"
              onClick={() => {}}
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
