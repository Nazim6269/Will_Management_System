"use client";

import { useForm, useFieldArray } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import GenericButton from "@/components/atoms/GenericButton";
import { ChevronDown, PlusIcon } from "lucide-react";
import { GenericInput } from "../../shared/GenericInput";

const MAX_ENTRIES = 6;

const RELATIONSHIP_OPTIONS = [
  { label: "Spouse/Partner", value: "spouse_partner" },
  { label: "Child", value: "child" },
  { label: "Sibling", value: "sibling" },
  { label: "Parent", value: "parent" },
  { label: "Friend", value: "friend" },
  { label: "Other", value: "other" },
];

const MINOR_OPTIONS = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

interface Beneficiary {
  fullName: string;
  relationship: string;
  dateOfBirth: string;
  shareOfEstate: string;
  contactAddress: string;
  minor: string;
  specificBequest: string;
}

interface FormValues {
  beneficiaries: Beneficiary[];
}

const emptyBeneficiary: Beneficiary = {
  fullName: "",
  relationship: "",
  dateOfBirth: "",
  shareOfEstate: "",
  contactAddress: "",
  minor: "",
  specificBequest: "",
};

export default function PrimaryBeneficiaryForm() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      beneficiaries: [{ ...emptyBeneficiary }],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "beneficiaries" });

  const beneficiaries = watch("beneficiaries");
  const totalShares = beneficiaries.reduce((sum, b) => {
    const val = parseFloat(b.shareOfEstate);
    return sum + (isNaN(val) ? 0 : val);
  }, 0);

  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 rounded-b-2xl border-t-2  ">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-gray96 textbase font-bold">Primary Beneficiary</h2>
        <ChevronDown size={20} className="text-gray96" />
      </div>
      <p className="text-blue70 text-sm leading-4 mb-1">
        People who will receive a share of the estate. All shares must total
        100%.
      </p>
      <p className="text-blue66 text-base leading-4 mb-6">
        (Max {MAX_ENTRIES} entries)
      </p>

      {/* Beneficiary cards */}
      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-xl border border-borderColor/18 p-5 bg-blue10"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-6 rounded-md bg-blue66/20 border border-blue66/30 flex items-center justify-center text-blue66 text-xs font-bold shrink-0">
                {index + 1}
              </span>
              <p className="text-gray96 text-sm font-bold">
                Primary Beneficiary
              </p>
            </div>

            {/* Row 1: Full Name + Relationship */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <GenericInput
                {...register(`beneficiaries.${index}.fullName`)}
                label="Full Name *"
                placeholder="Legal full name"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <div className="flex flex-col">
                <label className="input-label">Relationship *</label>
                <GenericDropDown
                  {...register(`beneficiaries.${index}.relationship`)}
                  options={RELATIONSHIP_OPTIONS}
                  placeholder="Spouse/Partner"
                />
              </div>
            </div>

            {/* Row 2: Date of Birth + Share of Estate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <GenericInput
                {...register(`beneficiaries.${index}.dateOfBirth`)}
                label="Date of Birth"
                placeholder="mm/dd/yyyy"
                type="date"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <GenericInput
                {...register(`beneficiaries.${index}.shareOfEstate`)}
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
            </div>

            {/* Row 3: Contact/Address + Minor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <GenericInput
                {...register(`beneficiaries.${index}.contactAddress`)}
                label="Contact / Address"
                placeholder="Phone or address"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <div className="flex flex-col">
                <label className="input-label">Minor? (Under 18)</label>
                <GenericDropDown
                  {...register(`beneficiaries.${index}.minor`)}
                  options={MINOR_OPTIONS}
                  placeholder="yes"
                />
              </div>
            </div>

            {/* Row 4: Specific Bequest full width */}
            <div className="flex flex-col">
              <GenericInput
                {...register(`beneficiaries.${index}.specificBequest`)}
                label="Specific Bequest (Optional)"
                placeholder="e.g. The property at 12 Elm Street"
                fullWidth
                size="xsm"
                type="textarea"
                labelClassName="input-label"
                inputClassName="input-value"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5">
        <GenericButton
          variant="glass"
          title="Add Another Beneficiary"
          size="xmd"
          icon={<PlusIcon size={12} />}
          iconPosition="left"
          onClick={() => append({ ...emptyBeneficiary })}
          disabled={fields.length >= MAX_ENTRIES}
        />
        <p className="text-[#C4B0FF66] text-xs">
          {fields.length} / {MAX_ENTRIES} entries used
        </p>
      </div>

      {/* Total shares bar */}
      <div className="mt-4 rounded-xl border border-borderColor/18 bg-blue10 px-5 py-4 flex items-center justify-between">
        <p className="text-blue70 text-sm">Total shares allocated</p>
        <p
          className={`text-base font-bold ${totalShares === 100 ? "text-green-400" : "text-blue66"}`}
        >
          {totalShares}% of 100%
        </p>
      </div>
    </div>
  );
}
