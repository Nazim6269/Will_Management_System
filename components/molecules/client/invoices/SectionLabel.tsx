import { AlertTriangle, CheckCircle } from "lucide-react";

function SectionLabel({
  type,
  count,
}: {
  type: "outstanding" | "paid";
  count?: number;
}) {
  return type === "outstanding" ? (
    <div className="flex items-center gap-2  px-1  mb-4">
      <AlertTriangle size={12} className="text-orange50" />
      <span className="text-[0.688rem] font-bold uppercase tracking-[2px] text-orange50">
        Outstanding Invoices {count !== undefined && `(${count})`}
      </span>
    </div>
  ) : (
    <div className="flex items-center gap-2 px-1  mb-4 mt-6">
      <CheckCircle size={12} className="text-springGreen4E" />
      <span className="text-[0.688rem] font-bold uppercase tracking-[2px] text-springGreen4E">
        Paid Invoices
      </span>
    </div>
  );
}

export default SectionLabel;
