import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import GenericButton from "@/components/atoms/GenericButton";

const headerVariants = cva(
  "flex items-start justify-between gap-4 border-b border-borderColor/18 px-5.5 py-4.5",
  {
    variants: {
      variant: {
        preview: "",
        paginated: "",
      },
    },
    defaultVariants: {
      variant: "paginated",
    },
  },
);

type Variant = "preview" | "paginated";

interface GenericTableHeaderProps extends VariantProps<typeof headerVariants> {
  title: string;
  subtitle: string;
  onViewAll?: () => void;
  viewAllText?: string;
}

/**
 * Right side renderer (now supports click handler)
 */
const rightContentConfig = (
  onViewAll?: () => void,
  viewAllText: string = "View All",
) => ({
  preview: <></>,

  paginated: (
    <GenericButton variant="outline" size="sm" onClick={onViewAll}>
      {viewAllText}
    </GenericButton>
  ),
});

const getRightContent = (
  variant?: Variant | null,
  onViewAll?: () => void,
  viewAllText?: string,
) => {
  const config = rightContentConfig(onViewAll, viewAllText);
  return config[variant ?? "preview"];
};

const GenericTableHeader = ({
  title,
  subtitle,
  variant,
  onViewAll,
  viewAllText = "View All",
}: GenericTableHeaderProps) => {
  return (
    <div className={headerVariants({ variant })}>
      {/* Left */}
      <div>
        <h2 className="text-gray96 text-base font-bold leading-6 tracking-[-0.3px]">
          {title}
        </h2>

        <p className="text-cyan4A7A74 text-xs font-normal leading-[160%] tracking-[0.25px]">
          {subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="shrink-0">
        {getRightContent(variant, onViewAll, viewAllText)}
      </div>
    </div>
  );
};

export default GenericTableHeader;
