"use client";

import { useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

import {
  Accessibility,
  Setting,
  Security,
  ActiveSessions,
  WhiteDanger,
} from "@/components/atoms/icons";

const settingsNavVariants = cva(
  "rounded-2xl border border-borderColor/18 bg-blue14 w-full",
  {
    variants: {
      variant: {
        agent: "",
        admin: "",
      },
    },

    defaultVariants: {
      variant: "agent",
    },
  },
);

type Variant = "agent" | "admin";

const navConfig = {
  agent: [
    {
      key: "general",
      label: "General",
      icon: Setting,
    },

    {
      key: "security",
      label: "Security & Privacy",
      icon: Security,
    },

    {
      key: "avail",
      label: "Availability",
      icon: Accessibility,
    },

    {
      key: "sessions",
      label: "Active Sessions",
      icon: ActiveSessions,
    },

    {
      key: "danger",
      label: "Danger Zone",
      icon: WhiteDanger,
    },
  ],

  admin: [
    {
      key: "pricing",
      label: "Pricing",
      icon: Setting,
    },

    {
      key: "platform",
      label: "Platform",
      icon: Accessibility,
    },

    {
      key: "email",
      label: "Email",
      icon: ActiveSessions,
    },

    {
      key: "security",
      label: "Security",
      icon: Security,
    },
  ],
} satisfies Record<
  Variant,
  {
    key: string;
    label: string;
    icon: React.ElementType;
  }[]
>;

interface SettingsNavProps extends VariantProps<typeof settingsNavVariants> {
  activeKey?: string;
  onChange?: (key: string) => void;
}

export default function SettingsNav({
  variant = "agent",
  activeKey,
  onChange,
}: SettingsNavProps) {
  const items = navConfig[variant || "agent"];

  const [active, setActive] = useState(activeKey || items[0]?.key);

  const handleClick = (key: string) => {
    setActive(key);
    onChange?.(key);
  };

  return (
    <div className={settingsNavVariants({ variant })}>
      {items.map(({ key, label, icon: Icon }) => {
        const isActive = active === key;

        return (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className={`
              flex w-full items-center gap-2.5
              rounded-[10px]
              px-3.5 py-[11px]
              transition-colors duration-150
              cursor-pointer
              border-b border-borderColor/18
              last:border-b-0

              ${isActive ? "bg-borderColor/15" : "hover:bg-white/[0.04]"}
            `}
          >
            <Icon />

            <span
              className={`
                text-sm
                ${
                  isActive
                    ? "text-violet85 font-bold"
                    : "text-cyan65 font-medium"
                }
              `}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
