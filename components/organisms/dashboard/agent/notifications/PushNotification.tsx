import { pushPrefs } from "@/constants/notificationData";
import React from "react";
import { PrefRow } from "./PrefRow";
const PushNotification = () => {
  return (
    <div className="px-5 py-5 rounded-2xl overflow-hidden border border-borderColor/18 mt-5 bg-blue14">
      <p className="text-lg font-bold text-gray96 mb-0.5">Push Notifications</p>
      <p className="text-xs text-cyan4A7A74 mb-4">
        In-app alerts and sounds
      </p>
      {pushPrefs.map((p) => (
        <PrefRow key={p.label} {...p} />
      ))}
    </div>
  );
};

export default PushNotification;
