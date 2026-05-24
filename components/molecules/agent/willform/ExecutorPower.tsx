"use client";

import { VoltIcon } from "@/components/atoms/icons";
import { GenericInput } from "../../shared/GenericInput";

const ExecutorPower = () => {
  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 mb-6 rounded-b-2xl border-t-2  ">
      <div className="flex items-center gap-2 ">
        {" "}
        <div className="w-9 h-9 rounded-lg bg-borderColor/15 border border-borderColor/18 flex items-center justify-center shrink-0">
          <VoltIcon />
        </div>{" "}
        <h2 className="text-gray96 text-base tracking-[-0.3px] font-bold leading-[25.6px]">
          Executor Powers & Instructions
        </h2>
      </div>
      <p className="leading-5 mt-2.5">
        Customise the powers and instructions for the executor(s).
      </p>
      <div className="mt-3">
        <GenericInput
          type="checkbox"
          label="Executor has power to sell any property in the estate"
          labelClassName="text-blue70 leading-5"
        />
      </div>
    </div>
  );
};

export default ExecutorPower;
