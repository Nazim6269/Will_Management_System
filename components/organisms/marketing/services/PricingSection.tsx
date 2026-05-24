import Container from "@/components/templates/Container";
import { pricingData } from "@/constants/pricingData";
import PricingCard from "@/components/molecules/marketing/services/PricingCard";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";

const PricingSection = () => {
  return (
    <Container className="py-10 md:py-20">
      <GenericSectionHeading
        text="Pricing"
        title="Simple, transparent pricing"
        initialTextCenter
      />
      <p className="service-desc-text text-center mt-5">
        No hidden fees. No surprises. Pay only for what you need.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        {pricingData.map((item) => (
          <PricingCard
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.description}
            features={item.features}
          />
        ))}
      </div>
    </Container>
  );
};

export default PricingSection;
