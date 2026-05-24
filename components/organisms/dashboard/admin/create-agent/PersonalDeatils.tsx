"use client";

import { useForm, useFieldArray } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import { GenericInput } from "@/components/molecules/shared/GenericInput";
import { Paperclip, Landmark, Award, ChevronDown } from "lucide-react";
import FileUpload from "./FileUpload";
import { PDetails } from "@/components/atoms/icons";

interface ProfessionalDetails {
  certificationBody: string;
  certificationNumber: string;
  yearsOfExperience: string;
  specialisation: string;
  professionalBio: string;
}

interface FormValues {
  professionalDetails: ProfessionalDetails[];
}

const labelClass =
  "text-blue46 mb-[0.438rem] text-xs uppercase font-semibold tracking-[0.3px] leading-[19.2px]";


export default function ProfessionalDetailsForm() {
  const { register, control } = useForm<FormValues>({
    defaultValues: {
      professionalDetails: [
        {
          certificationBody: "",
          certificationNumber: "",
          yearsOfExperience: "less_than_1",
          specialisation: "general",
          professionalBio: "",
        },
      ],
    },
  });

  const { fields } = useFieldArray({ control, name: "professionalDetails" });

  return (
    <div className="space-y-6 mt-6 border border-borderColor/18 rounded-2xl bg-blue14 ">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="w-full p-8 shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan5212/12 border-cyan5212/12 border">
            <PDetails />
            </div>
            <h2 className="text-base font-bold text-gray96 ">
              Professional Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
            {/* Certification Body */}
            <div className="flex flex-col">
              <label className={labelClass}>
                Certification Body{" "}
                <span className="text-blue-400 text-[10px]">●</span>
              </label>
              <GenericDropDown
                {...register(`professionalDetails.${index}.certificationBody`)}
                options={[
                  { label: "SWW", value: "sww" },
                  { label: "IPW", value: "ipw" },
                ]}
                placeholder="Select body"
              />
            </div>

            {/* Certification Number */}
            <GenericInput
              {...register(`professionalDetails.${index}.certificationNumber`)}
              label="Certification Number"
              placeholder="e.g. SWW-2021-4523"
              prefix={<Award className="w-4 h-4 text-white/40" />}
              labelClassName={labelClass}
              fullWidth
              size="xsm"
              inputClassName="text-gray96/80"
              required
              requiredClassName="text-blue66"
            />

            {/* Years of Experience */}
            <div className="flex flex-col">
              <label className={labelClass}>Years of Experience</label>
              <GenericDropDown
                {...register(`professionalDetails.${index}.yearsOfExperience`)}
                options={[
                  { label: "Less than 1 year", value: "less_than_1" },
                  { label: "1-3 years", value: "1_3" },
                  { label: "5+ years", value: "5_plus" },
                ]}
              />
            </div>

            {/* Specialisation */}
            <div className="flex flex-col">
              <label className={labelClass}>Specialisation</label>
              <GenericDropDown
                {...register(`professionalDetails.${index}.specialisation`)}
                options={[
                  { label: "General Will Writing", value: "general" },
                  { label: "Estate Planning", value: "estate" },
                ]}
              />
            </div>
          </div>

          {/* Upload Section */}
          <FileUpload />

          {/* Professional Bio */}
          <GenericInput
            type="textarea"
            {...register(`professionalDetails.${index}.professionalBio`)}
            label="Professional Bio"
            placeholder="Tell us about your background, expertise, and approach to will writing..."
            fullWidth
            size="xsm"
            labelClassName={labelClass}
            required
            requiredClassName="text-blue66"
          />
        </div>
      ))}
    </div>
  );
}
