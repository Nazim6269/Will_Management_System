"use client";

import GenericButton from "@/components/atoms/GenericButton";

export default function DangerZoneCard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-red60/25 bg-blue14">

      {/* Header */}
      <div className="border-b border-red60/20 px-5 py-4">
        <h2 className="text-base font-medium text-red60">Danger Zone</h2>
      </div>

      {/* Deactivate Account row */}
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-bold text-gray96">Deactivate Account</p>
          <p className="text-xs text-cyan4A7A74">
            Temporarily disable your account. You can reactivate anytime.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-borderColor/18" />

      {/* Delete Account row */}
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-bold text-gray96">Delete Account</p>
          <p className="text-xs text-cyan4A7A74">
            Permanently delete your account and all associated data. This cannot be undone.
          </p>
        </div>

        <GenericButton
          variant="danger"
          title="Delete"
          size="xmd"
          onClick={() => console.log("delete")}
        />
      </div>

    </div>
  );
}