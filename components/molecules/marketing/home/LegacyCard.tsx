import React from "react";

interface ILegacyCardProps {
  title: string;
  desc: string;
  id: number;
}

const LegacyCard = ({ title, desc, id }: ILegacyCardProps) => {
  return (
    <div className="flex items-start gap-3 md:gap-6 py-8">
      <span className="p-4.5 w-5 h-5 sm:w-11.5 sm:h-11.5 border border-borderColor/32 bg-blue16 text-[13px] font-semibold text-blue46 flex justify-center items-center rounded-full">
        {id}
      </span>
      <div className="space-y-[5.08px]">
        <h3 className="text-gray96 text-[17px] font-bold leading-[160%] tracking-[-0.4px]">
          {title}
        </h3>
        <p className="text-blue70 text-sm leading-[170%]">{desc}</p>
      </div>
    </div>
  );
};

export default LegacyCard;
