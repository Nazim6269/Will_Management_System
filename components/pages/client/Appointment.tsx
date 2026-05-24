"use client";

import AppointmentCard from "@/components/organisms/dashboard/client/appointments/AppointmentCard";
import BookingForm from "@/components/organisms/dashboard/client/appointments/BookingForm";
import { UPCOMING, PAST } from "@/constants/clientAppointment";

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[620px] gap-6">
      <div className="flex-1 min-w-0 pr-0">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[2px] text-blue75">
            Upcoming Appointments ({UPCOMING.length})
          </span>
        </div>
        <div className="mt-3">
          {UPCOMING.map((a) => (
            <AppointmentCard key={a.id} appt={a} showActions />
          ))}
        </div>

        <div className="mb-4 mt-6 flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[2px] text-blue75">
            Past Appointments
          </span>
        </div>
        <div className="mt-3">
          {PAST.map((a) => (
            <AppointmentCard key={a.id} appt={a} />
          ))}
        </div>
      </div>

      <BookingForm />
    </div>
  );
}
