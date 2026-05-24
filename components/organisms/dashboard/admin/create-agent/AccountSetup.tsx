"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { cva, VariantProps } from "class-variance-authority";
import { GenericInput } from "@/components/molecules/shared/GenericInput";
import { Users, Settings } from "lucide-react";
import GenericDropDown from "@/components/atoms/GenericDropDown";

/* ---------------- CVA ---------------- */
const accountSetupVariants = cva(
  "space-y-6 mt-6 border border-borderColor/18 rounded-2xl bg-blue14 p-6",
  {
    variants: {
      variant: {
        agent: "",
        client: "",
      },
    },
    defaultVariants: {
      variant: "agent",
    },
  },
);

/* ---------------- Types ---------------- */
type Variant = "agent" | "client";

interface AccountSetupProps
  extends VariantProps<typeof accountSetupVariants> {}

/* ---------------- Config ---------------- */
const accountSetupConfig = {
  agent: {
    workingHours: {
      type: "input",
      label: "Preferred Working Hours",
      placeholder: "Mon–Fri, 9am–5pm",
    },
    maxClients: {
      type: "input",
      label: "Max. Clients Per Month",
      placeholder: "e.g. 20",
    },
  },

  client: {
    workingHours: {
      type: "dropdown",
      label: "Assign Agent",
      placeholder: "Select an Agent",
      options: [
        { label: "Agent A", value: "agent_a" },
        { label: "Agent B", value: "agent_b" },
      ],
    },
    maxClients: {
      type: "dropdown",
      label: "Service Plan",
      placeholder: "Select a Service Plan",
      options: [
        { label: "Basic Plan", value: "basic" },
        { label: "Pro Plan", value: "pro" },
      ],
    },
  },
} as const;

/* ---------------- Component ---------------- */
const AccountSetupForm = ({ variant = "agent" }: AccountSetupProps) => {
  const { register } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
      workingHours: "",
      maxClients: "",
    },
  });

  const config = accountSetupConfig[variant ?? "agent"];

  const labelClass =
    "text-blue46 mb-[0.438rem] text-xs uppercase font-semibold tracking-[0.3px] leading-[19.2px]";

  return (
    <div className={accountSetupVariants({ variant })}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan5212/12 border border-cyan5212/12">
          <Settings className="h-5 w-5 text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-gray96">Account Setup</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {/* Password */}
        <GenericInput
          {...register("password")}
          label="Create Password"
          placeholder="Create a strong password"
          type="password"
          size="xsm"
          labelClassName={labelClass}
          fullWidth
        />

        {/* Confirm Password */}
        <GenericInput
          {...register("confirmPassword")}
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          size="xsm"
          labelClassName={labelClass}
          fullWidth
        />

        {/* Dynamic Fields */}
        {Object.entries(config).map(([key, field]: any) => (
          <div key={key} className="flex flex-col">
            <label className={labelClass}>{field.label}</label>

            {field.type === "input" ? (
              <GenericInput
                {...register(key as any)}
                placeholder={field.placeholder}
                size="xsm"
                fullWidth
              />
            ) : (
              <GenericDropDown
                {...register(key as any)}
                options={field.options}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSetupForm;
