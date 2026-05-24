import { ArrowRight } from "lucide-react";
import React from "react";

const appointments = [
  {
    id: 1,
    name: "Jesper Nielsen",
    time: "10:00",
    service: "Initial consultation",
  },
  {
    id: 2,
    name: "Michael Brown",
    time: "11:00",
    service: "Will review & sign-off",
  },
  {
    id: 3,
    name: "Emma Williams",
    time: "12:00",
    service: "Asset discussion",
  },
];

const TodayAppointments = () => {
  return (
    <div className="bg-borderColor/15 border border-borderColor/15 rounded-2xl">
      <div className="flex justify-between items-center px-6 py-4.5 ">
        <div>
          <h2 className="dashboard-section-heading">Today's Appointments</h2>
        </div>
        <button className="text-cyan64 text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer">
          View all <ArrowRight size={16} />
        </button>
      </div>

      <div className="">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center gap-10 border-t border-borderColor/15 px-6 py-3.5 "
          >
            <div className="h-12 w-12 rounded-lg flex items-center justify-center text-cyan64 font-bold">
              {appointment.time}
            </div>
            <div className="flex-1">
              <h4 className="text-gray96 text-sm font-semibold mb-0.5">
                {appointment.name}
              </h4>
              <p className="text-cyan4A7A74 text-xs">{appointment.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayAppointments;
