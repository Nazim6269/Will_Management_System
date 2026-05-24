"use client";

import SectionLabel from "@/components/molecules/client/invoices/SectionLabel";
import InvoiceCard from "@/components/molecules/client/invoices/InvoiceCard";

export interface Invoice {
  id: string;
  issuedDate: string;
  service: string;
  willWriter?: string;
  dueDate: string;
  amount: string;
  method?: string;
  status: "unpaid" | "paid";
}

const outstandingInvoices: Invoice[] = [
  {
    id: "INV-0025",
    issuedDate: "6 Apr 2026",
    service: "Will Writing - Basic",
    willWriter: "James Thornton",
    dueDate: "20 Apr 2026",
    amount: "£149",
    status: "unpaid",
  },
];

const paidInvoices: Invoice[] = [
  {
    id: "INV-0025",
    issuedDate: "6 Apr 2026",
    service: "Will Writing - Basic",
    dueDate: "20 Apr 2026",
    amount: "£149",
    method: "Stripe",
    status: "paid",
  },
];

export default function InvoicesList() {
  return (
    <div className="w-full">
      <SectionLabel type="outstanding" count={outstandingInvoices.length} />
      {outstandingInvoices.map((inv) => (
        <InvoiceCard key={inv.id} invoice={inv} />
      ))}

      <SectionLabel type="paid" />
      {paidInvoices.map((inv) => (
        <InvoiceCard key={inv.id + "-paid"} invoice={inv} />
      ))}
    </div>
  );
}
