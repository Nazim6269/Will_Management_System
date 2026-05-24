"use client";

import { useForm } from "react-hook-form";
import { GenericInput } from "../../shared/GenericInput";

// ── Form types ────────────────────────────────────────────────────────────────
interface TestatorFormValues {
  fullLegalName: string;
  dateOfBirth: string;
  nationalInsuranceNo: string;
  maritalStatus: string;
  currentAddress: string;
  nationality: string;
  occupation: string;
  previousWill: "yes" | "no";
}

// ── Main component ────────────────────────────────────────────────────────────
export default function TestatorInfoForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TestatorFormValues>({
    defaultValues: {
      fullLegalName: "Sarah Elizabeth Johnson",
      dateOfBirth: "03/14/1985",
      nationalInsuranceNo: "AB 12 34 56 C",
      maritalStatus: "Married",
      currentAddress: "12 Elm Street, London, EC1A 1BB",
      nationality: "British",
      occupation: "",
      previousWill: "no",
    },
  });

  const previousWill = watch("previousWill");

  const onSubmit = (data: TestatorFormValues) => {
    console.log(data);
  };

  return (
    <div className="w-full rounded-2xl bg-blue14 border border-borderColor/18 p-4 sm:p-7 ">
      {/* Heading */}
      <h2 className="text-gray96 font-bold mb-5">
        <span className="font-bold text-[1.25rem]">Part 1A</span>{" "}
        <span className="text-gray96 font-normal text-lg">
          - Testator Information
        </span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GenericInput
            {...register("fullLegalName")}
            label="Full Legal Name"
            placeholder="Full Legal Name"
            error={errors.fullLegalName?.message}
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <GenericInput
            {...register("dateOfBirth")}
            label="Date of Birth"
            placeholder="MM/DD/YYYY"
            error={errors.dateOfBirth?.message}
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GenericInput
            {...register("nationalInsuranceNo")}
            label="National Insurance No."
            placeholder="AB 12 34 56 C"
            error={errors.nationalInsuranceNo?.message}
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <GenericInput
            {...register("maritalStatus")}
            label="Marital Status"
            placeholder="e.g. Married"
            error={errors.maritalStatus?.message}
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
        </div>

        <GenericInput
          {...register("currentAddress")}
          label="Current Address"
          placeholder="Street, City, Postcode"
          error={errors.currentAddress?.message}
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GenericInput
            {...register("nationality")}
            label="Nationality"
            placeholder="e.g. British"
            error={errors.nationality?.message}
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
          <GenericInput
            {...register("occupation")}
            label="Occupation"
            placeholder="e.g. Accountant"
            error={errors.occupation?.message}
            fullWidth
            size="xsm"
            labelClassName="input-label"
            inputClassName="input-value"
          />
        </div>

        <hr className="border-white/10 " />

        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.3px] uppercase text-blue46">
            Have you previously made a will?
          </p>
          <div className="flex flex-col gap-2">
            {(["yes", "no"] as const).map((val) => (
              <label
                key={val}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span
                  onClick={() => setValue("previousWill", val)}
                  className={`
                    w-4 h-4 rounded-full border-2 flex items-center justify-center
                    transition-all duration-150 shrink-0
                    ${
                      previousWill === val
                        ? "border-white bg-white"
                        : "border-white bg-transparent"
                    }
                  `}
                >
                  {previousWill === val && (
                    <span className="w-3 h-3 rounded-full bg-blue66" />
                  )}
                </span>
                <input
                  type="radio"
                  value={val}
                  {...register("previousWill")}
                  className="sr-only"
                />
                <span className="text-blue70 text-sm uppercase font-normal tracking-[0.3px]">
                  {val}
                </span>
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
