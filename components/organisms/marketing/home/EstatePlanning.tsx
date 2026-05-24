import React from "react";
import Container from "@/components/templates/Container";
import { estateData } from "@/constants/estateData";
import GenericSectionHeading from "@/components/molecules/shared/GenericSectionHeading";
import EstatePlanCard from "@/components/molecules/marketing/home/EstatePlanCard";

const EstatePlanning = () => {
  return (
    <Container className="mt-0 md:mt-[5.031rem] mb-5 sm:mb-[70px]">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end space-y-[1.065rem]">
        <GenericSectionHeading
          text="What we offer"
          title="Estate planning, made effortless"
        />

        <p className="text-textBlue max-w-118 text-start xl:text-end">
          Everything you need to protect your assets and secure your family's
          future - all in one platform.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
  border border-borderColor/25 rounded-2xl overflow-hidden
  divide-y md:divide-y lg:divide-y-0
  md:divide-x divide-borderColor/25 mt-12
"
      >
        {estateData?.map((data) => (
          <EstatePlanCard key={data.id} {...data} />
        ))}
      </div>
    </Container>
  );
};

export default EstatePlanning;
