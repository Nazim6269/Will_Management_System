import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export interface FaqItem {
  id: string;
  question: string;
  answer?: string;
}

export interface FaqSection {
  key: string;
  label: string;
  items: FaqItem[];
}

interface FaqSectionBlockProps {
  section: FaqSection;
  defaultOpenId?: string;
}

export function FaqSectionBlock({
  section,
  defaultOpenId,
}: FaqSectionBlockProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="b-1.5 text-base font-bold uppercase tracking-[2px] text-blue75">
          {section.label}
        </h2>
      </div>

      <div className=" space-y-2">
        {section.items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId((prev) => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </section>
  );
}
