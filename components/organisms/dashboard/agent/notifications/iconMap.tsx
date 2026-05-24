import {
  FileText,
  Calendar,
  CalendarCheck,
  CalendarX,
  LogIn,
} from "lucide-react";

export const iconMap: Record<
  string,
  { icon: React.ReactNode; bg: string; border: string; color: string }
> = {
  invoice: {
    icon: <FileText size={16} />,
    bg: "bg-green-950/60",
    border: "border-green-800/50",
    color: "text-green-400",
  },
  calendar: {
    icon: <Calendar size={16} />,
    bg: "bg-sky-950/60",
    border: "border-sky-800/50",
    color: "text-sky-400",
  },
  calcheck: {
    icon: <CalendarCheck size={16} />,
    bg: "bg-sky-950/60",
    border: "border-sky-800/50",
    color: "text-sky-400",
  },
  calx: {
    icon: <CalendarX size={16} />,
    bg: "bg-red-950/60",
    border: "border-red-800/50",
    color: "text-red-400",
  },
  will: {
    icon: <FileText size={16} />,
    bg: "bg-violet-950/60",
    border: "border-violet-800/50",
    color: "text-violet-400",
  },
  login: {
    icon: <LogIn size={16} />,
    bg: "bg-violet-950/60",
    border: "border-violet-800/50",
    color: "text-violet-400",
  },
};
