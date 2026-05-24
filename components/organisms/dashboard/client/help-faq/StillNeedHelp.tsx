import GenericButton from "@/components/atoms/GenericButton";
import React from "react";

const StillNeedHelp = () => {
  return (
    <div className="rounded-3xl welcome-card flex flex-col justify-center items-center px-3 py-8 sm:h-64 mt-6">
      <span className="text-[2.5rem]">🤔</span>
      <h2 className="text-2xl font-bold text-blueF0 mt-3">Still need help?</h2>
      <p className="text-sm text-blue46 mt-1.5 mb-3 sm:mb-8 text-center">
        Can't find what you're looking for? Send a message directly to your will
        writer and we'll get back to you as soon as possible.
      </p>
      <GenericButton title="Contact our Agents" variant={"primary"} />
    </div>
  );
};

export default StillNeedHelp;
