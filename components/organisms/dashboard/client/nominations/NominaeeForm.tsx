"use client";

import { useForm, useFieldArray } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import GenericButton from "@/components/atoms/GenericButton";
import { PlusIcon } from "lucide-react";
import { GenericInput } from "@/components/molecules/shared/GenericInput";

const MAX_ENTRIES = 6;

const RELATIONSHIP_OPTIONS = [
  { label: "Daughter", value: "daughter" },
  { label: "Son", value: "son" },
  { label: "Spouse/Partner", value: "spouse_partner" },
  { label: "Sibling", value: "sibling" },
  { label: "Parent", value: "parent" },
  { label: "Other", value: "other" },
];

interface Nominee {
  firstName: string;
  lastName: string;
  nationalId: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  shareOfEstate: string;
  relationship: string;
}

interface FormValues {
  nominees: Nominee[];
}

const emptyNominee: Nominee = {
  firstName: "",
  lastName: "",
  nationalId: "",
  email: "",
  dateOfBirth: "",
  phoneNumber: "",
  shareOfEstate: "",
  relationship: "",
};


export default function NomineeForm() {
  const { register, control } = useForm<FormValues>({
    defaultValues: { nominees: [{ ...emptyNominee }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "nominees",
  });

  const cardTitle = (index: number) =>
    index === 0 ? "Primary Nominee" : `Nominee ${index + 1}`;

  return (
    <div className="space-y-4 ">
      <div className="flex justify-between items-center  mt-4 sm:mt-8">
        <div>
          <h2 className="text-gray96 text-base font-bold leading-[160%]">
            Nominee {fields.length} of {MAX_ENTRIES} added
          </h2>
          <p className="font-normal text-xs text-blue85">
            {" "}
            {fields.length} / {MAX_ENTRIES} entries used
          </p>
        </div>
        {/* Add button */}
        <div className="flex items-center justify-between px-1">
          <GenericButton
            variant="glass"
            title="Add Nominee"
            size="xmd"
            icon={<PlusIcon size={12} />}
            iconPosition="left"
            onClick={() => append({ ...emptyNominee })}
            disabled={fields.length >= MAX_ENTRIES}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="w-full rounded-2xl border border-borderColor/18 bg-blue14 p-5 sm:p-6"
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-blue66/30 bg-blue66/20 text-xs font-bold text-violet85">
                  {index + 1}
                </span>
                <p className="text-sm font-bold text-gray96">
                  {cardTitle(index)}
                </p>
              </div>
              {fields.length > 1 && (
                <button
                  onClick={() => remove(index)}
                  className="rounded-lg border border-red-500/35 bg-red-500/15 px-3.5 py-1.5 text-xs font-semibold text-red-400 transition-colors hover:bg-red-500/25"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Row 1: First Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <GenericInput
                {...register(`nominees.${index}.firstName`)}
                label="First Name"
                placeholder="First name"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <GenericInput
                {...register(`nominees.${index}.lastName`)}
                label="Last Name"
                placeholder="Last name"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
            </div>

            {/* Row 2: National ID + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <GenericInput
                {...register(`nominees.${index}.nationalId`)}
                label="National ID / Passport No."
                placeholder="GB 123 456 789"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <GenericInput
                {...register(`nominees.${index}.email`)}
                label="Email Address"
                placeholder="email@example.com"
                type="email"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
            </div>

            {/* Row 3: Date of Birth + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <GenericInput
                {...register(`nominees.${index}.dateOfBirth`)}
                label="Date of Birth"
                placeholder="mm/dd/yyyy"
                type="date"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <GenericInput
                {...register(`nominees.${index}.phoneNumber`)}
                label="Phone Number"
                placeholder="+44 7900 111222"
                type="tel"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
            </div>

            {/* Row 4: Share of Estate + Relationship */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GenericInput
                {...register(`nominees.${index}.shareOfEstate`)}
                label="Share of Estate (%) *"
                placeholder="% e.g. 50"
                type="number"
                min={0}
                max={100}
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <div className="flex flex-col">
                <label className="input-label">Relationship</label>
                <GenericDropDown
                  {...register(`nominees.${index}.relationship`)}
                  options={RELATIONSHIP_OPTIONS}
                  placeholder="Select relationship"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
