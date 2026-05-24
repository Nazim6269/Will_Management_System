import React from "react";
const data = [
  {
    title: "Will created",
    number: "5k+",
  },
  {
    title: "Satisfaction rate",
    number: "98%",
  },
  {
    title: "Certified writers",
    number: "200+",
  },
  {
    title: "Document access",
    number: "24/7",
  },
];
const Statistics = ({ section }: { section?: string }) => {
  const isStatistics = section === "statistics";
  return (
    <div
      className="
  grid grid-cols-2 lg:flex w-full sm:w-auto
  border border-borderColor/18 rounded-2xl 
  
  divide-y divide-borderColor/18
  lg:divide-y-0 lg:divide-x
  
  justify-center items-center
"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center px-4 md:px-14 py-6 md:py-7"
        >
          <div
            className={`${isStatistics ? "text-3xl md:text-5xl" : " text-3xl md:text-[52px] font-libreBaskerville"} gradient-text-two  font-bold `}
          >
            {item.number}
          </div>
          <p
            className={`font-medium leading-[160%] text-blue46 mt-1.5 whitespace-nowrap ${isStatistics ? "text-xs sm:text-sm" : "text-xs md:text-[13px]"} `}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
