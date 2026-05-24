import { AlertIcon } from "@/components/atoms/icons";
import React from "react";

const ExclusionAlert = () => {
  return (
    <div className="flex items-start gap-3 py-4 px-4.5 border border-borderColor/18 rounded-2xl bg-red900">
      <AlertIcon />
      <div className="space-y-1">
        <h2 className="text-red300 font-bold text-[0.813rem]">
          What is an Exclusion?
        </h2>
        <p className="text-blue70 text-[0.813rem] font-normal">
          You can formally exclude certain individuals from inheriting from your
          estate. This is a legal declaration that the named person(s) should
          receive nothing from your estate, even if they would otherwise be
          entitled to a share under intestacy rules.
        </p>
      </div>
    </div>
  );
};

export default ExclusionAlert;
