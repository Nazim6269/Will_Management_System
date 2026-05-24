"use client";

import React from "react";
import GenericButton from "@/components/atoms/GenericButton";
import { WillStatus } from "@/components/atoms/icons";
import { usePrint, usePrintRegistry } from "@/hooks";

import WillPDF, { willTemplateDefinition, defaultWillData } from "./WillPdf";

const WillContent = () => {
  usePrintRegistry(willTemplateDefinition);

  const { print, status, isLoading } = usePrint({
    documentType: "will",
    data: defaultWillData,
    metadata: {
      title: "will_sarah_johnson_2026",
    },
  });

  const handleDownload = () => {
    alert("Downloading PDF...");
  };

  return (
    <div className="space-y-4">
      {/* Actions (Hidden on Print) */}
      <div className="no-print flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-blue14 border border-borderColor/18 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-borderColor/32 bg-borderColor/15">
            <WillStatus className="w-6 h-6" />
          </div>

          <div className="space-y-0.5">
            <h2 className="text-blueF0 text-xs sm:text-sm font-bold uppercase tracking-wider">
              will_sarah_johnson_2026.pdf
            </h2>

            <p className="text-blue46 text-xs font-medium">
              Generated on 27 March 2026
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <GenericButton
            variant="outline"
            title={isLoading ? "Preparing..." : "Print"}
            onClick={print}
            disabled={isLoading}
            className="flex-1 sm:flex-none h-9 text-xs"
          />

          <GenericButton
            variant="primary"
            title="Download PDF"
            onClick={handleDownload}
            className="flex-1 sm:flex-none h-9 text-xs button-shadow"
          />
        </div>
      </div>

      <div className="no-print py-12 px-4 md:px-29 pdf-bg border border-borderColor/18 rounded-2xl flex justify-center">
        <WillPDF
          data={defaultWillData}
          config={willTemplateDefinition.config}
        />
      </div>
    </div>
  );
};

export default WillContent;
