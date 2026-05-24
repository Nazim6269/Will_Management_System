export type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "url"
  | "tel"
  | "select"
  | "textarea"
  | "radio-group"
  | "checkbox-group"
  | "date"
  | "file"
  | "custom";

export type ValidationRule<T = string> = (
  value: T,
  allValues?: FormData,
) => string | null;

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldConfig<T = unknown> {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  defaultValue?: T;
  options?: FieldOption[] | string[];
  validation?: ValidationRule[];
  /** Hide/show this field based on current form data */
  conditional?: (data: FormData) => boolean;
  /** Accessible description for screen readers */
  description?: string;
  /** Disable this field */
  disabled?: boolean | ((data: FormData) => boolean);
  /** Custom component to render instead of built-in */
  renderCustom?: (props: CustomFieldProps) => React.ReactNode;
}

export interface CustomFieldProps {
  field: FieldConfig;
  value: unknown;
  error: string | null;
  touched: boolean;
  onChange: (value: unknown) => void;
  onBlur: () => void;
  formData: FormData;
}

export type AsyncValidationFn = (
  data: FormData,
) => Promise<Record<string, string>>;

export type StepConditionFn = (data: FormData) => boolean;

export interface StepConfig {
  id: string;
  label: string;
  components: React.ReactNode[];
  validate: () => boolean | Promise<boolean>;
}

// ---- State Types ----

export type FormData = Record<string, unknown>;

export type FieldErrors = Record<string, string | null>;

export type TouchedFields = Record<string, boolean>;

export type StepStatus = "untouched" | "active" | "complete" | "error";

export type StepStatuses = Record<string, StepStatus>;

export interface FormState {
  data: FormData;
  errors: FieldErrors;
  touched: TouchedFields;
  stepStatuses: StepStatuses;
  currentStep: number;
  submitting: boolean;
  submitted: boolean;
  editMode: boolean;
  asyncValidating: boolean;
  direction: 1 | -1;
}

// ---- Hook Return Type ----

export interface UseMultiStepFormReturn {
  // State
  formData: FormData;
  errors: FieldErrors;
  touched: TouchedFields;
  stepStatuses: StepStatuses;
  currentStepIndex: number;
  visibleSteps: StepConfig[];
  totalSteps: number;
  currentStep: StepConfig;
  progress: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  direction: 1 | -1;
  submitting: boolean;
  submitted: boolean;
  editMode: boolean;
  asyncValidating: boolean;

  // Actions
  updateField: (id: string, value: unknown) => void;
  touchField: (id: string) => void;
  next: () => Promise<void>;
  prev: () => void;
  jumpTo: (index: number) => void;
  submit: () => Promise<void>;
  reset: () => void;
  enterEditMode: (stepIndex: number) => void;
  validateCurrentStep: () => boolean;
  goToStep: (index: number) => void;
}

// ---- Hook Options ----

export interface UseMultiStepFormOptions {
  /** Called on every field change — use for draft saving */
  onSave?: (data: FormData) => void;
  /** Called on successful final submission */
  onComplete?: (data: FormData) => void;
  /** Pluggable analytics handler */
  analytics?: (event: AnalyticsEvent, meta?: Record<string, unknown>) => void;
  /** localStorage key for draft persistence */
  storageKey?: string;
  /** Disable localStorage persistence */
  disablePersistence?: boolean;
}

export type AnalyticsEvent =
  | "step_next"
  | "step_prev"
  | "step_jump"
  | "field_change"
  | "form_submit"
  | "form_reset"
  | "async_validation_start"
  | "async_validation_complete";
