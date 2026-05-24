import React from "react";
import { FileText, Receipt, Calendar, Contact } from "lucide-react";
import {
  AppointmentsIcon,
  ContactAgent,
  InvoiceIcon,
  WillStatus,
} from "@/components/atoms/icons";

const QuickGuides = () => {
  const guides = [
    {
      title: "View My Will",
      description: "Open & download your will PDF",
      icon: <WillStatus className="w-7 h-7" />,
    },
    {
      title: "Pay an Invoice",
      description: "Secure payment via Stripe",
      icon: <InvoiceIcon className="text-white w-7 h-7" />,
    },
    {
      title: "Book Appointment",
      description: "Schedule a session",
      icon: <AppointmentsIcon className="w-7 h-7" />,
    },
    {
      title: "Contact Agent",
      description: "Message your will writer",
      icon: <ContactAgent />,
    },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl border border-borderColor/18 overflow-hidden bg-blue14   p-6 mt-6 ">
      {/* Header */}

      <h2 className="text-blueF0 text-sm font-bold font-plus-jakarta mb-3">
        Quick Guides
      </h2>

      {/* Guides List */}
      <div className="space-y-4">
        {guides.map((guide, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 p-3 rounded-xl border border-borderColor/18 bg-blue10/50 text-left transition-all hover:bg-blue19 hover:border-blue66/50 group"
          >
            {/* Icon Section */}
            <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
              {guide.icon}
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <span className="text-blue70 text-sm font-semibold font-plus-jakarta group-hover:text-white transition-colors">
                {guide.title}
              </span>
              <span className="text-blue46 text-xs font-normal font-plus-jakarta">
                {guide.description}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickGuides;
