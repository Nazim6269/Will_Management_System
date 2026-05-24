"use client";

import { useForm } from "react-hook-form";
import { GreenCheckbox } from "@/components/atoms/icons";

const CHECKLIST_ITEMS = [
  {
    id: "testatorInfo",
    label: "Testator information is correct",
    description: "Name, DOB, address, and personal details are accurate.",
  },
  {
    id: "beneficiaries",
    label: "Beneficiaries confirmed & shares total 100%",
    description: "All beneficiaries listed and percentage shares are correct.",
  },
  {
    id: "executors",
    label: "Executors appointed correctly",
    description: "At least one executor named with correct contact details.",
  },
  {
    id: "exclusions",
    label: "Exclusions reviewed",
    description:
      "Any exclusions have been confirmed or section has been skipped.",
  },
  {
    id: "children",
    label: "Children & guardianship confirmed",
    description:
      "Children listed (if any) and guardian appointed, or section skipped.",
  },
  {
    id: "approved",
    label: "Testator has reviewed and approved all sections",
    description:
      "The testator is of sound mind and confirms all details are correct.",
  },
];

type ChecklistKeys =
  | "testatorInfo"
  | "beneficiaries"
  | "executors"
  | "exclusions"
  | "children"
  | "approved";

type FormValues = Record<ChecklistKeys, boolean>;

export default function FinalReviewChecklist() {
  const { watch, setValue } = useForm<FormValues>({
    defaultValues: {
      testatorInfo: false,
      beneficiaries: false,
      executors: false,
      exclusions: false,
      children: false,
      approved: false,
    },
  });

  const values = watch();
  const confirmedCount = Object.values(values).filter(Boolean).length;
  const total = CHECKLIST_ITEMS.length;
  const allConfirmed = confirmedCount === total;

  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 mb-6 rounded-b-2xl border-t-2 gradient-border-top">
      {/* Heading */}
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="w-9 h-9 rounded-lg bg-blue66/20 border border-blue66/30 flex items-center justify-center shrink-0">
          <GreenCheckbox />
        </div>
        <h2 className="text-gray96 text-base tracking-[-0.3px] font-bold leading-[25.6px]">
          Final Review Checklist
        </h2>
      </div>
      <p className="text-blue70 text-sm leading-5 mb-5">
        Confirm all items before generating the will document.
      </p>

      {/* Checklist items */}
      <div className="flex flex-col gap-3">
        {CHECKLIST_ITEMS.map((item) => {
          const checked = values[item.id as ChecklistKeys];
          return (
            <div
              key={item.id}
              onClick={() =>
                setValue(
                  item.id as ChecklistKeys,
                  !values[item.id as ChecklistKeys],
                )
              }
              className={`
                flex items-start gap-3 rounded-xl border px-4 py-3.5 cursor-pointer
                transition-all duration-150
                ${
                  checked
                    ? "border-blue66/40 bg-blue66/5"
                    : "border-borderColor/18 bg-blue10 hover:border-borderColor/40"
                }
              `}
            >
              {/* Checkbox */}
              <div
                className={`
                  w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5
                  transition-all duration-150
                  ${checked ? "border-blue66 bg-blue66" : "border-blue46/50 bg-transparent"}
                `}
              >
                {checked && (
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-gray96 text-sm font-bold leading-[22px]">
                  {item.label}
                </p>
                <p className="text-blue70 text-xs leading-[18px] mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Status banner */}
      <div
        className={`
          mt-4 flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300
          ${
            allConfirmed
              ? "border-green-500/30 bg-green-500/10"
              : "border-red-500/30 bg-red-500/10"
          }
        `}
      >
        <span
          className={`text-sm shrink-0 ${allConfirmed ? "text-green-400" : "text-red-400"}`}
        >
          {allConfirmed ? "✓" : "⚠"}
        </span>
        <p
          className={`text-sm font-medium ${allConfirmed ? "text-green-400" : "text-red-400"}`}
        >
          {allConfirmed
            ? "All items confirmed — you may now generate the will document."
            : `${confirmedCount} / ${total} items confirmed - please complete all items before generating.`}
        </p>
      </div>
    </div>
  );
}
