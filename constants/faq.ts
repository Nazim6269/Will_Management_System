import { FaqSection } from "@/components/organisms/dashboard/client/help-faq/FaqSectionBlock";
import { TabItem } from "@/components/organisms/dashboard/client/help-faq/FaqTabs";

export const FAQ_SECTIONS: FaqSection[] = [
  {
    key: "will",
    label: "Will Document",
    items: [
      {
        id: "will-download",
        question: "How do I view and download my will document?",
        answer:
          "You can view your will document by clicking **My Will** in the left sidebar. Your will is displayed directly in the portal as a formatted document. To download it as a PDF, click the **Download PDF** button at the top right of the will viewer.",
      },
      {
        id: "will-update",
        question:
          "Can I request changes to my will after it has been completed?",
      },
      {
        id: "will-legal",
        question: "Is my will legally valid?",
      },
      {
        id: "will-storage",
        question: "Where is my will stored after it is generated?",
      },
    ],
  },
  {
    key: "invoices",
    label: "Invoices & Payments",
    items: [
      {
        id: "invoice-pay",
        question: "How do I pay my invoice?",
      },
      {
        id: "invoice-methods",
        question: "What payment methods are accepted?",
      },
      {
        id: "invoice-receipt",
        question: "Can I get a receipt for my payment?",
      },
    ],
  },
  {
    key: "appointments",
    label: "Appointments",
    items: [
      {
        id: "appointment-book",
        question: "How do I book an appointment with my will writer?",
      },
      {
        id: "appointment-cancel",
        question: "How do I cancel an appointment?",
      },
    ],
  },
];

export const FAQ_TABS: TabItem[] = [
  { key: "all", label: "All" },
  { key: "will", label: "Will Document" },
  { key: "invoices", label: "Invoices" },
  { key: "appointments", label: "Appointments" },
];