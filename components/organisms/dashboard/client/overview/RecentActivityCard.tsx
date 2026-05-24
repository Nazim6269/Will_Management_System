"use client";

import { cva } from "class-variance-authority";
import {
  PdfIcon,
  ClientInvoice,
  AlarmColckIcon,
} from "@/components/atoms/icons";
import { useRouter } from "next/navigation";

interface ActivityItem {
  icon: React.ElementType;
  boldText: string;
  restText: string;
  date: string;
  variant: "cyan" | "blue" | "orange";
  href?: string;
}

const iconWrapper = cva(
  "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[9px] border",
  {
    variants: {
      variant: {
        cyan: "bg-cyan5212/10 border-borderColor/32",
        blue: "bg-borderColor/12 border-borderColor/32",
        orange: "bg-orang50/10 border-borderColor/32",
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  },
);

interface RecentActivityCardProps {
  activities?: ActivityItem[];
}

export default function RecentActivityCard({
  activities,
}: RecentActivityCardProps) {
  const router = useRouter();

  const defaultActivities: ActivityItem[] = [
    {
      icon: PdfIcon,
      boldText: "Will PDF",
      restText: "generated and ready",
      date: "27 Mar 2026",
      variant: "cyan",
      href: "/dashboard/client/my-wills",
    },
    {
      icon: ClientInvoice,
      boldText: "Invoice INV-0025",
      restText: "sent to your email",
      date: "27 Mar 2026",
      variant: "blue",
    },
    {
      icon: AlarmColckIcon,
      boldText: "Appointment booked",
      restText: "- Apr 18 @ 10AM",
      date: "25 Mar 2026",
      variant: "orange",
    },
  ];

  const displayActivities = activities || defaultActivities;

  return (
    <div className="w-full   rounded-2xl border border-borderColor/18 bg-blue14 p-6 mt-4">
      <h2 className="mb-3 text-base font-bold leading-6 text-blueF0">
        Recent Activity
      </h2>

      <div className="flex flex-col">
        {displayActivities.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              onClick={() => item.href && router.push(item.href)}
              className={`flex items-start gap-3 py-3 ${
                i !== 0 ? "border-t border-borderColor/18" : ""
              } ${item.href ? "cursor-pointer hover:bg-borderColor/5 transition-colors" : ""}`}
            >
              {/* Icon */}
              <div className={iconWrapper({ variant: item.variant })}>
                <Icon className="w-4 h-4" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm leading-[1.45] text-blue70">
                  <span className="font-bold text-blueF0">{item.boldText}</span>{" "}
                  {item.restText}
                </p>
                <span className="text-[11px] text-blue46">{item.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
