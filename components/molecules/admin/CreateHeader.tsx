import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const createHeaderVariants = cva("w-full lg:w-219 mx-auto space-y-3 my-4", {
  variants: {
    variant: {
      agent: "",
      client: "",
    },
  },

  defaultVariants: {
    variant: "agent",
  },
});

type Variant = "agent" | "client";

const headerConfig = {
  agent: {
    badge: "Will Writer Registration",
    title: "Joining Inherix as a Certified Will Writer",
  },

  client: {
    badge: "Client Registration",
    title: "Joining Inherix as a Client",
  },
} satisfies Record<
  Variant,
  {
    badge: string;
    title: string;
  }
>;

interface CreateHeaderProps extends VariantProps<typeof createHeaderVariants> {}

const CreateHeader = ({ variant = "agent" }: CreateHeaderProps) => {
  const config = headerConfig[variant ?? "agent"];

  return (
    <div className={createHeaderVariants({ variant })}>
      <p className="text-blue66 text-sm font-bold leading-[125%] tracking-[3px] uppercase text-center">
        {config.badge}
      </p>

      <h2 className="text-xl sm:text-[2.5rem] font-bold text-gray96 font-libre-baskerville leading-[160%] tracking-[-1.5px] text-center px-4 lg:px-35">
        {config.title}
      </h2>
    </div>
  );
};

export default CreateHeader;
