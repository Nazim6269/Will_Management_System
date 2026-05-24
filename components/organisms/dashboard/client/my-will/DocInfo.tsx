"use client";

import GenericButton from "@/components/atoms/GenericButton";

interface DocumentInfoCardProps {
  status?: "Complete" | "Pending" | "Draft";
  generatedDate?: string;
  willWriter?: string;
  version?: string;
  onDownload?: () => void;
  onEmail?: () => void;
}

const statusStyles: Record<string, string> = {
  Complete: "bg-green-950/60 border-green-800/50 text-green-400",
  Pending: "bg-amber-950/60 border-amber-800/50 text-amber-400",
  Draft: "bg-blue-950/60  border-blue-800/50  text-blue-400",
};

const statusIcons: Record<string, string> = {
  Complete: "✓",
  Pending: "⏳",
  Draft: "✎",
};

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-t border-borderColor/18 py-3">
      <span className="text-sm text-blue46">{label}</span>
      <span className="text-sm font-semibold text-blue70">{value}</span>
    </div>
  );
}

export default function DocumentInfoCard({
  status = "Complete",
  generatedDate = "27 Mar 2026",
  willWriter = "James Thornton",
  version = "v1.0 Final",
  onDownload,
  onEmail,
}: DocumentInfoCardProps) {
  return (
    <div className="w-full   rounded-2xl border border-borderColor/18 bg-blue14 p-5">
      {/* Header */}
      <h2 className="mb-4 text-base font-bold leading-6 text-blueF0">
        Document Info
      </h2>

      {/* Meta rows */}
      <MetaRow
        label="Status"
        value={
          <span
            className={`rounded-full border px-3 py-1 text-xs font-bold ${statusStyles[status]}`}
          >
            {statusIcons[status]} {status}
          </span>
        }
      />
      <MetaRow label="Generated" value={generatedDate} />
      <MetaRow label="Will Writer" value={willWriter} />
      <MetaRow label="Version" value={version} />

      {/* Actions */}
      <div className="mt-5 flex flex-col gap-2">
        <GenericButton
          title="Download PDF"
          variant="primary"
          className="button-shadow"
          fullWidth
          onClick={onDownload}
        />
        <GenericButton
          title="Email to Me"
          variant="outline"
          fullWidth
          onClick={onEmail}
        />
      </div>
    </div>
  );
}
