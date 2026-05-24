import { cva, type VariantProps } from "class-variance-authority";

export const activityIconVariants = cva(
  "w-10 h-10 flex items-center justify-center rounded-xl transition-colors",
  {
    variants: {
      type: {
        pdf: "bg-cyan5212/10 text-white",
        payment: "bg-borderColor/12 text-white",
        appointment: "bg-orange50/10 text-white",
      },
    },
    defaultVariants: {  
      type: "pdf",
    },
  },
);

export type ActivityIconVariants = VariantProps<typeof activityIconVariants>;
