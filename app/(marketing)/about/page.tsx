import AboutPage from "@/components/pages/marketing/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Teojunping",
  description: "About Us | Teojunping",
};
const About = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default About;
