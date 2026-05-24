"use client";

import { GenericSearch } from "@/components/atoms/GenericSearch";

const HowCanIHelp = () => {
  return (
    <div className="flex flex-col justify-center items-center gradient-border-top border-borderColor/18 bg-blue14 rounded-[1.125rem] space-y-4 pt-7.5 pb-12.5">
      <div className="space-y-2">
        <h2 className="text-blueF0 text-2xl font-extrabold">
          How can I help you?
        </h2>
        <p className="text-blue46 text-sm">
          Search our help centre or browse by category below
        </p>
      </div>
      <div className="w-full max-w-lg">
        <GenericSearch
          placeholder="Search for help e.g. 'download will', 'pay invoice'..."
          onSearch={() => []}
        />
      </div>
    </div>
  );
};

export default HowCanIHelp;
