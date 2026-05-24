import {
  Bequest,
  DebtsIcon,
  Financial,
  PropertyIcon,
  Valuables,
  Vehicle,
} from "@/components/atoms/icons";
import { cn } from "@/lib/utils";
import React from "react";

const assetSteps = [
  { id: 1, icon: PropertyIcon, label: "Property" },

  {
    id: 2,
    icon: Financial,
    label: "Financial",
  },
  {
    id: 3,
    icon: Vehicle,
    label: "Vehicle",
  },
  {
    id: 4,
    icon: Valuables,
    label: "Valuables",
  },
  {
    id: 5,
    icon: DebtsIcon,
    label: "Debts",
  },
  {
    id: 6,
    icon: Bequest,
    label: "Bequests",
  },
];

const AssetSteps = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-borderColor/18 bg-blue14 rounded-xl overflow-hidden my-5">
      {assetSteps.map((step) => {
        const lastItem = assetSteps.length === step.id;
        return (
          <div
            key={step.id}
            className={cn(
              "flex flex-col justify-center items-center py-3 px-2 border-r border-borderColor/18 last:border-none space-y-1.5",
              lastItem ? "bg-orange245/12" : "",
            )}
          >
            <step.icon />
            <p
              className={` ${
                lastItem ? "text-orange50 " : "text-cyan4A7A74"
              } text-xs   font-semibold `}
            >
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AssetSteps;
