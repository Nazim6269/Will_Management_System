import { Tabs } from "./tab/Tabs";

export interface TabItem {
  key: string;
  label: string;
}

interface FaqTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (key: string) => void;
}

export function FaqTabs({ tabs, activeTab, onChange }: FaqTabsProps) {
  return (
    <Tabs.List className="mb-6 flex flex-wrap gap-2" label="FAQ Categories">
      {tabs.map((tab) => (
        <Tabs.Trigger
          key={tab.key}
          value={tab.key}
          render={({ isActive, ...props }) => (
            <button
              {...props}
              type="button"
              className={`rounded-full border px-6 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer
                ${
                  isActive
                    ? "border-borderColor/60 bg-borderColor/15 text-blue46"
                    : "border-borderColor/32 text-blue46 hover:border-blue66/40 hover:text-blue70"
                }`}
            >
              {tab.label}
            </button>
          )}
        />
      ))}
    </Tabs.List>
  );
}
