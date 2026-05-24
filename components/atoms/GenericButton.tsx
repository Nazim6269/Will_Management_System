import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium transition-all duration-200 whitespace-nowrap cursor-pointer",
  {
    variants: {
      variant: {
        primary: "text-white button-bg-violet ",
        cyan: "text-white button-bg-cyan font-medium",
        secondary: "bg-orange50 text-[#0E0B1E] ",
        outline: "border border-borderColor/18 bg-transparent",
        glass:
          "backdrop-blur-md border border-borderColor/18 bg-blue66/15 text-violet85 ",
        subtle: "bg-[rgba(123,92,246,0.3)] text-white",
        danger: "bg-red60/10 text-red60 border border-red60/20 ",
      },

      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-6 py-3 text-base",
        xmd: "px-4 py-2 text-xs",
        lg: "px-10 py-4 text-sm",
        xl: "px-10 py-[16.5px] text-lg",
      },

      radius: {
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
        pill: "rounded-full",
        custom10: "rounded-[10px]",
        custom9: "rounded-[9px]",
        custom6: "rounded-[6px]",
      },

      iconPosition: {
        left: "flex-row",
        right: "flex-row",
      },

      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "md",
      iconPosition: "left",
      fullWidth: false,
    },
  },
);

interface GenericButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  title?: string;
}

const GenericButton = React.forwardRef<HTMLButtonElement, GenericButtonProps>(
  (
    {
      title,
      icon,
      variant,
      size,
      radius,
      iconPosition,
      fullWidth,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            radius,
            iconPosition,
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {icon && iconPosition === "left" && icon}

        {children ?? title}

        {icon && iconPosition === "right" && icon}
      </button>
    );
  },
);

GenericButton.displayName = "GenericButton";

export default GenericButton;
