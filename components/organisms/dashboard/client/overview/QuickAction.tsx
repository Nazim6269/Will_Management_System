"use client";

import {
  ClientAppointment,
  ClientInvoice,
  Profile,
  WillStatus,
} from "@/components/atoms/icons";
import { useRouter } from "next/navigation";

interface QuickAction {
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

interface QuickActionsCardProps {
  actions?: QuickAction[];
}

export default function QuickActionsCard({
  actions,
}: QuickActionsCardProps) {
  const router = useRouter();

  const defaultActions: QuickAction[] = [
    { 
      label: "View Will", 
      icon: <WillStatus className="w-7 h-7" />,
      href: "/dashboard/client/my-wills"
    },
    { 
      label: "Pay Invoice", 
      icon: <ClientInvoice className="w-7 h-7" />,
      onClick: () => alert("Redirecting to payment...") 
    },
    { 
      label: "Book Appt.", 
      icon: <ClientAppointment className="w-7 h-7" />,
      onClick: () => alert("Opening booking calendar...")
    },
    { 
      label: "My Profile", 
      icon: <Profile className="w-7 h-7 text-white"/>,
      onClick: () => alert("Navigating to profile...")
    },
  ];

  const displayActions = actions || defaultActions;

  const handleActionClick = (action: QuickAction) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      router.push(action.href);
    }
  };

  return (
    <div className="w-full gradient-border-top rounded-2xl border border-borderColor/18 bg-blue14 p-5 mt-4">
      {/* Header */}
      <h2 className="mb-4 text-base font-bold leading-6 text-blueF0">
        Quick Actions
      </h2>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {displayActions.map((action) => (
          <button
            key={action.label}
            onClick={() => handleActionClick(action)}
            className="flex flex-col items-center justify-center gap-2.5 rounded-[14px]
              border border-borderColor/18 bg-blue10 p-4
              transition-colors duration-150 hover:bg-borderColor/10"
          >
            {action.icon}

            <span className="text-xs font-semibold text-blue70">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
