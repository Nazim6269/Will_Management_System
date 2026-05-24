export interface Appointment {
  id: string;
  day: string;
  month: string;
  title: string;
  with: string;
  time: string;
  duration: string;
  format: string;
  status: "confirmed" | "completed" | "pending";
  zoomUrl?: string;
}

export const UPCOMING: Appointment[] = [
  {
    id: "1",
    day: "18",
    month: "APRIL",
    title: "Will Review Discussion",
    with: "James Thornton - Will Writer",
    time: "10:00 AM",
    duration: "45 mins",
    format: "Zoom Video Call",
    status: "confirmed",
    zoomUrl: "#",
  },
];

export const PAST: Appointment[] = [
  {
    id: "2",
    day: "27",
    month: "MARCH",
    title: "Initial Consultation",
    with: "James Thornton - Will Writer",
    time: "10:00 AM",
    duration: "60 mins",
    format: "Zoom",
    status: "completed",
  },
  {
    id: "3",
    day: "24",
    month: "MARCH",
    title: "Will Form Data Collection",
    with: "James Thornton - Will Writer",
    time: "2:00 PM",
    duration: "45 mins",
    format: "Phone Call",
    status: "completed",
  },
];

export const APPT_TYPES = [
  { label: "Initial Consultation", value: "initial" },
  { label: "Will Review Discussion", value: "review" },
  { label: "Will Form Data Collection", value: "collection" },
];

export const TIME_OPTIONS = [
  { label: "09:00 AM", value: "09:00" },
  { label: "10:00 AM", value: "10:00" },
  { label: "11:00 AM", value: "11:00" },
  { label: "02:00 PM", value: "14:00" },
  { label: "03:00 PM", value: "15:00" },
];

export const FORMAT_OPTIONS = [
  { label: "Zoom Video Call", value: "zoom" },
  { label: "Phone Call", value: "phone" },
  { label: "In Person", value: "person" },
];

export const labelClass =
  "text-blue46 mb-[0.438rem] text-xs uppercase font-semibold tracking-[0.3px] leading-[19.2px]";

export const statusConfig = {
  confirmed: {
    label: "Confirmed",
    className: "bg-[#1E1C38] border-violet85/40 text-violet85",
  },
  completed: {
    label: "Completed",
    className: "bg-blue10 border-borderColor/18 text-blue46",
  },
  pending: {
    label: "Pending",
    className: "bg-amber-950/50 border-amber-500/40 text-amber-400",
  },
};
