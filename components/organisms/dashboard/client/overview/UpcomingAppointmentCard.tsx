"use client";

import { AlarmClock } from "lucide-react";
import GenericButton from "@/components/atoms/GenericButton";
import { AlarmColckIcon } from "@/components/atoms/icons";

interface UpcomingAppointmentCardProps {
  date?: string;
  time?: string;
  with?: string;
  type?: string;
  onViewAll?: () => void;
}

export default function UpcomingAppointmentCard({
  date = "Apr 18, 2026",
  time = "10:00 AM",
  with: withName = "James Thornton",
  type = "Will Review Discussion",
  onViewAll,
}: UpcomingAppointmentCardProps) {
  return (
    <div className="w-full   rounded-2xl border border-borderColor/18 bg-blue14 p-5 mt-4">

      {/* Header */}
      <h2 className="mb-4 text-base font-bold leading-6 leading-6 text-blueF0">
        Upcoming Appointment
      </h2>

      {/* Inner info tile */}
      <div className="mb-4 flex flex-col items-center rounded-[10px] border border-borderColor/18 bg-borderColor/15 px-4 py-6 text-center space-y-1">
        
         <AlarmColckIcon />
     
        <p className="mb-1 mt-4 text-lg font-extrabold text-blue85">{date}</p>

        {/* Time */}
        <p className="mb-1 text-sm font-medium text-blue70">{time}</p>

        {/* With */}
        <p className="text-[12px] text-blue46">with {withName}</p>

        {/* Type */}
        <p className="text-[12px] text-blue46">{type}</p>
      </div>

      {/* CTA */}
      <GenericButton
        title="View All Appointments"
        variant="outline"
        fullWidth
        onClick={onViewAll}
      />
    </div>
  );
}