"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import GenericButton from "@/components/atoms/GenericButton";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { GenericInput } from "../shared/GenericInput";
import { Email2, RightArrow } from "@/components/atoms/icons";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email Address is required")
    .email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") as "agent" | "client";

  const handleLogin = (role: "agent" | "admin" | "client") => {
    if (!role) return;
    if (role === "agent") {
      setLoading(true);
      router.push("/dashboard/agent");
    } else if (role === "client") {
      setLoading(true);
      router.push("/dashboard/client");
    } else {
      setLoading(true);
      router.push("/dashboard/admin");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <GenericInput
          {...register("email")}
          error={errors.email?.message}
          prefix={<Email2 />}
          label="Agent ID/Email"
          placeholder="Agent ID/Email"
          labelClassName="text-cyan65 text-[13px] mb-2 font-bold"
          inputClassName="rounded-xl "
          fullWidth
        />
        <GenericInput
          {...register("password")}
          error={errors.password?.message}
          label="Password"
          type="password"
          placeholder="Password"
          labelClassName="text-cyan65 text-[13px] mb-2 font-bold"
          inputClassName="rounded-xl flex-1 "
          fullWidth
        />

        <div className="flex items-center justify-between gap-2 mt-4.5">
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="rememberMe" className="text-cyan4A7A74 text-sm ">
              Keep me signed in
            </label>
          </div>
          <label
            htmlFor="rememberMe"
            className="text-cyan9EF5E8 text-[13px] mb-2 underline cursor-pointer font-bold"
          >
            Forgot password?
          </label>
        </div>

        <GenericButton
          title={isSubmitting ? "Sending..." : "Sign in to workspace"}
          disabled={isSubmitting}
          radius={"pill"}
          type="submit"
          icon={<RightArrow />}
          iconPosition={"right"}
          className="button-shadow mt-4"
          fullWidth
          onClick={() => handleLogin(role || "client")}
        />
        <div className="flex flex-col items-center justify-center  mt-4 bg-borderColor/6 border border-borderColor/15 py-4.5 rounded-xl w-full">
          <p className="text-cyan4A7A74 text-sm leading-5  text-center">
            Are you a{" "}
            <span className="text-violet85 font-bold text-sm leading-4.5">
              {" "}
              {role}
            </span>
            ?
          </p>
          <Link
            href={`/login?role=${role === "agent" ? "client" : "agent"}`}
            className="text-violet85 text-sm leading-4 font-bold"
          >
            Login to the {role === "agent" ? "client" : "agent"} portal →
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
