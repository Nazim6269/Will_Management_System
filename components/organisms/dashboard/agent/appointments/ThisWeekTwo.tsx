"use client";

interface ScheduleSlot {
  day: string;
  time: string;
}

interface ThisWeekCardProps {
  slots?: ScheduleSlot[];
}

const defaultSlots: ScheduleSlot[] = [
  { day: "Monday", time: "9 AM – 5 PM" },
  { day: "Tuesday", time: "9 AM – 5 PM" },
  { day: "Wednesday", time: "9 AM – 5 PM" },
  { day: "Thursday", time: "Unavailable" },
];

export default function ThisWeekTwo({
  slots = defaultSlots,
}: ThisWeekCardProps) {
  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue10 p-5 mt-4">
      {/* Header */}
      <h2 className="mb-4 text-lg font-bold tracking-[-0.2px] pb-2 text-gray96 border-b border-borderColor/18">
        This Week
      </h2>

     

      {/* Schedule Grid */}
      <div className="grid grid-cols-2 gap-[10px]">
        {slots.map((slot, idx) => (
          <div
            key={slot.day}
            className={`flex flex-col items-center justify-center rounded-[0.625rem] border  px-4 py-2.5 text-center h-18 ${
              idx !== 3
                ? "bg-blue19 border-borderColor/18"
                : "bg-blue10 border-borderColor/18"
            }`}
          >
            <span className="mb-1 text-xs font-bold text-gray96">
              {slot.day}
            </span>
            <span className="text-xs font-medium text-cyan4A7A74">
              {slot.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
