"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import GenericButton from "@/components/atoms/GenericButton";
import { RightArrow } from "@/components/atoms/icons";
import Link from "next/link";
import { toast } from "sonner";
import { GenericInput } from "../../shared/GenericInput";

const contactSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "Email Address is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  role: z.string().min(1, "Role is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div>
      <div>
        <h2 className="text-gray96 font-libreBaskerville font-bold leading-[160%] tracking-[-1px] text-[1.625rem] text-center sm:text-start">
          Send us a message
        </h2>
        <p className="text-blue70 mt-2 font-plusJakartaSans text-[0.938rem] leading-[160%] text-center sm:text-start">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
          <GenericInput
            {...register("firstName")}
            error={errors.firstName?.message}
            label="First Name"
            placeholder="First Name"
            labelClassName="text-blue70 text-[13px] mb-2"
            inputClassName="rounded-xl "
            fullWidth
          />
          <GenericInput
            {...register("lastName")}
            error={errors.lastName?.message}
            label="Last Name"
            placeholder="Last Name"
            labelClassName="text-blue70 text-[13px] mb-2"
            inputClassName="rounded-xl flex-1"
            fullWidth
          />
        </div>
        <GenericInput
          {...register("email")}
          error={errors.email?.message}
          label="Email Address"
          placeholder="Email Address"
          labelClassName="text-blue70 text-[13px] mb-2"
          inputClassName="rounded-xl"
          fullWidth
        />
        <GenericInput
          {...register("phone")}
          error={errors.phone?.message}
          label="Phone Number"
          placeholder="Phone Number"
          labelClassName="text-blue70 text-[13px] mb-2"
          inputClassName="rounded-xl"
          fullWidth
        />
        <GenericInput
          {...register("role")}
          error={errors.role?.message}
          label="I am"
          placeholder="Select your role"
          labelClassName="text-blue70 text-[13px] mb-2"
          inputClassName="rounded-xl"
          fullWidth
        />
        <GenericInput
          {...register("subject")}
          error={errors.subject?.message}
          label="Subject"
          placeholder="How can we help you?"
          labelClassName="text-blue70 text-[13px] mb-2"
          inputClassName="rounded-xl"
          fullWidth
        />
        <GenericInput
          {...register("message")}
          error={errors.message?.message}
          label="Message"
          type="textarea"
          placeholder="Tell us more about your enquiry..."
          labelClassName="text-blue70 text-[13px] mb-2"
          inputClassName="rounded-xl"
          fullWidth
        />



        <GenericButton
          title={isSubmitting ? "Sending..." : "Send Message"}
          disabled={isSubmitting}
          type="submit"
          icon={<RightArrow />}
          iconPosition={"right"}
          className="button-shadow mt-4"
          fullWidth
        />
        <div className="flex mt-4 justify-center">
          <p className="text-blue46 text-xs leading-[160%] text-center">
            By submitting this form, you agree to our{" "}
            <Link href="#" className="text-blue85 underline text-xs">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
