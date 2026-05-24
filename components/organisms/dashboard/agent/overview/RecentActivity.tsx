import React from "react";
import { ActivityItem } from "./activity/ActivityItem";

export const activities = [
  {
    id: "1",
    type: "pdf",
    title: (
      <>
        <span className="text-gray96 font-medium text-sm">Sarah Johnson’s</span> will PDF generated
      </>
    ),
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "payment",
    title: (
      <>
        <span className="text-gray96 font-medium text-sm">David Clarke</span> paid invoice £149
      </>
    ),
    time: "Yesterday",
  },
  {
    id: "3",
    type: "appointment",
    title: (
      <>
        New appointment booked by <span className="text-gray96 font-medium text-sm">Emma Williams</span>
      </>
    ),
    time: "2 days ago",
  },

] as const;

const RecentActivity = () => {
  return (
    <div className="bg-borderColor/15 border border-borderColor/15 rounded-2xl">
      <div className="dashboard-section-heading py-4.5 px-6 border-b border-borderColor/15">
        Recent Activity
      </div>
      <div className="flex flex-col">
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            type={activity.type}
            title={activity.title}
            time={activity.time}
          />
        ))}
      </div>
    </div>
  );
};


export default RecentActivity;
