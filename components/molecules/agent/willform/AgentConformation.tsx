"use client";
import React from "react";
import { GenericInput } from "../../shared/GenericInput";

const AgentConformation = () => {
  return (
    <div className="space-y-6 w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 rounded-b-2xl border-t-2   mb-6">
      <div className="space-y-1.5">
        <h2 className="text-gray96  font-medium text-base tracking-[-0.3px] leading-[25.6px]">
          Agent confirmation
        </h2>
        <p className="text-blue70 text-sm leading-5">
          As the will writer, please confirm the following before proceeding.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <GenericInput
            type="checkbox"
            label="I confirm the testator is of sound mind and making this will voluntarily."
            labelClassName="text-blue70 leading-5"
          />
          <GenericInput
            type="checkbox"
            label="I confirm all personal details have been verified with official documents."
            labelClassName="text-blue70 leading-5"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentConformation;
