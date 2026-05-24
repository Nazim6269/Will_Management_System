import { AssetWarning as AssetWarningIcon } from "@/components/atoms/icons";
import React from "react";

const AssetWarning = () => {
  return (
    <div className="flex items-start gap-3 border border-borderColor/18 py-4 px-4.5 bg-indigo29/16 rounded-2xl">
      <AssetWarningIcon className="text-[#4ED5BD]" />
      <div className="space-y-1">
        <h2 className="text-green500 font-bold text-[0.813rem] leading-[135%]">
          This is a separate Asset Register - NOT part of the Will Document.
        </h2>
        <p className="text-cyan122 text-[0.813rem] font-plus-jakarta">
          Asset details recorded here are stored independently and will not be
          included in the PDF will. They serve as a reference for the executor
          when administering the estate.
        </p>
      </div>
    </div>
  );
};

export default AssetWarning;
