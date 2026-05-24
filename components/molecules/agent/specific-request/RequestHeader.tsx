import GenericButton from "@/components/atoms/GenericButton";
import React from "react";

const RequestHeader = () => {
  return (
    <div className="flex justify-between items-center   p-5 rounded-2xl bg-blue14 border border-borderColor/18">
      <div className="space-y-[0.688rem]  max-w-170">
        {" "}
        <h2 className="text-xl md:text-2xl  text-gray96 font-extrabold leading-[124%] tracking-[-1%]">
          Specific Bequests
        </h2>
        <p className="text-blue70 text-[0.813rem] leading-[160%]">
          Specify exactly which assets go to which beneficiaries. For items that
          aren't easily identifiable by description alone, you can upload an
          image to help the executor identify them clearly.
        </p>{" "}
        <GenericButton variant={"secondary"} title="Premium Plan Feature" size={"sm"} />
      </div>
      <span className="text-[3.5rem]">🎁</span>
    </div>
  );
};

export default RequestHeader;
