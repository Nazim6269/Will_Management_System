export type PrintPageSize = "A4" | "A3" | "Letter" | "Legal" | "Tabloid";

export type PrintOrientation = "portrait" | "landscape";

export type PrintColorMode = "color" | "grayscale" | "monochrome";

export interface PrintMargins {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export interface PrintDimensions {
  width: string;
  height: string;
}

export type PrintDocumentVariant =
  | "invoice"
  | "will"
  | "agreement"
  | "report"
  | "receipt"
  | string;

export interface PrintMetadata {
  title: string;
  author?: string;
  subject?: string;
  keywords?: string[];
  createdAt?: Date;
  documentId?: string;
}

export interface PrintConfig {
  documentType: PrintDocumentVariant;

  label: string;

  pageSize: PrintPageSize;

  orientation: PrintOrientation;

  margins: PrintMargins;

  colorMode?: PrintColorMode;

  watermark?: WatermarkConfig;

  header?: PrintHeaderConfig;

  footer?: PrintFooterConfig;

  rootClassName?: string;

  cssVariables?: Record<string, string>;
}

export interface PrintHeaderConfig {
  enabled: boolean;
  showOnFirstPage?: boolean;
  height?: string;
  render?: (context: PrintPageContext) => React.ReactNode;
}

export interface PrintFooterConfig {
  enabled: boolean;
  showPageNumbers?: boolean;
  pageNumberFormat?: "numeric" | "fraction";
  height?: string;
  render?: (context: PrintPageContext) => React.ReactNode;
}

export interface PrintPageContext {
  currentPage: number;
  totalPages: number;
  documentId?: string;
  metadata?: PrintMetadata;
}

export type WatermarkVariant = "text" | "image";

export interface WatermarkConfig {
  variant: WatermarkVariant;
  text?: string;
  imageUrl?: string;
  opacity?: number;
  angle?: number;
  fontSize?: string;
  color?: string;
}

export interface PrintTemplateDefinition<TData = unknown> {
  documentType: PrintDocumentVariant;

  config: PrintConfig;

  resolveData?: (payload: TData) => Promise<TData>;

  component: React.ComponentType<PrintTemplateProps<TData>>;
}

export interface PrintTemplateProps<TData = unknown> {
  data: TData;
  config: PrintConfig;
  metadata?: PrintMetadata;
  isPreview?: boolean;
}

export type PrintStatus =
  | "idle"
  | "resolving" // async data fetch
  | "rendering" // DOM injection
  | "ready" // print dialog about to open
  | "printing"
  | "complete"
  | "error";

export interface PrintState {
  status: PrintStatus;
  error: PrintError | null;
  documentType: PrintDocumentVariant | null;
  startedAt: number | null;
}

export type PrintErrorCode =
  | "MISSING_REF"
  | "EMPTY_CONTENT"
  | "RESOLVE_FAILED"
  | "RENDER_FAILED"
  | "UNSUPPORTED_BROWSER"
  | "TEMPLATE_NOT_FOUND"
  | "UNKNOWN";

export interface PrintError {
  code: PrintErrorCode;
  message: string;
  originalError?: unknown;
}

export type PrintRegistry = Map<PrintDocumentVariant, PrintTemplateDefinition<any>>;

export interface UsePrintOptions<TData = any> {
  documentType: PrintDocumentVariant;
  data: TData;
  metadata?: PrintMetadata;
  onSuccess?: () => void;
  onError?: (error: PrintError) => void;
  printDelay?: number;
}

export interface UsePrintReturn {
  print: () => Promise<void>;
  preview: () => void;
  status: PrintStatus;
  error: PrintError | null;
  isLoading: boolean;
  isReady: boolean;
  reset: () => void;
}

export interface PrintContextValue {
  registry: PrintRegistry;
  registerTemplate: (definition: PrintTemplateDefinition<any>) => void;
  unregisterTemplate: (documentType: PrintDocumentVariant) => void;
  getTemplate: (
    documentType: PrintDocumentVariant,
  ) => PrintTemplateDefinition<any> | undefined;
  globalState: PrintState;
  setGlobalState: React.Dispatch<React.SetStateAction<PrintState>>;
}
