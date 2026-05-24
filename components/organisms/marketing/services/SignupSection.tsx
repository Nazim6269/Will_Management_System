import Container from "@/components/templates/Container";
import React from "react";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
import { signupData } from "@/constants/signupdata";
import LegacyCard from "@/components/molecules/marketing/home/LegacyCard";
import AgentPortal from "@/components/molecules/marketing/services/AgentPortal";

const SignupSection = () => {
  return (
    <Container className="py-14 md:py-20">
      <div>
        <GenericSectionHeading
          text="How it works"
          title="From sign-up to
secured will - fast"
        />
        

        <div className="flex flex-col lg:flex-row gap-y-5 md:gap-25">
          <div className="divide-y divide-borderColor/25 rounded-2xl flex-1">
            {signupData?.map((data) => (
              <LegacyCard key={data.id} {...data} />
            ))}
          </div>
          <AgentPortal />
        </div>
      </div>
    </Container>
  );
};

export default SignupSection;
