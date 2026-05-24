import { cn } from "@/lib/utils";
import { activityIconVariants, ActivityIconVariants } from "./activityIcon.variant";



type Props = ActivityIconVariants & {
  icon: React.ReactNode;
  className?: string;
};

export const ActivityIcon = ({ type, icon, className }: Props) => {
  return (
    <div className={cn(activityIconVariants({ type }), className)}>
      {icon}
    </div>
  );
};