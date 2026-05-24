import React from "react";
import CardBadge from "@/components/molecules/shared/CardBadge";
import Image from "next/image";

interface JourneyCardProps {
  title: string;
  description: string;
  features: string[];
  badgeText: string;
  img: string;
}
const JourneyCard = ({
  title,
  description,
  features,
  badgeText,
  img,
}: JourneyCardProps) => {
  return (
    <div
      className="
    group
    px-4 sm:px-[45px] py-4 sm:py-[53px]
    rounded-xl border border-borderColor/10 bg-blue16
    transform-gpu
    transition-all duration-300 ease-in-out
    will-change-transform
    shadow-lg
    hover: card-box-shadow
    hover:border-borderColor/30
    hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
    hover:-translate-y-1
    hover:scale-[1.015]
  "
    >
      <Image src={img} alt="will" height={46} width={46} className="mb-8" />
      <h4 className="text-gray96 text-2xl font-bold leading-[160%] mb-3">
        {title}
      </h4>
      <p className="service-desc-text mb-10">{description}</p>
      <ul className="space-y-2.5 mb-7">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 service-desc-text">
            <span className="">
              →
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <CardBadge text={badgeText} />
    </div>
  );
};

export default JourneyCard;
