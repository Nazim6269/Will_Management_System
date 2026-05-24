"use client";

import { FileText, ArrowRight } from "lucide-react";
import { InvoiceIcon } from "@/components/atoms/icons";
import GenericButton from "@/components/atoms/GenericButton";

interface OutstandingInvoiceCardProps {
  invoiceNumber?: string;
  amount?: string;
  dueDate?: string;
  service?: string;
  onPay?: () => void;
}

function MetaRow({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between border-t border-borderColor/18 py-[13px]">
      <span className="text-sm text-blue46">{label}</span>
      <span className={`text-sm font-semibold text-blue70 ${valueClassName}`}>
        {value}
      </span>
    </div>
  );
}

export default function OutstandingInvoiceCard({
  invoiceNumber = "INV-0025",
  amount = "£149",
  dueDate = "20 April 2026",
  service = "Will Writing - Basic",
  onPay,
}: OutstandingInvoiceCardProps) {
  return (
    <div className="w-full gradient-border-top rounded-2xl border border-borderColor/18 bg-blue14 p-5 sm:p-6 mt-4">
      {/* Header */}
      <div className="mb-1.5 flex items-center gap-2.5">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-borderColor/32 bg-borderColor/15">
          <InvoiceIcon />
        </div>
        <h2 className="text-base font-bold leading-6 text-blueF0">
          Outstanding Invoice
        </h2>
      </div>
      <p className="mb-5 text-[13px] text-blue46">
        You have an unpaid invoice that requires your attention.
      </p>

      {/* Meta rows */}
      <MetaRow label="Invoice" value={invoiceNumber} />
      <MetaRow
        label="Amount"
        value={amount}
        valueClassName="!text-orange50 !text-[1.25rem] !font-extrabold"
      />
      <MetaRow
        label="Due Date"
        value={dueDate}
        valueClassName="!text-orange50"
      />
      <MetaRow label="Service" value={service} />

      {/* CTA */}
      <div className="mt-5">
        <GenericButton
          title="Pay Now via Stripe"
          variant="primary"
          className="button-shadow"
          fullWidth
          onClick={onPay}
        />
      </div>
    </div>
  );
}
