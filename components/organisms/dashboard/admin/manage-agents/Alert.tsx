import GenericButton from "@/components/atoms/GenericButton";
import { AlertIcon } from "@/components/atoms/icons";
import React from "react";

const Alert = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-y-3 justify-between py-4 px-4.5 rounded-2xl border border-borderColor/18 bg-red900">
      <div className="flex items-center gap-2">
        <AlertIcon />
        <div className="flex flex-col space-y-1">
          <h2 className="text-[13px] text-red300 font-medium font-plus-jakarta leading-6">2 Agent Applications Pending Review</h2>
          <p className="text-blue70 text-[13px] font-plus-jakarta leading-[124%]">
            New will writers are waiting for account activation
          </p>
        </div>
      </div>
      <GenericButton variant={"secondary"} title="Review Applications" size={"md"} className="w-full sm:w-auto"/>
    </div>
  );
};

export default Alert;
