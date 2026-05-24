"use client";
import { cn } from "@/components/utils/cn";
import React from "react";
import { useMultiStepFormContext } from "@/components/providers/MultiStepFormProvider";

const StepsPanel = () => {
  const { currentStepIndex, stepStatuses, visibleSteps, goToStep } =
    useMultiStepFormContext();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 border border-borderColor/18 bg-blue14 rounded-xl overflow-hidden">
      {visibleSteps.map((step, index: number) => {
        const isActive = currentStepIndex === index;
        const isCompleted = stepStatuses[step.id] === "complete";

        return (
          <div
            key={step.id}
            onClick={() => goToStep(index)}
            className={cn(
              "flex flex-col justify-center items-center gap-0.5 py-3 px-2 w-full border-borderColor/18 transition-colors cursor-pointer",
              // Inject active/completed logic via CN while preserving layout rules
              isActive
                ? "bg-blue201847"
                : isCompleted
                  ? "bg-green-500/10"
                  : "hover:bg-white/5",
              "lg:border-r lg:last:border-r-0 lg:border-b-0",
              "sm:max-lg:border-r sm:max-lg:[&:nth-child(3n)]:border-r-0 sm:max-lg:[&:nth-child(-n+3)]:border-b",
              "max-sm:border-r max-sm:[&:nth-child(2n)]:border-r-0 max-sm:[&:nth-child(-n+4)]:border-b",
            )}
          >
            <p
              className={cn(
                "text-[10px] sm:text-xs uppercase font-bold tracking-[1px] leading-4 text-center transition-colors",
                isActive
                  ? "text-violet85"
                  : isCompleted
                    ? "text-green-500"
                    : "text-cyan4A7A74",
              )}
            >
              {`STEP ${index + 1}`}
            </p>
            <p
              className={cn(
                "text-[10px] sm:text-xs font-semibold leading-5 text-center transition-colors",
                isActive ? "text-violet85" : "text-cyan4A7A74",
              )}
            >
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StepsPanel;
