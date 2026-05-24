import React from "react";
import Container from "@/components/templates/Container";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
import { journeyData } from "@/constants/journeyData";
import JourneyCard from "@/components/molecules/marketing/services/JourneyCard";

const JourneySection = () => {
  return (
    <Container className="py-10 sm:py-20">
      <GenericSectionHeading
        text="Core services"
        title="Built for every step of your estate journey"
      />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-8">
        {journeyData?.map((item,index)=> (
          <JourneyCard key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default JourneySection;
