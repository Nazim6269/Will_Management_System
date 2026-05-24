import React from "react";
import { FileText, Receipt, HelpCircle, ArrowRight } from "lucide-react";
import { PayInvoiceIcon, QuestionIcon, ViewWillIcon, WillIcon } from "@/components/atoms/icons";

const QuickLinks = () => {
  const links = [
    {
      title: "View My Will",
      icon: <ViewWillIcon />,
      color: "text-blueF0",
    },
    {
      title: "Pay Invoice",
      icon: <PayInvoiceIcon />,
      color: "text-blueF0",
    },
    {
      title: "Help & FAQ",
      icon: <QuestionIcon />,
      color: "text-red60",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-borderColor/18 overflow-hidden bg-blue14 gradient-border-top shadow-2xl mt-6">
      {/* Header */}
      <div className="p-5 pb-2">
        <h2 className="text-blueF0 text-sm font-semibold ">
          Quick Links
        </h2>
      </div>

      {/* Links List */}
      <div className="divide-y divide-borderColor/32 space-y-2 px-3">
        {links.map((link, idx) => (
          <button
            key={idx}
            className="w-full flex items-center justify-between py-2 group transition-colors hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="transition-transform duration-200 group-hover:scale-110">
                {link.icon}
              </div>
              <span className="text-blue70 text-sm font-medium font-plus-jakarta group-hover:text-white transition-colors">
                {link.title}
              </span>
            </div>

            <ArrowRight className="w-4 h-4 text-blue46 group-hover:text-blue85 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
