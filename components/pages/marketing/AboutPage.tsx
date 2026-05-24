import React from "react";
import GenericHero from "../../molecules/shared/GenericHero";
import Platform from "../../organisms/marketing/about/Platform";
import Mission from "../../organisms/marketing/about/Mission";
import StandFor from "../../organisms/marketing/about/StandFor";
import Container from "../../templates/Container";
import Statistics from "../../molecules/marketing/home/Statistics";
import GenericAboveFooterSection from "../../molecules/shared/GenericAboveFooterSection";

const AboutPage = () => {
  return (
    <>
      <GenericHero
        text="Our story"
        title="We exist to 
make estate planning"
        subtitle="simple & accessible"
        description="Inherix was built on a simple belief — protecting your family's future should not be complicated, expensive, or stressful."
      />
      <div className="section-bg-one">
        <Platform />
      </div>
      <Mission />
      <StandFor />
      <div className="bg-blue10">
        <Container className="py-4 md:py-10 lg:py-20 flex justify-center items-center">
          <Statistics section="statistics" />
        </Container>
      </div>
      <div className="bg-blue10 bg-legacy bg-cover bg-center bg-no-repeat">
        <GenericAboveFooterSection
          title="Join thousands who trust Inherix."
          description="Start protecting your family's future today with professional will writing and estate planning."
        />
      </div>
    </>
  );
};

export default AboutPage;
