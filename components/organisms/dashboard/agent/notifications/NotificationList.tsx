import { notificationsData } from "@/constants/notificationData";
import { iconMap } from "./iconMap";

export default function NotificationList() {
  return (
    <div className="flex flex-col">
      {notificationsData.map((n) => {
        const ic = iconMap[n.icon];
        return (
          <div
            key={n.id}
            className={`flex items-start gap-3 px-5 py-4 border-b border-b-borderColor/18
                  ${n.unread ? "border-l-2 border-blue66" : "border-l-2 border-transparent"}`}
          >
            <div
              className={`w-9 h-9 rounded-[10px]  flex items-center justify-center shrink-0
                  ${ic.bg}`}
            >
              {ic.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xm font-semibold text-gray96 mb-0.5">
                {n.title}
              </p>
              <p className="text-xs text-cyan65 leading-normal mb-1">
                {n.desc}
              </p>
              <p className="text-xs text-cyan4A7A74">{n.time}</p>
            </div>
            {n.unread && (
              <div className="w-2 h-2 rounded-full bg-blue66 shrink-0 mt-1.5" />
            )}
          </div>
        );
      })}
    </div>
  );
}
