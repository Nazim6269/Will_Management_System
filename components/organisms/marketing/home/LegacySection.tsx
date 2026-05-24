import Container from "@/components/templates/Container";
import { legacyData } from "@/constants/legacyData";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
import LegacyCard from "@/components/molecules/marketing/home/LegacyCard";
import ClientPortal from "@/components/molecules/marketing/home/ClientPortal";

const LegacySection = () => {
  return (
    <Container className="py-14 md:py-20">
      <div>
        <GenericSectionHeading
          text="What we offer"
          title="Four steps to protect your legacy"
        />
        {/* <div className="">
          <p className="secton-heading-small-text text-center md:text-left">
            What we offer
          </p>
          <h2 className="section-heading-text text-center md:text-left max-w-120 my-[17px]">
            Four steps to protect your legacy{" "}
          </h2>
        </div> */}

        <div className="flex flex-col lg:flex-row gap-y-5 md:gap-25">
          <div className="divide-y divide-borderColor/25 rounded-2xl flex-1">
            {legacyData?.map((data) => (
              <LegacyCard key={data.id} {...data} />
            ))}
          </div>
          <ClientPortal />
        </div>
      </div>
    </Container>
  );
};

export default LegacySection;
