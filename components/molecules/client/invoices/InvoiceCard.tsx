import { Invoice } from "@/components/organisms/dashboard/client/invoices/InvoiceList";
import MetaRow from "./MetaRow";
import GenericButton from "@/components/atoms/GenericButton";
import { Download } from "lucide-react";

export default function InvoiceCard({
  invoice,
  onPay,
  onDownload,
}: {
  invoice: Invoice;
  onPay?: () => void;
  onDownload?: () => void;
}) {
  const isUnpaid = invoice.status === "unpaid";

  return (
    <div className="w-full rounded-2xl border border-borderColor/18 bg-blue14 px-5 py-5 mb-4 gradient-border-top">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[17px] font-extrabold text-gray96">{invoice.id}</p>
          <p className="text-[12px] text-blue46 mt-0.5">
            Issued: {invoice.issuedDate}
          </p>
        </div>
        {isUnpaid ? (
          <span className="rounded-full border border-orange245/20 bg-orange245/10 px-3.5 py-1.5 text-xs font-bold text-orange50">
            Unpaid
          </span>
        ) : (
          <span className="rounded-full border border-springGreen2/20 bg-springGreen2/10 px-3.5 py-1.5 text-xs font-bold text-springGreen2">
            ✓ Paid
          </span>
        )}
      </div>

      {/* Meta rows */}
      <MetaRow label="Service" value={invoice.service} />
      {invoice.willWriter && (
        <MetaRow label="Will Writer" value={invoice.willWriter} />
      )}
      <MetaRow label="Due Date" value={invoice.dueDate} />
      <MetaRow
        label="Amount Due"
        value={invoice.amount}
        valueClassName="!text-orange50 !text-[1.25rem] !font-extrabold"
      />
      {invoice.method && <MetaRow label="Method" value={invoice.method} />}

      {/* Actions */}
      {isUnpaid ? (
        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2.5">
          <GenericButton
            title="Pay Now"
            variant="primary"
            className="button-shadow"
            fullWidth
            onClick={onPay}
          />
          <GenericButton
            title="Download"
            variant="outline"
            onClick={onDownload}
          />
        </div>
      ) : (
        <div className="mt-5">
          <GenericButton
            title="Download Receipt"
            variant="outline"
            icon={<Download size={14} />}
            iconPosition="left"
            onClick={onDownload}
            size={"md"}
            className="w-full sm:w-auto"
          />
        </div>
      )}
    </div>
  );
}
