import { useState } from "react";
import { FaqItem } from "./FaqSectionBlock";
import { ChevronDown } from "lucide-react";
import { HelpfulButton } from "./HelpfulButton";
import { renderFormattedText } from "@/components/utils/renderText";

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  const [helpful, setHelpful] = useState<"yes" | "no" | null>(null);

  return (
    <div className="border rounded-2xl border-borderColor/18 bg-blue14 ">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
      >
        <span className="text-sm font-semibold leading-6 text-blueF0">
          {item.question}
        </span>

        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-blue46 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && item.answer && (
        <div className="px-4 pb-5 sm:px-5">
          <p className="text-sm leading-7 text-blue70">
            {renderFormattedText(item.answer)}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-borderColor/18 pt-4">
            <span className="text-xs text-blue46">Was this helpful?</span>

            <HelpfulButton
              type="yes"
              active={helpful === "yes"}
              onClick={() => setHelpful("yes")}
            />

            <HelpfulButton
              type="no"
              active={helpful === "no"}
              onClick={() => setHelpful("no")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
