import { Client, MultiUserIcon } from "@/components/atoms/icons";
import React from "react";

const clientData = [
  {
    name: "Sarah JhonSon",
    plan: "Standard",
    invoice: "Paid",
    createdDate: "March 24,2026",
  },
];

const ClientCard = () => {
  return (
    <div className="border border-borderColor/18 bg-blue14 rounded-2xl p-4 sm:p-5  space-y-3.5">
      <div className="flex items-center gap-2">
        <Client />
        <h2 className="dashboard-section-heading font-bold text-lg capitalize">
          client
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-y-4">
        <li className="flex justify-between items-center">
          <p className="text-cyan4A7A74 text-xs">Name</p>
          <p className="text-cyan65 font-medium text-xs font-plus-jakarta leading-[1.2rem]">
            Sarah JhonSon
          </p>
        </li>
        <li className="flex justify-between items-center">
          <p className="text-cyan4A7A74 text-xs">Plan</p>
          <p className="text-cyan65 font-medium text-xs font-plus-jakarta leading-[1.2rem]">
            Standard
          </p>
        </li>
        <li className="flex justify-between items-center">
          <p className="text-cyan4A7A74 text-xs">Invoice</p>
          <p className="text-cyan65 font-medium text-xs font-plus-jakarta leading-[1.2rem]">
            Paid
          </p>
        </li>
        <li className="flex justify-between items-center">
          <p className="text-cyan4A7A74 text-xs">Created Date</p>
          <p className="text-cyan65 font-medium text-xs font-plus-jakarta leading-[1.2rem]">
            March 24,2026
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ClientCard;
