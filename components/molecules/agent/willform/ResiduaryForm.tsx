"use client";

import { useForm, useFieldArray } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import { GenericInput } from "../../shared/GenericInput";
import GenericButton from "@/components/atoms/GenericButton";
import { ChevronDown, PlusIcon, Phone } from "lucide-react";

const MAX_ENTRIES = 6;

const RELATIONSHIP_OPTIONS = [
  { label: "Spouse/Partner", value: "spouse_partner" },
  { label: "Child", value: "child" },
  { label: "Sibling", value: "sibling" },
  { label: "Parent", value: "parent" },
  { label: "Friend", value: "friend" },
  { label: "Other", value: "other" },
];

interface ResiduaryBeneficiary {
  fullName: string;
  relationship: string;
  contact: string;
  share: string;
}

interface FormValues {
  beneficiaries: ResiduaryBeneficiary[];
}

const emptyBeneficiary: ResiduaryBeneficiary = {
  fullName: "",
  relationship: "",
  contact: "",
  share: "",
};

export default function ResiduaryBeneficiaryForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      beneficiaries: [{ ...emptyBeneficiary }],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "beneficiaries" });

  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 rounded-b-2xl border-t-2 gradient-border-top">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-gray96 text-base font-bold">
          Residuary Beneficiary
        </h2>
        <ChevronDown size={20} className="text-gray96" />
      </div>
      <p className="text-blue70 text-sm leading-4 mb-6">
        Who should receive any remaining assets not specifically allocated, or
        if a primary beneficiary predeceases the testator?
      </p>

      {/* Beneficiary cards */}
      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-xl border border-borderColor/18 p-5 bg-blue10"
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-md bg-borderColor/10 border border-borderColor/18 flex items-center justify-center text-violet85 text-xs font-bold shrink-0">
                {index + 1}
              </span>
              <p className="text-gray96 text-sm font-bold">
                Residuary Beneficiary
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

            {/* Row 2: Contact + Share */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <GenericInput
                {...register(`beneficiaries.${index}.contact`)}
                label="Contact *"
                placeholder="+44 7700..."
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
                prefix={<Phone size={14} className="text-blue66" />}
              />
              <GenericInput
                {...register(`beneficiaries.${index}.share`)}
                label="Share (%) *"
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
          </div>
        ))}
      </div>

      {/* Footer */}
      {fields.length < MAX_ENTRIES && (
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
      )}
    </div>
  );
}
