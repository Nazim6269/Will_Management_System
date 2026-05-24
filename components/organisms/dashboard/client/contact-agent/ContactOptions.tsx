import React from "react";
import { Phone, Mail, Video } from "lucide-react"; // Using Lucide for consistent icons

const ContactOptions = () => {
  const options = [
    {
      title: "Phone Call",
      detail: "+44 7700 900100",
      icon: <Phone className="w-5 h-5 text-white" />,
      iconBg: "bg-indigo40",
      iconBorder: "border-blue66/30",
      isPrimary: true,
    },
    {
      title: "Email Directly",
      detail: "james@inherix.com",
      icon: <Mail className="w-5 h-5 text-white" />,
      iconBg: "bg-blue20",
      iconBorder: "border-cyan36/30",
    },
    {
      title: "Book a Zoom Meeting",
      detail: "Schedule a video call",
      icon: <Video className="w-5 h-5 text-white" />,
      iconBg: "bg-indigo40",
      iconBorder: "border-blue66/30",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-borderColor/18 overflow-hidden p-4 bg-blue14 gradient-border-top mt-6">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-xl border ${options[0].iconBorder} ${options[0].iconBg}`}
        >
          {options[0].icon}
        </div>
        <div>
          <h3 className="text-blueF0 text-sm font-semibold">
            {options[0].title}
          </h3>
          <p className="text-blue46 text-xs font-medium">{options[0].detail}</p>
        </div>
      </div>

      <div className="border-t border-blue16 pt-6">
        <h4 className="text-blueF0 text-sm font-medium mb-5">
          Other Ways to Reach Us
        </h4>

        <div className="space-y-6">
          {options.slice(1).map((option, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div
                className={`p-3 rounded-xl border ${option.iconBorder} ${option.iconBg} transition-transform group-hover:scale-105`}
              >
                {option.icon}
              </div>
              <div>
                <h3 className="text-blueF0 text-sm font-semibold group-hover:text-blue85 transition-colors">
                  {option.title}
                </h3>
                <p className="text-blue46 text-xs font-medium">
                  {option.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
