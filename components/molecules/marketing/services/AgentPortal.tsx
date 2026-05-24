import Image from "next/image";
import React from "react";

const AgentPortal = () => {
  return (
    <div className="">
      <h2 className="text-blue46 text-[11px] text-center uppercase font-bold leading-[160%] tracking-[ 1.5px] font-plusJakartaSans p-6 bg-blue16 border-b border-borderColor/18 rounded-t-2xl">
        Agent portal
      </h2>
      <div className="p-3 sm:p-7 portal-card">
        <div className="space-y-1 mb-5">
          <span className="text-blue46 text[13px] leading-[160%] font-semibold">
            Will writer dashboard
          </span>
          <h2 className="text-gray96 text-[13px] font-semibold  leading-[160%] tracking-[-0.5px]">
            James Thornton 📋
          </h2>
        </div>
        <div className="p-6 rounded-2xl portal-cyan-gradient-bg">
          <p className="text-xs text-white font-bold leading-[160%] uppercase tracking-[1.5px]  mb-2">
            Today's Tasks
          </p>
          <p className="text-white text-[13px]  font-semibold leading-[160%] tracking-[0.2px] mt-[7.06px] mb-1">
            3 wills in progress
          </p>
          <p className="text-white font-plusJakartaSans text-xs leading-[19.2px]">
            2 appointments scheduled today
          </p>
        </div>
        <div className="flex gap-2.5 my-2.5">
          <div className="flex-1 flex flex-col gap-1.5 p-4.5 rounded-[14px] border border-borderColor/18 bg-blue16">
            <span className="text-blue46 font-plusJakartaSans text-xs font-semibold leading-[17.6px] tracking-[1px]">
              Clients
            </span>
            <span className="text-blue85 font-libreBaskerville text-[13px] font-semibold leading-[20.8px] tracking-[-0.8px]">
              24 active
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-1.5 p-4.5 rounded-[14px] border border-borderColor/18 bg-blue16">
            <span className="text-blue46 font-plusJakartaSans text-xs font-semibold leading-[17.6px] tracking-[1px]">
              Invoices
            </span>
            <span className="text-cyan64  font-libreBaskerville text-[13px] font-semibold leading-[20.8px] tracking-[-0.8px]">
              £2,400
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center p-4.5 rounded-[14px] border border-borderColor/18 bg-blue16">
          <div className="h-12 w-12  rounded-xl bg-cyan5212/12 flex justify-center items-center">
           📝
          </div>
          <div>
            <h3 className="text-gray96 font-libreBaskerville text-base sm:text-[22px] font-bold leading[35.2px] tracking-[0.8px]">
              Next: Fill will form
            </h3>
            <p className="text-blue46 font-plusJakartaSans text-sm leading-[170%]">
              Client: Sarah Johnson · Due today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPortal;
