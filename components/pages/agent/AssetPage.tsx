import React from "react";
import AssetWarning from "../../molecules/agent/assets/AssetWarning";
import { ClientCard } from "../../molecules/agent/willform";
import AssetSummaryCard from "../../molecules/agent/assets/AssetSummary";
import RealEstatePropertyForm from "../../molecules/agent/assets/RealEstatePropertyForm";
import AssetSteps from "../../molecules/agent/assets/AssetSteps";
import AssetActions from "../../molecules/agent/assets/AssetActions";
import ImportantNote from "../../molecules/agent/assets/ImportantNote";

const AssetPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <AssetWarning />
        <AssetSteps />
        <RealEstatePropertyForm />
        <AssetActions />
      </div>
      <div className="flex flex-col gap-4 w-full lg:max-w-75 shrink-0">
        <ClientCard />
        <AssetSummaryCard />
        <ImportantNote />
      </div>
    </div>
  );
};

export default AssetPage;
