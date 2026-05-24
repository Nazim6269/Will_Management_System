"use client";
import React, { Suspense } from "react";
import GenericButton from "../../atoms/GenericButton";
import { ArrowLeft } from "lucide-react";
import {
  MultiStepFormProvider,
  useMultiStepFormContext,
} from "../../providers/MultiStepFormProvider";
import { willFormSteps } from "@/lib/willFormConfig";
import {
  ClientCard,
  PDFDocumentCard,
  ProgressCard,
  StepsPanel,
} from "../../molecules/agent/willform";

// Create a wrapper component to consume the context
const WillFormContent = () => {
  const {
    currentStep,
    prev,
    next,
    isFirstStep,
    isLastStep,
    currentStepIndex,
    visibleSteps,
  } = useMultiStepFormContext();

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <StepsPanel />
        <div className="mt-6">
          {/* Dynamically render the current step's components */}
          <div className="flex flex-col gap-6">{currentStep.components}</div>

          {/* Navigation Actions */}
          <div className="flex justify-between mt-8 gap-4">
            <GenericButton
              variant="glass"
              icon={<ArrowLeft />}
              iconPosition="left"
              onClick={prev}
              disabled={isFirstStep}
            >
              Back
            </GenericButton>

            <GenericButton
              variant="primary"
              className="button-shadow"
              onClick={next}
              fullWidth={false}
            >
              {isLastStep
                ? "Complete"
                : `Next: ${visibleSteps[currentStepIndex + 1]?.label} →`}
            </GenericButton>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-75 shrink-0 flex flex-col gap-4">
        <ClientCard />
        <ProgressCard />
        <PDFDocumentCard />
      </div>
    </div>
  );
};

// Wrap the actual page default export
const WillFormPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MultiStepFormProvider steps={willFormSteps}>
        <WillFormContent />
      </MultiStepFormProvider>
    </Suspense>
  );
};

export default WillFormPage;
