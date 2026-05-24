"use client";

import { useForm } from "react-hook-form";
import GenericButton from "@/components/atoms/GenericButton";
import { GenericInput } from "@/components/molecules/shared/GenericInput";

interface FormValues {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  roleTitle: string;
  location: string;
  bio: string;
}

export default function InfoForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      firstName: "James",
      lastName: "Thornton",
      emailAddress: "james@inherix.co",
      phoneNumber: "+44 7911 123456",
      roleTitle: "Senior Agent",
      location: "London, UK",
      bio: "Experienced will-writing agent with 8+ years in estate planning. Specialising in complex asset structures and multi-beneficiary wills.",
    },
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="w-full bg-blue14  p-4 sm:p-5.5 rounded-b-2xl rounded-tr-2xl">
      {/* Basic Info Section */}
      <p className="text-blue46 text-[11px] font-bold uppercase tracking-[0.8px] mb-4">
        Basic Info
      </p>
      <hr className="border-borderColor/18 mb-5" />

      {/* Row 1: First Name + Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <GenericInput
          {...register("firstName")}
          label="First Name"
          placeholder="First name"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
        <GenericInput
          {...register("lastName")}
          label="Last Name"
          placeholder="Last name"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <GenericInput
          {...register("emailAddress")}
          label="Email Address"
          placeholder="email@example.com"
          type="email"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
        <GenericInput
          {...register("phoneNumber")}
          label="Phone Number"
          placeholder="+44 0000 000000"
          type="tel"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
      </div>

      {/* Row 3: Role/Title + Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <GenericInput
          {...register("roleTitle")}
          label="Role / Title"
          placeholder="e.g. Senior Agent"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
        <GenericInput
          {...register("location")}
          label="Location"
          placeholder="e.g. London, UK"
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
        />
      </div>

      {/* Bio Section */}

      <div className="flex flex-col mb-6">
        <GenericInput
          label="Bio"
          placeholder="Tell clients about yourself..."
          fullWidth
          size="xsm"
          labelClassName="input-label"
          inputClassName="input-value"
          type="textarea"
        />

        <p className="text-blue46 text-xs mt-2">
          Max 200 characters. Visible to clients on your profile.
        </p>
      </div>

      {/* Footer buttons */}
      <div className="flex items-center justify-end gap-3">
        <GenericButton
          variant="glass"
          title="Discard"
          size="sm"
          onClick={() => reset()}
        />
        <GenericButton
          variant="primary"
          title="Save Changes"
          size="sm"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
}
