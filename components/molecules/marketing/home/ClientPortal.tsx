import Image from "next/image";
import React from "react";

const ClientPortal = () => {
  return (
    <div className="">
      <h2 className="text-blue46 text-[11px] text-center uppercase font-bold leading-[160%] tracking-[ 1.5px] font-plusJakartaSans p-6 bg-blue16 border-b border-borderColor/18 rounded-t-2xl">
        Client portal
      </h2>
      <div className="p-3 sm:p-7 portal-card">
        <div className="space-y-1 mb-5">
          <span className="text-blue46 text[13px] leading-[160%] font-plusJakartaSans">
            Good morning.
          </span>
          <h2 className="text-gray96 text-xl font-bold font-libreBaskerville leading-[160%] tracking-[-0.5px]">
            Sarah Jhonson
          </h2>
        </div>
        <div className="p-6 rounded-2xl portal-gradient-bg">
          <p className="text-xs text-white font-bold leading-[160%] uppercase tracking-[1.5px] font-plusJakartaSans mb-2">
            Your Will Status
          </p>
          <p className="text-white font-libreBaskerville text-base sm:text-xl font-bold leading-[160%] mt-[7.06px] mb-[4.39px] mb-1">
            ✓ Ready — PDF Available
          </p>
          <p className="text-white font-plusJakartaSans text-xs leading-[19.2px]">
            Last updated: March 24, 2026
          </p>
        </div>
        <div className="flex gap-2.5 my-2.5">
          <div className="flex-1 flex flex-col gap-1.5 p-4.5 rounded-[14px] border border-borderColor/18 bg-blue16">
            <span className="text-blue46 font-plusJakartaSans text-xs font-bold leading-[17.6px] tracking-[1px]">
              Invoice
            </span>
            <span className="text-cyan64 font-libreBaskerville text-[22px] font-bold leading-[35.2px] tracking-[-0.8px]">
              All paid
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-1.5 p-4.5 rounded-[14px] border border-borderColor/18 bg-blue16">
            <span className="text-blue46 font-plusJakartaSans text-xs font-bold leading-[17.6px] tracking-[1px]">
              Documents
            </span>
            <span className="text-violet85  font-libreBaskerville text-[22px] font-bold leading-[35.2px] tracking-[-0.8px]">
              3 stored
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center p-4.5 rounded-[14px] border border-borderColor/18 bg-blue16">
          <div className="h-12 w-12  rounded-xl bg-[#ADDCFF] flex justify-center items-center">
            <Image
              src={"/estateThree.png"}
              alt={"estateThree"}
              width={24}
              height={24}
            />
          </div>
          <div>
            <h3 className="text-gray96 font-libreBaskerville text-base sm:text-[22px] font-bold leading[35.2px] tracking-[0.8px]">
              Next appointment
            </h3>
            <p className="text-blue46 font-plusJakartaSans text-sm leading-[170%]">
              Apr 18, 2026 · 10:00 AM · James (Will Writer)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
