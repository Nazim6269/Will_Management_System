"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { GenericInput } from "@/components/molecules/shared/GenericInput";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import GenericButton from "@/components/atoms/GenericButton";
import { PlusIcon } from "lucide-react";

const OWNERSHIP_OPTIONS = [
  { label: "Sole Owner", value: "sole_owner" },
  { label: "Joint Ownership", value: "joint" },
  { label: "Tenants in Common", value: "tenants_common" },
  { label: "Trust", value: "trust" },
];

const PROPERTY_TYPE_OPTIONS = [
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Investment", value: "investment" },
  { label: "Land", value: "land" },
  { label: "Other", value: "other" },
];

interface Property {
  address: string;
  ownershipType: string;
  propertyType: string;
  estimatedValue: string;
  outstandingMortgage: string;
  additionalNotes: string;
}

interface FormValues {
  properties: Property[];
}

const emptyProperty: Property = {
  address: "",
  ownershipType: "",
  propertyType: "",
  estimatedValue: "",
  outstandingMortgage: "",
  additionalNotes: "",
};

export default function RealEstatePropertyForm() {
  const { register, control, watch } = useForm<FormValues>({
    defaultValues: {
      properties: [
        {
          address: "12 Elm Street, London, EC1A 1BB",
          ownershipType: "sole_owner",
          propertyType: "residential",
          estimatedValue: "450000",
          outstandingMortgage: "",
          additionalNotes: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "properties",
  });

  const values = watch("properties");

  const totalValue = values.reduce((sum, p) => {
    const val = parseFloat(p.estimatedValue);
    return sum + (isNaN(val) ? 0 : val);
  }, 0);


  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 mb-6 rounded-b-2xl border-t-2  ">
      {/* Heading */}
      <h2 className="text-white text-base font-bold tracking-[-0.3px] leading-[25.6px] mb-1">
        Real Estate &amp; Property
      </h2>
      <p className="text-blue70 text-sm leading-5 mb-5">
        List all properties owned by the testator. Include residential,
        commercial, and investment properties.
      </p>

      {/* Property cards */}
      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-xl border border-borderColor/18 p-5 bg-blue10"
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-blue66/20 border border-blue66/30 flex items-center justify-center text-violet85 text-xs font-bold shrink-0">
                  {index + 1}
                </span>
                <p className="text-white text-sm font-bold">Property</p>
              </div>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="px-3 py-1.5 rounded-lg border border-red-500/40 text-red-400 text-xs font-semibold hover:bg-red-500/10 transition-all duration-150"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Property Address — full width */}
            <div className="mb-5">
              <GenericInput
                {...register(`properties.${index}.address`)}
                label="Property Address"
                placeholder="12 Elm Street, London, EC1A 1BB"
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
            </div>

            {/* Row: Ownership Type + Property Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col">
                <label className="input-label">Ownership Type</label>
                <GenericDropDown
                  {...register(`properties.${index}.ownershipType`)}
                  options={OWNERSHIP_OPTIONS}
                  placeholder="Sole Owner"
                />
              </div>
              <div className="flex flex-col">
                <label className="input-label">Property Type</label>
                <GenericDropDown
                  {...register(`properties.${index}.propertyType`)}
                  options={PROPERTY_TYPE_OPTIONS}
                  placeholder="Residential"
                />
              </div>
            </div>

            {/* Row: Estimated Value + Outstanding Mortgage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <GenericInput
                {...register(`properties.${index}.estimatedValue`)}
                label="Estimated Value (£)"
                placeholder="e.g. 450000"
                type="number"
                min={0}
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
              <GenericInput
                {...register(`properties.${index}.outstandingMortgage`)}
                label="Outstanding Mortgage (£)"
                placeholder="0 if none"
                type="number"
                min={0}
                fullWidth
                size="xsm"
                labelClassName="input-label"
                inputClassName="input-value"
              />
            </div>

            {/* Additional Notes — textarea */}
            <GenericInput
              type="textarea"
              label="Additional Notes"
              placeholder="Tenants, co-owners, special conditions..."
              {...register(`properties.${index}.additionalNotes`)}
              fullWidth
              size="xsm"
              labelClassName="input-label"
              inputClassName="input-value"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5">
        <GenericButton
          variant="glass"
          title="Add Another Property"
          size="xmd"
          icon={<PlusIcon size={12} />}
          iconPosition="left"
          onClick={() => append({ ...emptyProperty })}
        />
        <p className="text-[#C4B0FF66] text-xs">
          {fields.length} {fields.length === 1 ? "property" : "properties"}{" "}
          added
        </p>
      </div>

      {/* Total Property Value bar */}
      <div className="mt-4 rounded-xl border border-borderColor/18 bg-blue10 px-5 py-4 flex items-center justify-between">
        <p className="text-blue70 text-sm">Total Property Value</p>
        <p className="text-violet85 text-[1.25rem] font-extrabold">
          £{totalValue.toLocaleString("en-GB")}
        </p>
      </div>
    </div>
  );
}
