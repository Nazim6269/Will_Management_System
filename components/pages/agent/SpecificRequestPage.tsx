'use client'

import { ClientCard } from "../../molecules/agent/willform";
import {
  BequestCardsPanel,
  BequestSummaryCard,
  BequestActions,
  AgentTip,
  PremiumOnlyCard,
  RequestHeader,
  BequestForm,
} from "../../molecules/agent/specific-request";

const SpecificRequestPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <RequestHeader />
        <BequestCardsPanel />
        <BequestForm />
        <BequestActions />
      </div>
      <div className="flex flex-col gap-4 w-full lg:max-w-75 shrink-0">
        <ClientCard />
        <BequestSummaryCard />
        <PremiumOnlyCard />
        <AgentTip />
      </div>
    </div>
  );
};

export default SpecificRequestPage;
