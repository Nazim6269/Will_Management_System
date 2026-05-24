import Statistics from "@/components/molecules/marketing/home/Statistics";
import GenericAboveFooterSection from "@/components/molecules/shared/GenericAboveFooterSection";
import GenericHero from "@/components/molecules/shared/GenericHero";
import {
  EstatePlanning,
  LegacySection,
  RoleSection,
  ServicesSection,
} from "@/components/organisms/marketing/home";
import Container from "@/components/templates/Container";

const LandingPage = () => {
  return (
    <>
      <GenericHero
        text="Trusted Will Writing Platform"
        title="Secure your family's"
        subtitle="future today"
        description="Professional will writing and estate planning — beautifully simple, completely secure. Your legacy in expert hands."
        isHome
      />
      <EstatePlanning />
      <div className="bg-blue10">
        <LegacySection />
      </div>
      <RoleSection />
      <div className="bg-blue10">
        <Container className="py-4 md:py-10 lg:py-20 flex justify-center items-center">
          <Statistics section="statistics" />
        </Container>
      </div>
      <ServicesSection />
      <div className="bg-blue10 bg-legacy bg-cover bg-center bg-no-repeat">
        <GenericAboveFooterSection
          title="Your legacy starts here."
          description="Join thousands who trust Inherix to protect their family's future. Simple, secure, professional."
        />
      </div>
    </>
  );
};

export default LandingPage;
