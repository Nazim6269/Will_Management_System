import { cn } from "@/lib/utils";
import React from "react";

const availabilityData = [
  { day: "Monday", time: "9:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
  { day: "Thursday", time: "9:00 AM - 5:00 PM" },
  { day: "Friday", time: "9:00 AM - 5:00 PM" },
  { day: "Saturday", time: "closed" },
  { day: "Sunday", time: "closed" },
];

const Availability = () => {
  return (
    <div className="w-full rounded-2xl border border-blue16 overflow-hidden p-4 bg-blue14 gradient-border-top">
      <h1 className="text-sm font-bold text-blueF0 mb-4">Availability</h1>

      {availabilityData.map((item, index) => {
        const isClosed = item.time === "closed";
        return (
          <div
            key={index}
            className="flex items-center justify-between border-b last:border-0 border-borderColor/30 py-[11px]"
          >
            <span className="text-sm text-blue46">{item.day}</span>
            <span
              className={cn(
                `text-sm font-medium`,
                isClosed ? "text-red60" : "text-blue70",
              )}
            >
              {item.time}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Availability;
