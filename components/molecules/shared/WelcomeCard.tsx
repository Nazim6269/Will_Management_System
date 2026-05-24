"use client";

import React from "react";
import { GreetingIcon } from "@/components/atoms/icons";
import GenericButton from "@/components/atoms/GenericButton";
import { PlusIcon } from "lucide-react";

type WelcomeCardVariant = "client" | "admin";

type WelcomeCardContent = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CARD_CONTENT: Record<WelcomeCardVariant, WelcomeCardContent> = {
  client: {
    title: "Welcome back, Sarah!",
    description:
      "Your will is ready. You have 1 unpaid invoice and an upcoming appointment on Apr 18.",

    icon: (
      <div className="flex justify-center sm:justify-end">
        <GreetingIcon />
      </div>
    ),
  },

  admin: {
    title: "Welcome back, Admin",
    description:
      "Platform running smoothly. 5 overdue invoices need attention. 2 new agent applications pending.",

    icon: (
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
        <GenericButton
          title="Create Agent"
          variant="outline"
          icon={<PlusIcon size={18} />}
          iconPosition="left"
          size="lg"
          className="w-full sm:w-auto"
        />

        <GenericButton
          title="Create Client"
          variant="primary"
          icon={<PlusIcon size={18} />}
          iconPosition="left"
          size="lg"
          className="w-full sm:w-auto"
        />
      </div>
    ),
  },
};

interface WelcomeCardProps {
  variant?: WelcomeCardVariant;
}

const WelcomeCard = ({ variant = "client" }: WelcomeCardProps) => {
  const content = CARD_CONTENT[variant];

  return (
    <div className="welcome-card flex flex-col gap-6 rounded-3xl px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
      {/* Left Content */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl font-bold leading-tight tracking-[-0.03em] text-blueF0 sm:text-2xl">
          {content.title}
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-blue70 sm:text-base">
          {content.description}
        </p>
      </div>

      {/* Right Content */}
      <div className="w-full sm:w-auto">{content.icon}</div>
    </div>
  );
};

export default WelcomeCard;
