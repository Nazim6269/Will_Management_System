"use client";

import GenericButton from "@/components/atoms/GenericButton";
import { ClientFileIcon } from "@/components/atoms/icons";
import { FileText, ArrowRight, Download } from "lucide-react";

import { useRouter } from "next/navigation";

interface WillDocumentCardProps {
  documentName?: string;
  generatedDate?: string;
  willWriter?: string;
  status?: "Complete" | "Pending" | "Draft";
  onView?: () => void;
  onDownload?: () => void;
}

const statusStyles: Record<string, string> = {
  Complete: "bg-springGreen/15 border-springGreen/20 text-green-400",
  Pending: "bg-amber-950/60 border-amber-800/50 text-amber-400",
  Draft: "bg-blue-950/60  border-blue-800/50  text-blue-400",
};

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-t border-borderColor/18 py-[13px]">
      <span className="text-sm text-blue46">{label}</span>
      <span className="text-xs sm:text-sm font-semibold text-blue70">{value}</span>
    </div>
  );
}

export default function WillDocumentCard({
  documentName = "will_sarah_johnson_2026.pdf",
  generatedDate = "27 March 2026",
  willWriter = "James Thornton",
  status = "Complete",
  onView,
  onDownload,
}: WillDocumentCardProps) {
  const router = useRouter();

  const handleView = () => {
    if (onView) {
      onView();
    } else {
      router.push("/dashboard/client/my-wills");
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    } else {
      alert("Downloading will_sarah_johnson_2026.pdf...");
    }
  };

  return (
    <div className="w-full gradient-border-top rounded-2xl border border-borderColor/18 bg-blue14 p-5 sm:p-6 mt-4">
      {/* Header */}
      <div className="mb-1.5 flex items-center gap-2.5">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-borderColor/32 bg-borderColor/15">
          <ClientFileIcon />
        </div>
        <h2 className="text-base font-bold text-blueF0 leading-6">
          My Will Document
        </h2>
      </div>
      <p className="mb-5 text-[13px] text-blue46">
        Your will has been prepared and is ready to view and download.
      </p>

      {/* Meta rows */}
      <MetaRow label="Document" value={documentName} />
      <MetaRow label="Generated" value={generatedDate} />
      <MetaRow label="Will Writer" value={willWriter} />
      <MetaRow
        label="Status"
        value={
          <span
            className={`rounded-full border px-3.5 py-1 text-xs font-bold ${statusStyles[status]}`}
          >
            {status}
          </span>
        }
      />

      {/* Actions */}
      <div className="mt-5 grid lg:grid-cols-12 gap-2.5">
        <div className="col-span-10">
          <GenericButton
            title="View Will Document"
            variant={"primary"}
            icon={<ArrowRight />}
            iconPosition={"right"}
            className="button-shadow"
            onClick={handleView}
            fullWidth
          />
        </div>
        <div className="col-span-2">
          <GenericButton
            title="Download"
            onClick={handleDownload}
            variant={"outline"}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
