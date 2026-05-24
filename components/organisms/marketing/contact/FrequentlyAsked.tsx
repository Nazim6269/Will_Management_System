import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
import Container from "@/components/templates/Container";
import { AccordionBasic } from "@/components/molecules/shared/Accordion";

const FrequentlyAsked = () => {
  return (
    <Container className="py-10 sm:py-20">
      <div className="flex flex-col justify-center items-center mb-6 sm:mb-12">
        <GenericSectionHeading
          text="FAQs"
          title="Frequently asked questions"
          initialTextCenter
        />
        <p className=" text-blue70 text-[1.063rem] leading-[175%] max-w-120 mt-5 text-center ">
          Quick answers to the most common questions about Inherix and our
          services.
        </p>
      </div>

      <AccordionBasic />
    </Container>
  );
};

export default FrequentlyAsked;
