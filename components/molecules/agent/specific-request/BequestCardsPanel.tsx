import {
  DescribeIcon,
  LinkBenificiaryIcon,
  UploadImageIcon,
} from "@/components/atoms/icons";
import React from "react";

const bequestData = [
  {
    id: 1,
    icon: DescribeIcon,
    name: "Describe the Item",
    description:
      "Enter the item name, category, description, and estimated value. 1",
  },
  {
    id: 2,
    icon: UploadImageIcon,
    name: "Upload an Image",
    description:
      "Optionally upload a photo recommended for jewellery, art, or valuables not easily identified by description.",
  },
  {
    id: 3,
    icon: LinkBenificiaryIcon,
    name: "Link a Beneficiary",
    description:
      "Select or enter the beneficiary who should receive this specific item, with their contact details.",
  },
];

const BequestCardsPanel = () => {
  return (
    <div className="grid grid-cols-12 gap-3.5 my-6">
      {bequestData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center col-span-12 md:col-span-4 bg-blue14 border border-borderColor/18 py-5 px-5.5 rounded-[.875rem]"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange245/12 border border-orange245/18 text-orange245 mb-6">
            {item.id}
          </div>
          <item.icon />
          <p className="text-blueF0 text-base font-bold leading-[140%] mt-3 mb-1">
            {item.name}
          </p>
          <p className="text-blue46 text-sm leading-[140%] text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BequestCardsPanel;
