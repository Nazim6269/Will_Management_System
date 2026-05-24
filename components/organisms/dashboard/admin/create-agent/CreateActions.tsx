import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import GenericButton from "@/components/atoms/GenericButton";

const createActionsVariants = cva(
  "flex flex-col sm:flex-row sm:items-center gap-4 mt-4 sm:mt-10",
  {
    variants: {
      variant: {
        agent: "",
        client: "",
      },
    },

    defaultVariants: {
      variant: "agent",
    },
  },
);

type Variant = "agent" | "client";


const actionConfig = {
  agent: {
    primaryButtonText: "Create Agent",
  },

  client: {
    primaryButtonText: "Create Client",
  },
} satisfies Record<
  Variant,
  {
    primaryButtonText: string;
  }
>;

interface CreateActionsProps extends VariantProps<
  typeof createActionsVariants
> {}



const CreateActions = ({ variant = "agent" }: CreateActionsProps) => {
  const config = actionConfig[variant ?? "agent"];

  return (
    <div className={createActionsVariants({ variant })}>
      <GenericButton
        title={config.primaryButtonText}
        variant="primary"
        radius="pill"
        className="w-full sm:w-auto button-shadow"
      />

      <GenericButton
        title="Cancel Registration"
        variant="outline"
        radius="pill"
        className="w-full sm:w-auto"
      />
    </div>
  );
};

export default CreateActions;
