import ServicesPage from "@/components/pages/marketing/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Teojunping",
  description: "Services | Teojunping",
};
const ServicePage = () => {
  return (
    <>
      <ServicesPage />
    </>
  );
};

export default ServicePage;
