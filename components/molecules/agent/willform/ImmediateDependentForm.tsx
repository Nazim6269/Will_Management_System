"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { GenericInput } from "../../shared/GenericInput";
import GenericButton from "@/components/atoms/GenericButton";
import { PlusIcon } from "lucide-react";
import GenericDropDown from "@/components/atoms/GenericDropDown";

const MAX_ENTRIES = 6;

const RELATIONSHIP_OPTIONS = [
  { label: "Spouse", value: "spouse" },
  { label: "Partner", value: "partner" },
  { label: "Child", value: "child" },
  { label: "Step-child", value: "step-child" },
  { label: "Adopted child", value: "adopted-child" },
  { label: "Ex-spouse", value: "ex-spouse" },
];

interface Dependant {
  name: string;
  relationship: string;
}

interface FormValues {
  hasFamily: "yes" | "no";
  dependants: Dependant[];
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function ImmediateDependantsForm() {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      hasFamily: "yes",
      dependants: [
        { name: "", relationship: "" },
        { name: "", relationship: "" },
        { name: "", relationship: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "dependants",
  });
  const hasFamily = watch("hasFamily");

  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 rounded-b-2xl border-t-2  ">
      {/* Heading */}
      <h2 className="text-white text-xl font-bold mb-1">
        <span className="font-bold text-[1.25rem]">Part 1B</span>{" "}
        <span className="text-gray96 font-normal text-lg">
          - Immediate Dependants
        </span>
      </h2>
      <p className="text-blue70 text-[13px] leading-[20.8px] font-norbal mb-4">
        Do you have a spouse or children? (Including ex-spouses, step-children
        and adopted children)
      </p>

      {/* Radio group */}
      <div className="flex flex-col gap-3 mb-7">
        {[
          {
            val: "yes",
            label:
              "Yes - I have a spouse or children (please fill in the table below)",
          },
          { val: "no", label: "No - (skip to next step)" },
        ].map(({ val, label }) => (
          <label key={val} className="flex items-center gap-3 cursor-pointer">
            <span
              onClick={() => setValue("hasFamily", val as "yes" | "no")}
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-150
                ${hasFamily === val ? "border-white bg-white" : "border-white bg-transparent"}`}
            >
              {hasFamily === val && (
                <span className="w-3 h-3 rounded-full bg-blue66" />
              )}
            </span>
            <input
              type="radio"
              value={val}
              {...register("hasFamily")}
              className="sr-only"
            />
            <span className="text-blue70 text-sm">{label}</span>
          </label>
        ))}
      </div>

      {/* Dependants table — only shown when hasFamily === "yes" */}
      {hasFamily === "yes" && (
        <div className="rounded-xl border border-borderColor/18 p-5 bg-blue10">
          {/* Table label */}
          <p className="text-[10px] font-bold tracking-widest text-blue46 uppercase mb-1">
            Dependants - List your surviving immediate family. Include
            ex-spouses, step-children and adopted children.
          </p>
          <p className="text-blue66 text-base font-normal leading-[160%] mb-3.5">
            (Max {MAX_ENTRIES} Entries)
          </p>

          {/* Column headers */}
          <div className="grid grid-cols-[1fr_auto_auto] gap-4  px-1">
            <div className="grid grid-cols-2 gap-3">
              <p className="input-label">Name</p>
              <p className="input-label">Relationship</p>
            </div>
            <div className="w-10" /> {/* spacer for delete btn */}
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-3">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-[1fr_auto] gap-3 items-center"
              >
                <div className="grid grid-cols-2 gap-3">
                  <GenericInput
                    {...register(`dependants.${index}.name`)}
                    placeholder="Full name"
                    fullWidth
                    size="xsm"
                    inputClassName="input-value"
                  />
                  <GenericDropDown
                    {...register(`dependants.${index}.relationship`)}
                    options={RELATIONSHIP_OPTIONS}
                    placeholder="Select..."
                  />
                </div>
                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="w-9 h-9 rounded-lg bg-red-500/20 hover:bg-red-500/40 border border-red-500/40 flex items-center justify-center transition-all duration-150 shrink-0"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5">
            <GenericButton
              variant="glass"
              title="Add Dependants"
              size="xmd"
              icon={<PlusIcon size={12} />}
              iconPosition="left"
              onClick={() => append({ name: "", relationship: "" })}
              disabled={fields.length >= MAX_ENTRIES}
            />

            <p className="text-[#C4B0FF66] text-xs">
              {fields.length} / {MAX_ENTRIES} entries used
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
