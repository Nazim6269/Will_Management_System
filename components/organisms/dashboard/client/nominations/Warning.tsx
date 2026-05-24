import { AssetWarning } from "@/components/atoms/icons";
import React from "react";

const Warning = () => {
  return (
    <div className="flex items-start sm:items-center gap-3 border border-borderColor/18 py-4 px-4.5 rounded-2xl bg-[rgba(37, 35, 94, 0.24)]">
      <AssetWarning className="w-6 h-6 " />
      <p className="text-green500 font-plus-jakarta text-[0.813rem] font-bold leading-[165%]">
        Please ensure the{" "}
        <span className="text-[#CEC3FF]">
          total share allocation across all nominees equals exactly 100%.
        </span>
        You can add up to 6 nominees. Each nominee must have a valid
        relationship and a unique share percentage. Changes will be reflected in
        your will upon saving.
      </p>
    </div>
  );
};

export default Warning;
