import Container from "@/components/templates/Container";
import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <Container className="mt-0 md:mt-[5.031rem] mb-5 sm:mb-[70px]">
      <div className="relative overflow-hidden flex flex-col  items-center justify-center md:flex-row gap-4.5  border border-borderColor/18 bg-blue16 rounded-[28px]">
        {/* Glow layer */}
        <div className="circular-glow" />

        {/* Content (above glow) */}
        <div className="relative z-10 max-w-full md:max-w-[34.4rem] p-6 md:p-16">
          <span className="text-xs font-plusJakartaSans font-bold leading-[160%] uppercase text-blue75 tracking-[3px] mb-4.5 block">
            Our mission
          </span>

          <p className="text-gray96 font-libreBaskerville text-[20px] lg:text-[32px] font-bold leading-[140%] tracking-[-2px]">
            To make will writing and estate planning accessible to everyone -
            with professional care, digital simplicity, and absolute security.
          </p>
        </div>

        <div className="mr-15">
          <Image
            src={"/OBJECTS.png"}
            alt={"objects"}
            width={410}
            height={395}
            className="relative z-10 "
        /></div>
      </div>
    </Container>
  );
};

export default Mission;
