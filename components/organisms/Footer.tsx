import FooterBrand from "../molecules/marketing/home/FooterBrand";
import FooterSection from "../molecules/marketing/home/FooterSection";
import Container from "../templates/Container";
import { footerData } from "@/constants/footerData";

const Footer = () => {
  return (
    <footer className="bg-[#0B0820] text-white">
      <Container className="pt-12 sm:pt-16 lg:pt-20 pb-6">
        {/* Top Section */}
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <FooterBrand
            name={footerData?.brand?.name}
            description={footerData?.brand?.description}
          />

          {/* Sections */}
          {footerData.sections.map((section: any, index: number) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-blue46">
          © 2026 Inherix Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
