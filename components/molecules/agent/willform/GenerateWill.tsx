"use client";

import GenericButton from "@/components/atoms/GenericButton";
import { PdfIcon } from "@/components/atoms/icons";

interface GenerateWillSectionProps {
  clientName?: string;
  onGenerate?: () => void;
  isGenerating?: boolean;
}

export default function GenerateWillSection({
  clientName = "Sarah Johnson",
  onGenerate,
  isGenerating = false,
}: GenerateWillSectionProps) {
  return (
    <div className="w-full generate-will mt-4 mb-6 rounded-2xl overflow-hidden">
      <div className="flex flex-col items-center text-center p-4 sm:p-10">
        {/* PDF Icon */}
        <div className="mb-6">
          <PdfIcon className="h-15 w-15 text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-white text-2xl font-bold tracking-[-0.3px] leading-[32px] mb-3">
          Ready to generate the will?
        </h2>

        {/* Description */}
        <p className="text-blue70 text-sm leading-[22px] max-w-md mb-6.5">
          Once you click generate, the Inherix system will automatically create
          a professionally formatted PDF will document for{" "}
          <span className="text-gray96">{clientName}</span> - available
          instantly in her client dashboard.
        </p>

        {/* CTA Button */}
        <GenericButton
          variant="primary"
          title={isGenerating ? "Generating..." : "Generate PDF Will Document"}
          size="lg"
          onClick={onGenerate}
          disabled={isGenerating}
          className="px-10 py-4 text-base font-semibold rounded-2xl bg-blue66 hover:bg-blue66/90 min-w-[280px]"
        />

        {/* Footer note */}
        <p className="text-blue46 text-xs leading-[18px] mt-3.5">
          The client will be notified that their will is ready to view and
          download.
        </p>
      </div>
    </div>
  );
}
