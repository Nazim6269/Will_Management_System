"use client";

import GenericButton from "@/components/atoms/GenericButton";
import { PdfIcon } from "@/components/atoms/icons";

interface PDFDocumentCardProps {
  fileName?: string;
  generated?: boolean;
  onDownload?: () => void;
}

export default function PDFDocumentCard({
  fileName = "will_sarah_johnson.pdf",
  generated = false,
  onDownload,
}: PDFDocumentCardProps) {
  return (
    <div className="rounded-2xl bg-blue14 border border-borderColor/18 p-5 ">
      <h2 className="dashboard-section-heading font-bold text-lg  mb-6">
        PDF Document
      </h2>

      <div className="flex flex-col items-center gap-3 mb-2.5">
        <PdfIcon className="w-15 h-15" />

        <div className="text-center">
          <p className="text-cyan65 text-xs font-semibold">{fileName}</p>
          <p className="text-cyan4A7A74 text-xs mt-0.5">
            {generated ? "Ready to download" : "Not yet generated"}
          </p>
        </div>
      </div>

      <GenericButton
        variant="primary"
        size="sm"
        onClick={onDownload}
        className="button-shadow w-full font-semibold"
      >
        Download PDF
      </GenericButton>
    </div>
  );
}
