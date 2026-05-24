"use client";

import { GreenCheckbox, VoltIcon } from "@/components/atoms/icons";
import { useForm } from "react-hook-form";
import { GenericInput } from "../../shared/GenericInput";

interface FormValues {
  hasChildren: "yes" | "no";
}

const ChildrenGuardianshipForm = () => {
  const { register, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      hasChildren: "no",
    },
  });

  const hasChildren = watch("hasChildren");

  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 mb-6 rounded-b-2xl border-t-2  ">
      {/* Heading */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-borderColor/15 border border-borderColor/18 flex items-center justify-center shrink-0">
          <VoltIcon />
        </div>
        <h2 className="text-gray96 text-base tracking-[-0.3px] font-bold leading-[25.6px]">
          Children &amp; Guardianship
        </h2>
      </div>

      <p className="leading-5 mt-2.5 mb-4 text-white text-sm">
        Do you have any children? This includes biological, adopted, and
        step-children.
      </p>

      {/* Checkboxes */}
      <div className="flex flex-col gap-4 mb-5">
        {[
          { val: "yes", label: "I have children (please fill in below)" },
          { val: "no", label: "I do not have children (skip this step)" },
        ].map(({ val, label }) => (
          <GenericInput
            key={val}
            type="checkbox"
            label={
              <span className="text-blue70 text-sm">
                <span className="text-white font-semibold">
                  {val === "yes" ? "Yes -" : "No -"}
                </span>{" "}
                {label}
              </span>
            }
            checked={hasChildren === val}
            onChange={() => setValue("hasChildren", val as "yes" | "no")}
            labelClassName="text-blue70 text-sm"
          />
        ))}
      </div>

      {/* Info banner — shown when "No" is selected */}
      {hasChildren === "no" && (
        <div className="flex items-center gap-1.5 rounded-xl border border-borderColor/18 bg-blue37/50 px-4 py-3">
          <GreenCheckbox />
          <p className="text-[#746B96] text-sm leading-[20px]">
            No children - this section will be skipped. Proceed to Final Review.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChildrenGuardianshipForm;
