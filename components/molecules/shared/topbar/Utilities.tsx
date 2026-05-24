import { CalenderIcon, NotificationIcon } from "@/components/atoms/icons";
import React from "react";

const Utilities = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 ml-3 min-w-0">
      <div className="flex items-center justify-center border border-cyan5212/13 rounded-xl w-9 h-9 bg-blue20 shrink-0 cursor-pointer hover:bg-blue20/80 transition-colors">
        <NotificationIcon />
      </div>

      <div className="flex items-center gap-1 bg-blue20 border border-cyan5212/13 px-2 sm:px-3.5 py-1.5 h-9 rounded-lg min-w-0">
        <CalenderIcon />
        <p className="text-cyan59 text-xs truncate">
          {new Date().toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default Utilities;
