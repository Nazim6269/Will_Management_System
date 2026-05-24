import GenericButton from "@/components/atoms/GenericButton";
import { RightArrow } from "@/components/atoms/icons";
import React from "react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
}

const PricingCard = ({
  name,
  price,
  description,
  features,
}: PricingCardProps) => {
  return (
    <div className="bg-blue16 rounded-3xl border border-borderColor/18 p-4 hover:border-blue66 hover:shadow-lg hover:shadow-blue66/20 transition-all duration-500">
      <span className="text-blue70 text-lg font-bold  leading-[160%] flex justify-center mb-3">
        {name}
      </span>
      <div className="flex flex-col items-center gap-y-2.5">
        {" "}
        <div className="flex justify-center items-end">
          <span className="text-gray96 font-libreBaskerville text-[52px] font-bold leading-[100%]">
            {price}
          </span>
          <span className="text-blue46 font-plusJakartaSans text-xl font-medium leading-[20px]">
            /will
          </span>
        </div>
        <p className="text-blue46 text-[13px] font-semibold leading-[160%]">
          {description}
        </p>
      </div>
      <ul className="flex flex-col gap-y-3 mt-8 mb-10">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-blue70 font-semibold leading-[160%] text-[13px] space-y-3"
          >
            <span className="text-cyan64 font-plusJakartaSans font-bold leading-[160%]">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <GenericButton
        icon={<RightArrow />}
        iconPosition={"right"}
        variant={"primary"}
        className="button-shadow"
        fullWidth
        radius={"pill"}
      >
        Get started
      </GenericButton>
    </div>
  );
};

export default PricingCard;
