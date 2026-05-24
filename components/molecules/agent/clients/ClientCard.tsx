import React from "react";
import Image from "next/image";
import { InvoiceTwo, WillIcon, PlanIcon,ApptIcon } from "@/components/atoms/icons";
import { getStatusColor } from "@/utils/tableUtils";
import { cn } from "@/components/utils/cn";

interface Client {
  id: number;
  img: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  will: string;
  invoice: string;
  nextAppt: string;
  plan: string;
  actions: string[];
}

const ClientCard = ({ client }: { client: Client }) => {
  return (
    <div className="p-3 sm:p-5.5 rounded-2xl border border-borderColor/18 bg-blue14 space-y-4">
      <div className="flex items-start justify-between">
        <Image
          src={client.img}
          width={44}
          height={44}
          alt="client"
          className="rounded-full"
        />

        <p
          className={cn(
            "rounded-full py-1 px-2.5 text-xs font-bold ",
            getStatusColor(client.status),
          )}
        >
          {client.status}
        </p>
      </div>

      <div>
        <h2 className="dashboard-section-heading font-bold">{client.name}</h2>
        <div className="flex">
          <p className="text-[#00E] text-xs leading-[19.2px]">{client.email}</p>
          <p className="text-cyan4A7A74 text-xs leading-[19.2px]">
            {" "}
            .{client.phone}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <WillIcon />
            <span className="text-cyan4A7A74 text-[13px] ">Will</span>
          </div>
          <p className="text-cyan4A7A74 font-medium text-[13px]">
            {client.will}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <InvoiceTwo />
            <span className="text-cyan4A7A74 text-[13px] ">invoice</span>
          </div>
          <p
            className={cn(
              "rounded-full py-1 px-2.5 text-xs font-bold leading-[17.6px]",
              getStatusColor(client.invoice),
            )}
          >
            {client.invoice}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <ApptIcon />
            <span className="text-cyan4A7A74 text-[13px] ">Next Appt</span>
          </div>
          <p className="text-cyan4A7A74 font-medium text-[13px]">
            {client.nextAppt}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <PlanIcon />
            <span className="text-cyan4A7A74 text-[13px] ">Plan</span>
          </div>
          <p className="text-cyan4A7A74 font-medium text-[13px]">
            {client.plan}
          </p>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        {client.actions.map((action, index) => (
          <button
            key={action}
            className={cn(
              "flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap",
              index === 0
                ? " text-violet85 border border-borderColor/35 bg-borderColor/15 hover:opacity-90"
                : "border border-borderColor/22 bg-transparent text-cyan65 font-semibold hover:bg-transparent hover:border-borderColor/35",
            )}
          >
            {action}
          </button>
        ))}
      </div>

    </div>
  );
};

export default ClientCard;
