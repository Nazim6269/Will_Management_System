import type {
  PrintConfig,
  PrintDimensions,
  PrintMargins,
  PrintPageSize,
  PrintOrientation,
} from "../types/printType";

export const PAGE_SIZE_MAP: Record<PrintPageSize, PrintDimensions> = {
  A4: { width: "210mm", height: "297mm" },
  A3: { width: "297mm", height: "420mm" },
  Letter: { width: "216mm", height: "279mm" },
  Legal: { width: "216mm", height: "356mm" },
  Tabloid: { width: "279mm", height: "432mm" },
} as const;

export const DEFAULT_MARGINS: PrintMargins = {
  top: "20mm",
  right: "15mm",
  bottom: "20mm",
  left: "15mm",
};

export const TIGHT_MARGINS: PrintMargins = {
  top: "10mm",
  right: "10mm",
  bottom: "10mm",
  left: "10mm",
};

export const WIDE_MARGINS: PrintMargins = {
  top: "25mm",
  right: "25mm",
  bottom: "25mm",
  left: "25mm",
};

export function createDefaultPrintConfig(
  overrides: Partial<PrintConfig> & Pick<PrintConfig, "documentType" | "label">,
): PrintConfig {
  return {
    pageSize: "A4",
    orientation: "portrait",
    margins: DEFAULT_MARGINS,
    colorMode: "color",
    header: { enabled: false },
    footer: {
      enabled: true,
      showPageNumbers: true,
      pageNumberFormat: "fraction",
    },
    ...overrides,
  };
}

export function buildPageCSSRule(
  pageSize: PrintPageSize,
  orientation: PrintOrientation,
  margins: PrintMargins,
): string {
  const dimensions = PAGE_SIZE_MAP[pageSize];
  const [w, h] =
    orientation === "landscape"
      ? [dimensions.height, dimensions.width]
      : [dimensions.width, dimensions.height];

  return `
    @page {
      size: ${w} ${h};
      margin: ${margins.top} ${margins.right} ${margins.bottom} ${margins.left};
    }
  `.trim();
}

export const PRINT_DELAYS = {
  BEFORE_PRINT: 300,
  AFTER_CLEANUP: 100,
} as const;

export const PRINT_CSS_CLASSES = {
  ROOT: "print-root",
  HIDE_ON_PRINT: "no-print",
  SHOW_ON_PRINT: "print-only",
  PAGE_BREAK: "page-break",
  WATERMARK: "print-watermark",
  HEADER: "print-header",
  FOOTER: "print-footer",
} as const;

export const PRINT_PORTAL_ID = "print-system-portal";
