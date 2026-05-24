import React from "react";

const allocationData = [
  {
    name: "Emma Thornton",
    percentage: 50,
    color: "bg-green500",
  },
  {
    name: "James Thornton",
    percentage: 25,
    color: "bg-violet85",
  },
  {
    name: "Lily Johnson",
    percentage: 10,
    color: "bg-orange50",
  },
  {
    name: "Unallocated",
    percentage: 15,
    color: "bg-red60",
  },
];

const AllocatedShare = () => {
  const totalAllocated = allocationData
    .filter((item) => item.name !== "Unallocated")
    .reduce((acc, item) => acc + item.percentage, 0);

  return (
    <div className="relative overflow-hidden rounded-[24px] px-6 py-5 welcome-card mt-6">
      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <h2 className="text-[1.5rem] font-bold tracking-[-1px] text-white">
            Total Share Allocated
          </h2>

          <span className="text-[2rem] font-bold leading-9 tracking-[-1px] text-orange50">
            {totalAllocated}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 h-4 w-full overflow-hidden rounded-full bg-[#2A2D6B]/70">
          <div className="flex h-full w-full">
            {allocationData.map((item) => (
              <div
                key={item.name}
                className={`${item.color} h-full first:rounded-l-full last:rounded-r-full`}
                style={{ width: `${item.percentage}%` }}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {allocationData.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-sm font-medium text-white/80"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />

              <span>
                {item.name} - {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllocatedShare;
