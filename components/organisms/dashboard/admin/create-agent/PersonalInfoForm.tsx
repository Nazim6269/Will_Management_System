"use client";

import { useForm, useFieldArray } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import { GenericInput } from "@/components/molecules/shared/GenericInput";
import { Email, LocationIcon, PrevateIcon, Telephone, UserIcon } from "@/components/atoms/icons";
import { LocationEditIcon } from "lucide-react";

const MAX_ENTRIES = 6;

const RELATIONSHIP_OPTIONS = [
  { label: "Daughter", value: "daughter" },
  { label: "Son", value: "son" },
  { label: "Spouse/Partner", value: "spouse_partner" },
  { label: "Sibling", value: "sibling" },
  { label: "Parent", value: "parent" },
  { label: "Other", value: "other" },
];

interface PersonalInfo {
  firstName: string;
  lastName: string;
  nationalId: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  shareOfEstate: string;
  relationship: string;
}

interface FormValues {
  personalInfo: PersonalInfo[];
}

const emptyPersonalInfo: PersonalInfo = {
  firstName: "",
  lastName: "",
  nationalId: "",
  email: "",
  dateOfBirth: "",
  gender: "",
  phoneNumber: "",
  shareOfEstate: "",
  relationship: "",
};



export default function PersonalInfoForm() {
  const { register, control } = useForm<FormValues>({
    defaultValues: { personalInfo: [{ ...emptyPersonalInfo }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "personalInfo",
  });


  return (
    <div className="space-y-4 ">
      <div className="w-full flex flex-col gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="w-full rounded-2xl border border-borderColor/18 bg-blue14 p-5 sm:p-6"
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan5212/12 border-cyan5212/12 border">
                👤
                </div>
                <p className="text-sm font-bold text-gray96">
                  Personal Information
                </p>
              </div>
            </div>

            {/* Row 1: First Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <GenericInput
                {...register(`personalInfo.${index}.firstName`)}
                label="First Name"
                placeholder="First name"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
                required
                prefix={<UserIcon />}
                requiredClassName="text-blue66"
              />
              <GenericInput
                {...register(`personalInfo.${index}.lastName`)}
                label="Last Name"
                placeholder="Last name"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
                required
                prefix={<UserIcon />}
                requiredClassName="text-blue66"
              />
            </div>

            {/* Row 2: National ID + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <GenericInput
                {...register(`personalInfo.${index}.dateOfBirth`)}
                label="Date of Birth"
                placeholder="mm/dd/yyyy"
                type="date"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
                prefix={<PrevateIcon />}
                required
                requiredClassName="text-blue66"
              />
              <div className="flex flex-col">
                <label className="input-label">Gender</label>
                <GenericDropDown
                  {...register(`personalInfo.${index}.gender`)}
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" },
                  ]}
                  placeholder="Select gender"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <GenericInput
                {...register(`personalInfo.${index}.phoneNumber`)}
                label="Phone Number"
                placeholder="+44 7900 111222"
                type="tel"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
                prefix={<Telephone />}
                required
                requiredClassName="text-blue66"
              />
              <GenericInput
                {...register(`personalInfo.${index}.email`)}
                label="Email Address"
                placeholder="email@example.com"
                type="email"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
                prefix={<Email />}
                required
                requiredClassName="text-blue66"
              />
            </div>

            {/* Row 4: Share of Estate + Relationship */}
            <div className="grid grid-cols-1 gap-4">
              <GenericInput
                {...register(`personalInfo.${index}.shareOfEstate`)}
                label="Home address"
                placeholder="Street, City, Postcode"
                type="text"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
                prefix={<LocationIcon />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
