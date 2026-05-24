import FaqPage from "@/components/organisms/dashboard/client/help-faq/FaqContent";
import HowCanIHelp from "@/components/organisms/dashboard/client/help-faq/HowCanIHelp";
import MostAsked from "@/components/organisms/dashboard/client/help-faq/MostAsked";
import QuickGuides from "@/components/organisms/dashboard/client/help-faq/QuickGuides";
import StillNeedHelp from "@/components/organisms/dashboard/client/help-faq/StillNeedHelp";
import React, { Suspense } from "react";

const HelpAndFaq = () => {
  return (
    <div className="grid  lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        {" "}
        <HowCanIHelp />
        <Suspense fallback={<>Loading...</>}>
          <FaqPage />
        </Suspense>
        <StillNeedHelp />
      </div>
      <div className="lg:col-span-4">
        <MostAsked />
        <QuickGuides />
      </div>
    </div>
  );
};

export default HelpAndFaq;
