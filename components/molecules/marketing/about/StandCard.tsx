import Image from "next/image";
import React from "react";

const StandCard = ({ title, desc, img }: any) => {
  return (
    <div className=" border border-borderColor/18 rounded-[20px] bg-blue16 p-4 sm:p-7 flex-1">
      <Image src={img} alt="image" width={48} height={48} />
      <h4 className="text-gray96 font-bold leading-[27px] tracking-[-0.4px] text-lg font-libreBaskerville mt-3">{title}</h4>
      <p className="text-base text-blue70 leading-[23.8px] mt-4">{desc}</p>
    </div>
  );
};

export default StandCard;
