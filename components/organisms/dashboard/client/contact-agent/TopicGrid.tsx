
import {
  AppointmentsIcon,
  FileIcon,
  InvoiceIcon,
  Other,
  WillStatus,
  WillUpdate,
} from "@/components/atoms/icons";

const TopicGrid = () => {
  const topics = [
    { title: "Appointment", icon: <AppointmentsIcon className="w-7 h-7"/>, active: true },
    { title: "Will Query", icon: <WillStatus className="w-7 h-7"/>, active: false },
    { title: "Invoice", icon: <InvoiceIcon className="text-white w-7 h-7"/>, active: false },
    { title: "Document", icon: <FileIcon className="text-white w-7 h-7"/>, active: false },
    { title: "Will Update", icon: <WillUpdate  />, active: false },
    { title: "Other", icon: <Other />, active: false },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {topics.map((topic, idx) => (
        <button
          key={idx}
          className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-all duration-200 gap-3 cursor-pointer
              ${
                topic.active
                  ? "bg-blue19 border-blue66 shadow-[0_0_15px_rgba(123,92,246,0.2)]"
                  : "bg-blue10 border-borderColor/32 hover:border-blue46"
              }`}
        >
          <div className={`${topic.active ? "text-white" : "text-blue70"}`}>
            {topic.icon}
          </div>
          <span
            className={`text-sm font-semibold ${topic.active ? "text-blue85" : "text-blue46"}`}
          >
            {topic.title}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TopicGrid;
