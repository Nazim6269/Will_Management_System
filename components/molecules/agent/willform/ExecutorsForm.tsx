"use client";

import { useForm, useFieldArray } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import GenericButton from "@/components/atoms/GenericButton";
import { PlusIcon, User, Mail, Phone, MapPin } from "lucide-react";
import { Executor } from "@/components/atoms/icons";
import { GenericInput } from "../../shared/GenericInput";

const MAX_ENTRIES = 3;

const ORDINAL = ["First", "Second", "Third"];

const RELATIONSHIP_OPTIONS = [
  { label: "Spouse/Partner", value: "spouse_partner" },
  { label: "Child", value: "child" },
  { label: "Sibling", value: "sibling" },
  { label: "Parent", value: "parent" },
  { label: "Friend", value: "friend" },
  { label: "Solicitor", value: "solicitor" },
  { label: "Other", value: "other" },
];

interface Executor {
  firstName: string;
  relationship: string;
  email: string;
  phone: string;
  address: string;
}

interface FormValues {
  executors: Executor[];
}

const emptyExecutor: Executor = {
  firstName: "",
  relationship: "",
  email: "",
  phone: "",
  address: "",
};

export default function ExecutorsForm() {
  const { register, control } = useForm<FormValues>({
    defaultValues: {
      executors: [{ ...emptyExecutor }, { ...emptyExecutor }],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "executors" });

  const labelClass =
    "text-white text-sm font-medium mb-[0.438rem] leading-[19.2px]";

  return (
    <div className="w-full bg-blue14 border border-borderColor/18 p-4 sm:p-7 mt-4 rounded-b-2xl border-t-2  ">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <span className="w-9 h-9 rounded-lg bg-borderColor/15 border border-borderColor/18 flex items-center justify-center shrink-0">
          <Executor />
        </span>
        <h2 className="text-gray96 text-base font-bold font-plus-jakarta">
          Executors
        </h2>
      </div>
      <p className="text-blue70 text-[13px] leading-[20.8px] mb-1">
        Appoint up to 3 executors. The primary executor acts first; secondary
        executors step in if needed.
      </p>
      <p className="text-blue66 text-[13px] leading-[20.8px] mb-6">
        (Max {MAX_ENTRIES} entries)
      </p>

      {/* Executor cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-xl border border-borderColor/18 p-5 bg-blue10 flex flex-col gap-4"
          >
            {/* Card label */}
            <p className="text-[10px] font-bold tracking-[1.5px] text-blue46 uppercase">
              Executor {index + 1}
            </p>

            {/* First Name */}
            <GenericInput
              {...register(`executors.${index}.firstName`)}
              label="First Name *"
              placeholder="e.g. James"
              fullWidth
              size="xsm"
              labelClassName="input-label"
              inputClassName="input-value"
              prefix={<User size={14} className="text-blue75" />}
            />

            {/* Relationship */}
            <div className="flex flex-col">
              <label className="input-label">Relationship *</label>
              <GenericDropDown
                {...register(`executors.${index}.relationship`)}
                options={RELATIONSHIP_OPTIONS}
                placeholder="Spouse/Partner"
              />
            </div>

            {/* Email */}
            <GenericInput
              {...register(`executors.${index}.email`)}
              label="Email *"
              placeholder="executor@email.com"
              type="email"
              fullWidth
              size="xsm"
              labelClassName="input-label"
              inputClassName="input-value"
              prefix={<Mail size={14} className="text-blue75" />}
            />

            {/* Phone */}
            <GenericInput
              {...register(`executors.${index}.phone`)}
              label="Phone *"
              placeholder="+44 7700..."
              type="tel"
              fullWidth
              size="xsm"
              labelClassName="input-label"
              inputClassName="input-value"
              prefix={<Phone size={14} className="text-blue75" />}
            />

            {/* Address */}
            <GenericInput
              {...register(`executors.${index}.address`)}
              label="Address *"
              placeholder="Full address"
              fullWidth
              size="xsm"
              labelClassName="input-label"
              inputClassName="input-value"
              prefix={<MapPin size={14} className="text-blue75" />}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5">
        <GenericButton
          variant="glass"
          title={`Add ${ORDINAL[fields.length] ?? ""} Executor`}
          size="xmd"
          icon={<PlusIcon size={12} />}
          iconPosition="left"
          onClick={() => append({ ...emptyExecutor })}
          disabled={fields.length >= MAX_ENTRIES}
        />
        <p className="text-[#C4B0FF66] text-xs">
          {fields.length} / {MAX_ENTRIES} entries used
        </p>
      </div>
    </div>
  );
}
