"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import GenericButton from "@/components/atoms/GenericButton";
import { GenericInput } from "@/components/molecules/shared/GenericInput";

interface FormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}



export default function ChangePasswordForm() {
  const { register, handleSubmit, watch } = useForm<FormValues>();

  return (
    <div className="w-full flex flex-col gap-3   rounded-2xl border border-borderColor/18 bg-blue14 p-5 sm:p-6">
      {/* Page heading */}
      <h2 className="text-base font-bold text-gray96">Primary Beneficiary</h2>

      {/* Form card */}
      <div className="w-full rounded-xl border border-borderColor/18 bg-blue14 p-5.5">
        {/* Card header */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-borderColor/32 bg-borderColor/15 text-xs font-bold text-violet85 flex-shrink-0">
            2
          </span>
          <p className="text-sm font-bold text-blueF0">Change Password</p>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4.5">
          <GenericInput
            label="Current Password"
            labelClassName="input-label"
            inputClassName="input-value"
            type="password"
            placeholder="Enter Current Password"
            name="currentPassword"
            value={watch("currentPassword")}
            onChange={(e) => register("currentPassword").onChange(e)}
            fullWidth
          />
          <GenericInput
            label="New Password"
            type="password"
            labelClassName="input-label"
            inputClassName="input-value"
            placeholder="Enter New Password"
            name="newPassword"
            value={watch("newPassword")}
            onChange={(e) => register("newPassword").onChange(e)}
            fullWidth
          />
          <GenericInput
            label="Confirm New Password"
            type="password"
            labelClassName="input-label"
            inputClassName="input-value"
            placeholder="Confirm New Password"
            name="confirmPassword"
            value={watch("confirmPassword")}
            onChange={(e) => register("confirmPassword").onChange(e)}
            fullWidth
          />
        </div>
      </div>

      {/* Update button */}
      <GenericButton
        title="Update Password"
        variant="primary"
        className="button-shadow"
        fullWidth
        onClick={handleSubmit(console.log)}
      />
    </div>
  );
}
