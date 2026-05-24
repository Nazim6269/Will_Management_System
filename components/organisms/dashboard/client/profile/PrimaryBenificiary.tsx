"use client";

import { useForm } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import GenericButton from "@/components/atoms/GenericButton";
import { GenericInput } from "@/components/molecules/shared/GenericInput";

interface FormValues {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  dateOfBirth: string;
  homeAddress: string;
  preferredLanguage: string;
}

const LANGUAGE_OPTIONS = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "Arabic", value: "ar" },
  { label: "Spanish", value: "es" },
];



export default function PrimaryBeneficiaryForm() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      fullName: "Sarah Elizabeth Johnson",
      emailAddress: "sarah.j@email.com",
      phoneNumber: "+44 7700 900001",
      homeAddress: "12 Elm Street, London, EC1A 1BB",
      preferredLanguage: "en",
    },
  });

  return (
    <div className="w-full flex flex-col gap-5 p-4 sm:p-6 border border-borderColor/18 rounded-2xl   ">
      {/* Page heading */}
      <h2 className="text-base font-bold text-gray96">Primary Beneficiary</h2>

      {/* Form card */}
      <div className="w-full rounded-xl border border-borderColor/18 bg-blue14 p-4">
        {/* Card header */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-borderColor/32 bg-borderColor/15 text-xs font-bold text-violet85 flex-shrink-0">
            1
          </span>
          <p className="text-sm font-bold text-blueF0">Personal Information</p>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-3.5">
          <GenericInput
            {...register("fullName", { required: true })}
            label="Full Name *"
            placeholder="Legal full name"
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <GenericInput
            {...register("emailAddress", { required: true })}
            label="Email Address *"
            placeholder="email@example.com"
            type="email"
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <GenericInput
            {...register("phoneNumber", { required: true })}
            label="Phone Number *"
            placeholder="+44..."
            type="tel"
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <GenericInput
            {...register("dateOfBirth")}
            label="Date of Birth"
            placeholder="mm/dd/yyyy"
            type="date"
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <GenericInput
            {...register("homeAddress")}
            label="Home Address"
            placeholder="Street, City, Postcode"
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <div className="flex flex-col">
            <label className="input-label">Preferred Language</label>
            <GenericDropDown
              {...register("preferredLanguage")}
              options={LANGUAGE_OPTIONS}
              placeholder="English"
            />
          </div>
        </div>
      </div>

      {/* Save button */}
      <GenericButton
        title="Save Changes"
        variant="primary"
        className="button-shadow"
        fullWidth
        onClick={handleSubmit(console.log)}
      />
    </div>
  );
}
