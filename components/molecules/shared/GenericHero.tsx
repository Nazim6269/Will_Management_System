import Container from "@/components/templates/Container";
import React from "react";
import GreenDotWithText from "../marketing/home/GreenDotWithText";
import GenericButton from "@/components/atoms/GenericButton";
import { RightArrow } from "@/components/atoms/icons";
import Statistics from "../marketing/home/Statistics";

interface GenericHeroProps {
  text: string;
  title?: string;
  subtitle?: string;
  description?: string;
  isHome?: boolean;
}

const GenericHero = ({
  text,
  title,
  subtitle,
  description,
  isHome,
}: GenericHeroProps) => {
  return (
    <div className="bg-hero bg-cover bg-center bg-no-repeat ">
      <Container>
        <div className="w-full max-w-204 mx-auto pt-10 md:pt-16 pb-16 md:pb-24">
          <div className="flex justify-center">
            <GreenDotWithText text={text} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-gray96 text-center font-bold text-4xl sm:text-6xl md:text-[5.75rem] leading-[1.1] md:leading-[124%] tracking-[-0.05rem] md:tracking-[-0.219rem] mt-6 md:mt-[1.28rem]">
              {title}
            </h2>
            <h2 className="gradient-text-one text-center font-bold text-4xl sm:text-6xl md:text-[5.75rem] leading-[1.1] md:leading-[124%] tracking-[-0.05rem] md:tracking-[-0.219rem]">
              {subtitle}
            </h2>
            <p className="text-blue70 text-center text-base md:text-[1.188rem] font-normal leading-[1.5] md:leading-[158%] tracking-[-0.015rem] w-full max-w-[36.573rem] mt-5 md:mt-[1.769rem]">
              {description}
            </p>
            {isHome && (
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3.5 mt-8 md:mt-[3.023rem] mb-10 md:mb-14.5">
                <GenericButton
                  icon={<RightArrow />}
                  iconPosition={"right"}
                  radius={"pill"}
                  className="button-shadow w-full sm:w-auto"
                >
                  Client Portal
                </GenericButton>
                <GenericButton
                  variant="glass"
                  radius={"pill"}
                  className="w-full sm:w-auto"
                >
                  How it works
                </GenericButton>
              </div>
            )}
            {isHome && <Statistics section="statistics" />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GenericHero;
