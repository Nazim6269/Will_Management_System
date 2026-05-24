"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { UseMultiStepFormReturn, StepConfig } from "@/types/formType";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";

const MultiStepFormContext = createContext<UseMultiStepFormReturn | undefined>(
  undefined
);

export function useMultiStepFormContext() {
  const context = useContext(MultiStepFormContext);
  if (!context) {
    throw new Error(
      "useMultiStepFormContext must be used within a MultiStepFormProvider"
    );
  }
  return context;
}

interface MultiStepFormProviderProps {
  children: ReactNode;
  steps: StepConfig[];
  onComplete?: (data: any) => void;
  storageKey?: string;
}

export function MultiStepFormProvider({
  children,
  steps,
  onComplete,
  storageKey,
}: MultiStepFormProviderProps) {
  const formState = useMultiStepForm(steps, {
    onComplete,
    storageKey,
  });

  return (
    <MultiStepFormContext.Provider value={formState}>
      {children}
    </MultiStepFormContext.Provider>
  );
}
