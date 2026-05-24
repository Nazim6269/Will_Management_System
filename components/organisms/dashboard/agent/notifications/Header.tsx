import { TABS } from "@/constants/notificationData";
import React, { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex items-center justify-between px-5.5 py-4.5 border-b border-borderColor/18">
      <div className="flex items-center gap-3">
        <h2 className="text-base font-bold text-gray96 whitespace-nowrap">
          All Notifications
        </h2>
        <div className="flex items-center gap-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer
                        ${
                          activeTab === tab
                            ? "bg-borderColor/15 text-violet85 border border-borderColor/20"
                            : tab === "Invoices"
                              ? "text-violet85"
                              : tab === "Appointments"
                                ? "text-cyan4A7A74"
                                : "text-cyan4A7A74"
                        }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <button className="text-violet85 text-xs font-bold cursor-pointer">
        Mark all read
      </button>
    </div>
  );
};

export default Header;
