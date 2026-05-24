"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type {
  StepConfig,
  FormData,
  FieldErrors,
  TouchedFields,
  StepStatuses,
  UseMultiStepFormReturn,
  UseMultiStepFormOptions,
} from "@/types/formType";

const DEFAULT_STORAGE_KEY = "msf_draft_v1";

export function useMultiStepForm(
  steps: StepConfig[],
  options: UseMultiStepFormOptions = {},
): UseMultiStepFormReturn {
  const {
    onSave,
    onComplete,
    analytics,
    storageKey = DEFAULT_STORAGE_KEY,
    disablePersistence = false,
  } = options;

  const router = useRouter();
  const searchParams = useSearchParams();

  // ---- Restore draft from localStorage ----
  const [formData, setFormData] = useState<FormData>(() => {
    if (disablePersistence || typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [stepStatuses, setStepStatuses] = useState<StepStatuses>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [asyncValidating, setAsyncValidating] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  // ---- URL-based step navigation ----
  const urlStep = parseInt(searchParams?.get("step") ?? "0", 10);
  const [activeStepIndex, setActiveStepIndexState] = useState(
    isNaN(urlStep) ? 0 : Math.max(0, urlStep),
  );

  const setActiveStepIndex = useCallback(
    (indexOrUpdater: number | ((n: number) => number)) => {
      setActiveStepIndexState((prev) => {
        const next =
          typeof indexOrUpdater === "function"
            ? indexOrUpdater(prev)
            : indexOrUpdater;
        // Sync to URL
        try {
          const params = new URLSearchParams(window.location.search);
          params.set("step", String(next));
          router.replace(`?${params.toString()}`, { scroll: false });
        } catch {}
        return next;
      });
    },
    [router],
  );

  // ---- Derived state ----
  const visibleSteps = useMemo(() => steps, [steps]); // Simplified for now since condition was removed from StepConfig

  const totalSteps = visibleSteps.length;
  const currentStepIndex = Math.min(activeStepIndex, totalSteps - 1);
  const currentStep = visibleSteps[currentStepIndex];
  const progress =
    totalSteps <= 1
      ? 100
      : Math.round((currentStepIndex / (totalSteps - 1)) * 100);
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === totalSteps - 1;

  // ---- Draft persistence ----
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (disablePersistence) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(formData));
      } catch {}
      onSave?.(formData);
    }, 300); // debounce
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [formData, onSave, storageKey, disablePersistence]);

  // ---- Field Actions ----
  const updateField = useCallback(
    (id: string, value: unknown) => {
      setFormData((prev) => ({ ...prev, [id]: value }));
      setTouched((prev) => ({ ...prev, [id]: true }));
      analytics?.("field_change", { step: currentStep?.id, field: id });
    },
    [currentStep, analytics],
  );

  const touchField = useCallback((id: string) => {
    setTouched((prev) => ({ ...prev, [id]: true }));
  }, []);

  // ---- Validation ----
  const validateCurrentStep = useCallback((): boolean => {
    if (!currentStep) return true;
    const isValid = currentStep.validate();
    return !!isValid;
  }, [currentStep]);

  // ---- Navigation ----
  const next = useCallback(async () => {
    analytics?.("step_next", { step: currentStep?.id });

    const valid = await currentStep.validate();
    if (!valid) return;

    setStepStatuses((prev) => ({ ...prev, [currentStep.id]: "complete" }));
    setDirection(1);
    setActiveStepIndex((s) => Math.min(s + 1, totalSteps - 1));
  }, [currentStep, totalSteps, analytics, setActiveStepIndex]);

  const prev = useCallback(() => {
    analytics?.("step_prev", { step: currentStep?.id });
    setDirection(-1);
    setActiveStepIndex((s) => Math.max(s - 1, 0));
  }, [currentStep, analytics, setActiveStepIndex]);

  const jumpTo = useCallback(
    (index: number) => {
      if (index === currentStepIndex) return;
      const target = visibleSteps[index];
      analytics?.("step_jump", { to: target?.id, from: currentStep?.id });
      setDirection(index > currentStepIndex ? 1 : -1);
      setActiveStepIndex(index);
    },
    [
      currentStepIndex,
      visibleSteps,
      currentStep,
      analytics,
      setActiveStepIndex,
    ],
  );

  // ---- Submission ----
  const submit = useCallback(async () => {
    setSubmitting(true);
    try {
      await onComplete?.(formData);
      setSubmitted(true);
      if (!disablePersistence) {
        try {
          localStorage.removeItem(storageKey);
        } catch {}
      }
      analytics?.("form_submit", { plan: formData.plan, role: formData.role });
    } catch (err) {
      console.error("[MultiStepForm] Submission error:", err);
      setErrors({ _form: "Submission failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }, [formData, onComplete, analytics, storageKey, disablePersistence]);

  const reset = useCallback(() => {
    setFormData({});
    setErrors({});
    setTouched({});
    setStepStatuses({});
    setSubmitted(false);
    setEditMode(false);
    setActiveStepIndex(0);
    if (!disablePersistence) {
      try {
        localStorage.removeItem(storageKey);
      } catch {}
    }
    analytics?.("form_reset");
  }, [analytics, storageKey, disablePersistence, setActiveStepIndex]);

  const enterEditMode = useCallback(
    (stepIndex: number) => {
      setEditMode(true);
      setSubmitted(false);
      setActiveStepIndex(stepIndex);
    },
    [setActiveStepIndex],
  );

  return {
    formData,
    errors,
    touched,
    stepStatuses,
    currentStepIndex,
    visibleSteps,
    totalSteps,
    currentStep,
    progress,
    isFirstStep: isFirst,
    isLastStep: isLast,
    direction,
    submitting,
    submitted,
    editMode,
    asyncValidating,
    updateField,
    touchField,
    next,
    prev,
    jumpTo,
    submit,
    reset,
    enterEditMode,
    validateCurrentStep,
    goToStep: jumpTo,
  };
}
