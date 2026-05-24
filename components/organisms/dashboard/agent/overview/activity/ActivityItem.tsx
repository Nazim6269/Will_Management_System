import { FileText, Receipt, Calendar } from "lucide-react";
import { ActivityIcon } from "./ActivityIcon";

const iconMap = {
  pdf: <FileText size={18} />,
  payment: <Receipt size={18} />,
  appointment: <Calendar size={18} />,
};

type ActivityType = keyof typeof iconMap;

type ActivityItemProps = {
  type: ActivityType;
  title: React.ReactNode;
  time: string;
};

export const ActivityItem = ({ type, title, time }: ActivityItemProps) => {
  return (
    <div className="flex items-start gap-4 px-6 py-4 border-b border-borderColor/15 hover:bg-white/5 transition-colors last:border-b-0">
      <ActivityIcon type={type} icon={iconMap[type]} />

      <div className="flex flex-col">
        <p className="text-sm leading-6 text-cyan4A7A74">{title}</p>
        <span className="text-xs text-cyan4A7A74 mt-1">{time}</span>
      </div>
    </div>
  );
};
