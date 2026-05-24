import { cn } from "@/lib/utils";
import { StatItem } from "@/constants/stat";
import { ComponentType, SVGProps } from "react";

type StatCardSize = "sm" | "md";
type IconType = ComponentType<SVGProps<SVGSVGElement>>;
export type TextColorVariant =
  | "default"
  | "muted"
  | "danger"
  | "warning"
  | "violet";
export type TextType = "title" | "value" | "subtitle";

type Props = StatItem & {
  size?: StatCardSize;
  textColor?: TextColorVariant;
  icon?: IconType;
};

const cardVariants = {
  primary: {
    value: "text-cyan64",
    glow: "stat-card-cyan-glow",
  },
  warning: {
    value: "text-orange50",
    glow: "stat-card-yellow-glow",
  },
  danger: {
    value: "text-red60",
    glow: "stat-card-red-glow",
  },
  violet: {
    value: "text-blue75",
    glow: "stat-card-violet-glow",
  },
};

const sizeVariants = {
  sm: {
    title: "text-[0.625rem] tracking-[1.2px]",
    value: "text-2xl leading-7 tracking-[-0.5px]",
    subtitle: "text-[0.688rem]",
    padding: "p-6",
  },

  md: {
    title: "text-[0.688rem] tracking-[1.5px]",
    value: "text-[2rem] leading-8 tracking-[-1px]",
    subtitle: "text-xs",
    padding: "p-5",
  },
};

const textColorVariants = {
  default: {
    title: "text-cyan4A7A74",
    subtitle: "text-cyan4A7A74",
    value: "text-cyan64",
  },

  muted: {
    title: "text-blue46",
    subtitle: "text-blue70",
    value: "text-blue70",
  },

  danger: {
    title: "text-red60/40",
    subtitle: "text-red60/40",
    value: "text-red60",
  },

  warning: {
    title: "text-orangeFB",
    subtitle: "text-orange50",
    value: "text-orange50",
  },

  violet: {
    title: "text-blue75",
    subtitle: "text-violet85",
    value: "text-violet75",
  },
};

export const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  variant = "primary",
  size = "md",
  textColor = "default",
}: Props) => {
  const cardStyle = cardVariants[variant];
  const sizeStyle = sizeVariants[size];
  const textStyle = textColorVariants[textColor];

  const Icon = icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-indigo30",
        "border border-borderColor/18",
        "transition-all duration-300 hover:scale-[1.02]",
        sizeStyle.padding,
      )}
    >
      {/* Glow */}
      <div className={cn("absolute -top-12 -right-12", cardStyle.glow)} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center lg:items-start gap-2">
        {Icon && <div className="mb-6"> <Icon /></div>}
        <div className="flex items-center justify-between">
          <p
            className={cn(
              "font-bold uppercase leading-[160%] ",
              sizeStyle.title,
              textStyle.title,
            )}
          >
            {title}
          </p>
        </div>

        <h2 className={cn("font-extrabold", cardStyle.value, sizeStyle.value)}>
          {value}
        </h2>

        <p
          className={cn("font-normal ", sizeStyle.subtitle, textStyle.subtitle)}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
