import React from "react";
import GenericHero from "../../molecules/shared/GenericHero";
import {
  JourneySection,
  PricingSection,
} from "../../organisms/marketing/services";
import SignupSection from "../../organisms/marketing/services/SignupSection";
import GenericAboveFooterSection from "../../molecules/shared/GenericAboveFooterSection";

const ServicesPage = () => {
  return (
    <div>
      <GenericHero
        text="What we offer"
        title="Everything you need to protect"
        subtitle="your legacy"
        description="From professional will writing to secure vault storage - Inherix provides end-to-end estate planning services for individuals and families."
      />
      <JourneySection />
      <div className="bg-blue10 border-t border-b border-borderColor/18">
        <PricingSection />
      </div>
      <SignupSection />
      <div className="bg-blue10 bg-legacy bg-cover bg-center bg-no-repeat">
        <GenericAboveFooterSection
          title="Ready to secure your legacy?"
          description="Get started with Inherix today. Our certified will writers are ready to help you protect what matters most."
        />
      </div>
    </div>
  );
};

export default ServicesPage;
