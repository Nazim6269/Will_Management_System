import {
  Client,
  NewWill,
  NewInvoice,
  BookAppt,
} from "@/components/atoms/icons";
import React from "react";

const quickActions = [
  {
    icon: <Client />,
    label: "New client",
  },
  {
    icon: <NewWill />,
    label: "New will",
  },
  {
    icon: <NewInvoice />,
    label: "New invoice",
  },
  {
    icon: <BookAppt />,
    label: "Book Appt.",
  },
];

const QuicActions = () => {
  return (
    <div className="bg-indigo30/40 border border-borderColor/15 rounded-2xl ">
      <h4 className="py-4.5 px-5.5 text-gray96 text-base font-bold leading-6 tracking-[-0.3px] font-plus-jakarta-sans border-b border-borderColor/18">
        Quick Actions
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4">
        {quickActions.map((action, index) => (
          <div
            key={index}
            className=" p-3 border border-borderColor/20 rounded-xl bg-indigo25 cursor-pointer hover:bg-indigo30/25 flex flex-col justify-center items-center gap-2"
          >
            {action.icon}
            <p className="text-cyan9EF5E8 text-base font-semibold leading-[22.8px]">{action.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuicActions;
