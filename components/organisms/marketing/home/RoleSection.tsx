import React from "react";
import Container from "@/components/templates/Container";
import RoleCard from "@/components/molecules/marketing/home/RoleCard";
import { roleData } from "@/constants/roleData";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";

const RoleSection = () => {
  return (
    <Container className="py-8 sm:py-20">
      <div className="flex flex-col justify-center items-center">
        <GenericSectionHeading
          text="Access your portal"
          title="Choose your role"
          initialTextCenter
        />
        <p className="text-textBlue max-w-118 text-center ">
          Inherix serves both clients and will writers with dedicated,
          purpose-built portals.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
        {roleData?.map((role, index) => (
          <RoleCard key={index} {...role} />
        ))}
      </div>
    </Container>
  );
};

export default RoleSection;
