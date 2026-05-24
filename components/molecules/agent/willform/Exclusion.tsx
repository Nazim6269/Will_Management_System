"use client";
import { VoltIcon } from "@/components/atoms/icons";
import { useFieldArray, useForm } from "react-hook-form";
import { GenericInput } from "../../shared/GenericInput";

interface Dependant {
  name: string;
  relationship: string;
}
interface FormValues {
  hasFamily: "yes" | "no";
  dependants: Dependant[];
}

const Exclusion = () => {
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
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 mb-6 rounded-b-2xl border-t-2  ">
      <div className="flex items-center gap-2 ">
        {" "}
        <div className="w-9 h-9 rounded-lg bg-borderColor/15 border border-borderColor/18 flex items-center justify-center shrink-0">
          <VoltIcon />
        </div>{" "}
        <h2 className="text-gray96 text-base tracking-[-0.3px] font-bold leading-[25.6px]">
          Exclusion of Immediate Family Members
        </h2>
      </div>
      <p className="leading-5 mt-2.5 mb-3 text-blue70 text-sm">
        Do you wish to exclude any immediate family members from your estate?
      </p>
      <div className="flex flex-col gap-4 mb-7">
        {[
          {
            val: "yes",
            label:
              "Yes - I have a spouse or children (please fill in the table below)",
          },
          { val: "no", label: "No - (skip to next step)" },
        ].map(({ val, label }) => (
          <GenericInput
            key={val}
            type="checkbox"
            label={label}
            checked={hasFamily === val}
            onChange={() => setValue("hasFamily", val as "yes" | "no")}
            labelClassName="text-blue70 text-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default Exclusion;
