"use client";

import { useForm } from "react-hook-form";
import GenericButton from "@/components/atoms/GenericButton";
import { GenericInput } from "@/components/molecules/shared/GenericInput";

interface FormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}



export default function PassForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="w-full bg-blue14  p-4 sm:p-7 rounded-2xl">
      {/* Current Password — full width */}
      <div className="mb-5">
        <GenericInput
          {...register("currentPassword", { required: true })}
          label="Current Password"
          placeholder="Enter current password"
          type="password"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
      </div>

      {/* New Password + Confirm Password — 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-1">
        <div className="flex flex-col">
          <GenericInput
            {...register("newPassword", { required: true, minLength: 8 })}
            label="New Password"
            placeholder="Min 8 characters"
            type="password"
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <p className="text-blue46 text-xs mt-1.5">Enter a new password</p>
        </div>

        <GenericInput
          {...register("confirmPassword", {
            required: true,
            validate: (val) => val === watch("newPassword"),
          })}
          label="Confirm Password"
          placeholder="Repeat new password"
          type="password"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-6">
        <GenericButton
          variant="primary"
          title="Update Password"
          size="sm"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
}
