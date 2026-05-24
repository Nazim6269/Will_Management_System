import React from "react";
import {
  EncryptionIcon,
  CertifiedIcon,
  PdfIcon,
  PaymentIcon,
} from "../../../atoms/icons";
import Container from "../../../templates/Container";
const servicesData = [
  {
    icon: EncryptionIcon,
    title: "256-bit Encryption",
    desc: "Bank-grade document security",
  },
  {
    icon: CertifiedIcon,
    title: "Certified writers",
    desc: "Professionally verified",
  },
  {
    icon: PdfIcon,
    title: "Instant PDF",
    desc: "Auto-generated wills",
  },
  {
    icon: PaymentIcon,
    title: "Secure payments",
    desc: "Encrypted & protected",
  },
];

const ServicesSection = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 py-10 md:py-14 lg:py-20">
      {servicesData.map((service, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-start gap-3.5 border border-transparent hover:border hover:border-borderColor hover:shadow p-2 rounded-[14px] transition-all duration-300 ease-in-out "
          >
            <span className="w-12.5 h-12.5 p-1.5 rounded-[14px] bg-borderColor/15 border border-borderColor/18 flex justify-center items-center">
              {" "}
              <service.icon />
            </span>
            <div className="space-y-0.5">
              <h3 className="text-lg  text-gray96 font-bold">
                {service.title}
              </h3>
              <p className="text-xs leading-6 font-light text-blue46">
                {service.desc}
              </p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default ServicesSection;
