"use client";

import { useMultiStepFormContext } from "@/components/providers/MultiStepFormProvider";
import { CheckIcon } from "lucide-react";

export default function ProgressCard() {
  const { visibleSteps, stepStatuses } = useMultiStepFormContext();

  return (
    <div className="rounded-2xl bg-blue14 border border-borderColor/18 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-green-500 text-white text-sm font-bold">
          ✓
        </span>
        <h2 className="dashboard-section-heading text-lg font-semibold tracking-wide">
          Progress
        </h2>
      </div>

      {/* Steps */}
      <ul className="space-y-3">
        {visibleSteps.map((step) => {
          const isDone = stepStatuses[step.id] === "complete";
          return (
            <li key={step.id} className="flex items-center gap-2">
              {isDone ? (
                /* Completed checkmark */
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-green-500 text-white text-xs font-bold shrink-0">
                  <CheckIcon size={14} />
                </span>
              ) : (
                /* Incomplete circle */
                <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-red-500 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
                </span>
              )}
              <span
                className={`text-sm font-medium ${
                  isDone ? "text-violet85" : "text-cyan65"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}