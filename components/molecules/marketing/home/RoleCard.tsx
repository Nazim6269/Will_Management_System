"use client";

import React from "react";
import GenericButton from "../../../atoms/GenericButton";
import { RightArrow, User } from "@/components/atoms/icons";
import { useRouter } from "next/navigation";

interface RoleCardProps {
  label: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

const RoleCard = ({
  label,
  title,
  description,
  features,
  buttonText,
}: RoleCardProps) => {
  const isClient = buttonText.toLowerCase().includes("client");
  const router = useRouter();
  return (
    <div
      className={
        isClient
          ? "role-violet-card-gradient p-4 sm:p-8"
          : "role-cyan-card-gradient p-4 sm:p-8"
      }
    >
      <div
        className={`border border-borderColor/30  px-4.5 py-1.5 rounded-full flex justify-center items-center gap-2 w-fit  ${
          isClient ? "bg-borderColor/15" : "linear-gradient-cyan"
        }`}
      >
        <User className={isClient ? "text-violet85" : "text-[#5EE8D0]"} />{" "}
        <span
          className={`text-xs font-bold leading-[19.2px] uppercase tracking-[1px] ${
            isClient ? "text-violet85" : "text-[#5EE8D0]"
          }`}
        >
          {label}
        </span>
      </div>
      <div>
        {" "}
        <h2 className="text-gray96 font-libreBaskerville text-lg lg:text-lg xl:text-xl 2xl:text-[32px] font-bold leding-[48px] tracking-[-1px] sm:mt-8 mt-4 mb-[13px]">
          {title}
        </h2>
        <p className="text-blue70 font-plusJakartaSans text-[15px] leading-[26.25px ]">
          {description}
        </p>
      </div>
      <ul className="space-y-[13.4px] mt-9 mb-11">
        {features.map((feature, index) => (
          <div className="flex gap-3 items-center " key={index}>
            {" "}
            <span
              className={`w-[22px] h-[22px] rounded-full px-[2.29px] py-[1.71px] flex justify-center items-center ${isClient ? "bg-borderColor/15" : "bg-cyan64/12 border-none"} font-plusJakartaSans text-xs font-bold leading-[17.6px] ${isClient ? "text-violet85" : "text-cyan64"}`}
            >
              ✓
            </span>
            <li className="text-blue70 font-plusJakartaSans text-sm leading-[22.4px]">
              {feature}
            </li>
          </div>
        ))}
      </ul>

      <GenericButton
        variant={isClient ? "primary" : "cyan"}
        radius="pill"
        icon={<RightArrow />}
        className={`${isClient ? "button-shadow" : "button-shadow-cyan"} w-full sm:w-auto`}
        iconPosition={"right"}
        onClick={() => router.push("/login")}
      >
        {buttonText}
      </GenericButton>
    </div>
  );
};

export default RoleCard;
