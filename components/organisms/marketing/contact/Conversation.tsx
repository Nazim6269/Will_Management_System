import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
import Container from "@/components/templates/Container";
import { contactData } from "@/constants/contactData";
import ContactCard from "@/components/molecules/marketing/contact/ContactCard";
import ContactForm from "@/components/molecules/marketing/contact/ContactForm";

const Conversation = () => {
  return (
    <Container className="py-10 sm:py-20  grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10">
      <div>
        {" "}
        <div>
          <GenericSectionHeading
            text="Contact information"
            title="Let's start a
conversation"
          />
          <p className="text-blue70 text-[1.063rem] leading-[175%] max-w-120 mt-5 text-center sm:text-start">
            Our team of estate planning specialists are available to answer your
            questions and guide you through every step of the process.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 ">
          {contactData.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="bg-blue16 border border-borderColor/18 py-4 sm:py-13 px-4 sm:px-11 rounded-[1.75rem]">
        <ContactForm />
      </div>
    </Container>
  );
};

export default Conversation;
