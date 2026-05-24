import { emailPrefs } from "@/constants/notificationData";
import React from "react";
import { PrefRow } from "./PrefRow";

const EmailPref = () => {
  return (
    <div className="px-5 py-5 rounded-2xl overflow-hidden border border-borderColor/18 bg-blue14">
      <p className="text-lg font-bold text-gray96 mb-1">
        Email Preferences
      </p>
      <p className="text-xs text-cyan4A7A74 mb-4">
        Choose what emails you receive
      </p>
      {emailPrefs.map((p) => (
        <PrefRow key={p.label} {...p} />
      ))}
    </div>
  );
};

export default EmailPref;
