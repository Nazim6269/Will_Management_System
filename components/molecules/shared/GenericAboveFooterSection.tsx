import React from "react";
import Container from "@/components/templates/Container";
import GenericButton from "@/components/atoms/GenericButton";
import { RightArrow } from "@/components/atoms/icons";

const GenericAboveFooterSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Container className="py-10 sm:py-20 border-y border-borderColor/18">
      <h2 className="gradient-text-two text-4xl max-w-xl mx-auto md:text-6xl font-libreBaskerville font-bold leading-[125%] tracking-[-0.025rem] text-center">
        {title}
      </h2>
      <p className="text-blue70 text-lg leading-[30px] mt-4 mb-8 text-center">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3.5">
        <GenericButton
          radius={"pill"}
          icon={<RightArrow />}
          iconPosition="right"
          className="w-full sm:w-auto button-shadow"
        >
          Get started today
        </GenericButton>
        <GenericButton
          variant="glass"
          radius={"pill"}
          className="w-full sm:w-auto"
        >
          Login to portal
        </GenericButton>
      </div>
    </Container>
  );
};

export default GenericAboveFooterSection;
