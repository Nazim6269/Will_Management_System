import { Executor } from "@/components/atoms/icons";
import React from "react";

const ExecutorInfo = () => {
  return (
    <div className="flex gap-3 items-start bg-blue10 border border-borderColor/18 rounded-2xl py-4 px-4.5 ">
      <Executor />
      <div className="space-y-1">
        <h2 className="text-gray96 font-plus-jakarta font-bold text-[0.813rem]">
          What is an executor?
        </h2>
        <p className="text-blue70 font-plus-jakarta text-[0.813rem] leading-6">
          An executor is legally responsible for carrying out the will -
          managing the estate, paying debts, and distributing assets. We
          recommend naming at least 2 executors.
        </p>
      </div>
    </div>
  );
};

export default ExecutorInfo;
