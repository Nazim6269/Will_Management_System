import React from "react";

const GreenDotWithText = ({ text }: { text?: string }) => {
  return (
    <div className="dot-green-div flex items-center gap-2 w-fit">
      <span className="dot-green h-[7px] w-[7px]"></span>
      <p className="text-violet85 leading-[160%] text-[0.813rem] tracking-[0.013rem]">
        {text}
      </p>
    </div>
  );
};

export default GreenDotWithText;
