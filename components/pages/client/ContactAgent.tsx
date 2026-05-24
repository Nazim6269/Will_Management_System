import Availability from "@/components/organisms/dashboard/client/contact-agent/Availability";
import ContactOptions from "@/components/organisms/dashboard/client/contact-agent/ContactOptions";
import MessagingInterface from "@/components/organisms/dashboard/client/contact-agent/MessagingInterface";
import ProfileCard from "@/components/organisms/dashboard/client/contact-agent/Profile";
import QuickLinks from "@/components/organisms/dashboard/client/contact-agent/QuickLinks";

const ContactAgent = () => {
  return (
    <div className="">
      <ProfileCard />

      <div className="grid lg:grid-cols-12 gap-6 mt-6">
        <div className="lg:col-span-8">
          <ProfileCard />
          <MessagingInterface />
        </div>
        <div className="lg:col-span-4 ">
          <Availability />
          <ContactOptions />
          <QuickLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactAgent;
