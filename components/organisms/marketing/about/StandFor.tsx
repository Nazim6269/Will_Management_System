import StandCard from "@/components/molecules/marketing/about/StandCard";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
import Container from "@/components/templates/Container";
import { standData } from "@/constants/standData";

const StandFor = () => {
  return (
    <Container className="py-10 sm:py-16 md:py-20">
      <GenericSectionHeading text="Our values" title="What we stand for" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {standData?.map((d, i) => (
          <StandCard key={i} title={d.title} desc={d.desc} img={d.img} />
        ))}
      </div>
    </Container>
  );
};

export default StandFor;
