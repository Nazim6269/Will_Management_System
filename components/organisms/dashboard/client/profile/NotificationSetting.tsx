"use client";

import { useState } from "react";
import { Toggle } from "../../agent/notifications/Toggle";

interface NotificationSetting {
  key: string;
  label: string;
  defaultOn: boolean;
}

const SETTINGS: NotificationSetting[] = [
  { key: "email", label: "Email Notifications", defaultOn: true },
  { key: "appointments", label: "Appointment Reminders", defaultOn: true },
  { key: "invoices", label: "Invoice Alerts", defaultOn: true },
  { key: "will", label: "Will Updates", defaultOn: false },
];

export default function NotificationSettingsCard() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>(
    Object.fromEntries(SETTINGS.map((s) => [s.key, s.defaultOn])),
  );

  const toggle = (key: string) =>
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue14 px-5 pt-5 mt-6">
      {/* Header */}
      <h2 className="mb-4 text-base font-bold text-gray96">
        Notification Settings
      </h2>

      {/* Rows */}
      {SETTINGS.map((setting) => (
        <div
          key={setting.key}
          className="flex items-center justify-between border-t border-borderColor/18 py-4"
        >
          <span className="text-sm font-semibold text-blue70">
            {setting.label}
          </span>
          <Toggle
            checked={prefs[setting.key]}
            onChange={() => toggle(setting.key)}
          />
        </div>
      ))}
    </div>
  );
}
