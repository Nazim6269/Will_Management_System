import React from "react";
import GenericHero from "@/components/molecules/shared/GenericHero";
import Conversation from "../../organisms/marketing/contact/Conversation";
import FrequentlyAsked from "../../organisms/marketing/contact/FrequentlyAsked";
import { ServicesSection } from "../../organisms/marketing/home";

const ContactPage = () => {
  return (
    <div>
      <GenericHero
        text="Get in touch"
        title="We're here to "
        subtitle="help you"
        description="Inherix was built on a simple belief - protecting your family's future should not be complicated, expensive, or stressful."
      />
      <div className="section-bg-one">
        <Conversation />
      </div>
      <div className="bg-blue10 border-y border-borderColor/18">
        <FrequentlyAsked />
      </div>
      <ServicesSection />
    </div>
  );
};

export default ContactPage;
