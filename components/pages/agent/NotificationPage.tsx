"use client";
import Header from "../../organisms/dashboard/agent/notifications/Header";
import NotificationList from "../../organisms/dashboard/agent/notifications/NotificationList";
import EmailPref from "../../organisms/dashboard/agent/notifications/EmailPref";
import PushNotification from "../../organisms/dashboard/agent/notifications/PushNotification";

const NotificationPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="col-span-1 lg:col-span-9 flex-1 flex flex-col border-r border-borderColor/18 min-w-0 rounded-2xl overflow-hidden border bg-blue14">
        <Header />

        <NotificationList />
      </div>

      <div className="col-span-1 lg:col-span-3 shrink-0 flex flex-col divide-y divide-borderColor/18 overflow-y-auto">
        <EmailPref />

        <PushNotification />
      </div>
    </div>
  );
};

export default NotificationPage;
