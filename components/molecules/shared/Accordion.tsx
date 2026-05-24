import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "How do I get started with Inherix?",
    content:
      "Getting started is simple. Create an account, complete your profile, and our AI will guide you through the probate process step by step. You can also upload documents for instant review.",
  },
  {
    value: "item-2",
    trigger: "Can I create my own account on Inherix?",
    content:
      "Yes, absolutely. Inherix is designed for executors, administrators, and families who need to navigate probate. You can create your own account, securely upload and store documents, and manage cases at your own pace.",
  },
  {
    value: "item-3",
    trigger: "How long does it take to prepare my will?",
    content:
      "Our AI-powered will preparation typically takes 15-30 minutes. Once complete, you can download and print your will immediately.",
  },
    {
    value: "item-4",
    trigger: "Is my information kept secure?",
    content:
      "Security is our top priority. We use enterprise-grade encryption to protect your personal and financial information. All data is stored in compliance with industry regulations, and we never share your information without your consent.",
  },
    {
    value: "item-5",
    trigger: "Can I update my will after it's been created?",
    content:
      "Yes. Life circumstances change, and your will should too. You can log in anytime to update beneficiaries, change asset distribution, or add new provisions. Your changes are saved automatically, and you can download the updated version immediately.",
  },
    {
    value: "item-6",
    trigger: "How do I pay for Inherix services?",
    content:
      "Yes. Life circumstances change, and your will should too. You can log in anytime to update beneficiaries, change asset distribution, or add new provisions. Your changes are saved automatically, and you can download the updated version immediately.",
  },
    {
    value: "item-7",
    trigger: "I'm a will writer - how do I join Inherix?",
    content:
      "Yes. Life circumstances change, and your will should too. You can log in anytime to update beneficiaries, change asset distribution, or add new provisions. Your changes are saved automatically, and you can download the updated version immediately.",
  },
]

export function AccordionBasic() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="max-w-3xl mx-auto"
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
