import React, { forwardRef } from "react";

interface PrintSectionProps {
  children: React.ReactNode;
  className?: string;
}

const PrintSection = forwardRef<HTMLDivElement, PrintSectionProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={`print-container ${className || ""}`}>
        {children}
      </div>
    );
  },
);

PrintSection.displayName = "PrintSection";

export default PrintSection;
