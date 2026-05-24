"use client";

import { FAQ_SECTIONS, FAQ_TABS } from "@/constants/faq";
import { Suspense, useMemo } from "react";
import { FaqTabs } from "./FaqTabs";
import { FaqSectionBlock } from "./FaqSectionBlock";
import { useTabState } from "@/hooks";
import { Tabs } from "./tab/Tabs";

export default function FaqPage() {
  const { activeTab, setActiveTab } = useTabState({
    defaultTab: "all",
    validTabs: FAQ_TABS.map((tab) => tab.key),
  });

  const visibleSections = useMemo(() => {
    if (activeTab === "all") {
      return FAQ_SECTIONS;
    }

    return FAQ_SECTIONS.filter((section) => section.key === activeTab);
  }, [activeTab]);

  return (
    <div className="w-full mt-6">
      <Tabs.Root value={activeTab} onChange={setActiveTab}>
        <FaqTabs
          tabs={FAQ_TABS}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="space-y-6">
          {visibleSections.map((section, index) => (
            <FaqSectionBlock
              key={section.key}
              section={section}
              defaultOpenId={index === 0 ? section.items[0]?.id : undefined}
            />
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
}
