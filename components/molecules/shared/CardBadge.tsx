import React from "react";

const CardBadge = ({ text }: { text: string }) => {
  return (
    <div className="px-[14px] py-[5px] rounded-full border border-borderColor/25 bg-borderColor/15 text-[11px] font-bold leading-[160%] tracking-[0.5px] text-violet85 mt-5.5 w-fit max-w-84">
      {text}
    </div>
  );
};

export default CardBadge;
