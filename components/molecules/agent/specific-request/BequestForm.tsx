"use client";

import { useForm, useFieldArray } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import GenericButton from "@/components/atoms/GenericButton";
import { PlusIcon, Upload } from "lucide-react";
import PhotoUpload from "./PhotoUpload";
import { GenericInput } from "../../shared/GenericInput";

const CATEGORY_OPTIONS = [
  { label: "Jewellery", value: "jewellery" },
  { label: "Artwork", value: "artwork" },
  { label: "Antiques", value: "antiques" },
  { label: "Vehicles", value: "vehicles" },
  { label: "Electronics", value: "electronics" },
  { label: "Property", value: "property" },
  { label: "Other", value: "other" },
];

const BENEFICIARY_OPTIONS = [
  { label: "Sarah Johnson", value: "sarah_johnson" },
  { label: "David Smith", value: "david_smith" },
  { label: "Max Methio", value: "max_methio" },
];

interface BequestItem {
  category: string;
  estimatedValue: string;
  itemName: string;
  fullDescription: string;
  locationStorage: string;
  serialReferenceNo: string;
  beneficiary: string;
  photo: File | null;
}

interface FormValues {
  bequests: BequestItem[];
}

const emptyBequest: BequestItem = {
  category: "",
  estimatedValue: "",
  itemName: "",
  fullDescription: "",
  locationStorage: "",
  serialReferenceNo: "",
  beneficiary: "",
  photo: null,
};

export default function BequestForm() {
  const { register, control } = useForm<FormValues>({
    defaultValues: {
      bequests: [{ ...emptyBequest }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "bequests",
  });

  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 mb-6 rounded-b-2xl border-t-2 gradient-border-top">
      <div className="flex flex-col gap-6">
        {fields.map((field, index) => (
          <div key={field.id}>
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orangeFB/12 border border-orangeFB/18 flex items-center justify-center text-yellow-400 text-sm font-bold shrink-0">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-gray96 text-base font-bold leading-[20px]">
                    Bequest Item {index + 1}
                  </p>
                  <p className="text-blue46 text-xs">Not yet saved</p>
                </div>
              </div>
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="px-3 py-1.5 rounded-lg border border-red60/20 text-red60 text-xs font-semibold hover:bg-red60/20 transition-all duration-150 bg-red60/10"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Card body */}
            <div className="rounded-xl border border-borderColor/18 p-5 bg-blue10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6">
                {/* Left: form fields */}
                <div className="flex flex-col gap-5">
                  {/* Row 1: Category + Estimated Value */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="input-label">Item Category *</label>
                      <GenericDropDown
                        {...register(`bequests.${index}.category`)}
                        options={CATEGORY_OPTIONS}
                        placeholder="Select Category"
                      />
                    </div>
                    <GenericInput
                      {...register(`bequests.${index}.estimatedValue`)}
                      label="Estimated Value (£)"
                      placeholder="e.g. 2500"
                      type="number"
                      min={0}
                      fullWidth
                      size="xsm"
                      labelClassName="input-label"
                      inputClassName="input-value"
                    />
                  </div>

                  {/* Item Name */}
                  <GenericInput
                    {...register(`bequests.${index}.itemName`)}
                    label="Item Name / Title *"
                    placeholder="e.g. 18ct gold diamond engagement ring"
                    fullWidth
                    size="xsm"
                    labelClassName="input-label"
                    inputClassName="input-value"
                  />

                  {/* Full Description */}
                  <div className="flex flex-col">
                    <GenericInput
                      {...register(`bequests.${index}.fullDescription`)}
                      label="Full Description *"
                      placeholder="Describe the item in detail - colour, size, markings, brand, age, condition, any distinguishing features that would help identify it..."
                      type="textarea"
                      labelClassName="input-label"
                      inputClassName="input-value"
                      fullWidth
                    />
                  </div>

                  {/* Row: Location + Serial */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <GenericInput
                      {...register(`bequests.${index}.locationStorage`)}
                      label="Location / Storage"
                      placeholder="e.g. Safe in bedroom..."
                      fullWidth
                      size="xsm"
                      labelClassName="input-label"
                      inputClassName="input-value"
                    />
                    <GenericInput
                      {...register(`bequests.${index}.serialReferenceNo`)}
                      label="Serial / Reference No."
                      placeholder="If applicable"
                      fullWidth
                      size="xsm"
                      labelClassName="input-label"
                      inputClassName="input-value"
                    />
                  </div>

                  {/* Beneficiary */}
                  <div className="flex flex-col">
                    <label className="input-label">
                      Select from Will Beneficiaries
                    </label>
                    <GenericDropDown
                      {...register(`bequests.${index}.beneficiary`)}
                      options={BENEFICIARY_OPTIONS}
                      placeholder="Select a beneficiary"
                    />
                  </div>
                </div>

                {/* Right: Photo upload */}

                <PhotoUpload />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6">
        <GenericButton
          variant="glass"
          title="Add Another Bequest"
          size="xmd"
          icon={<PlusIcon size={12} />}
          iconPosition="left"
          onClick={() => append({ ...emptyBequest })}
        />
      </div>
    </div>
  );
}
