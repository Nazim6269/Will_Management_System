import {
  CallIcon,
  EmailIcon,
  OfficeIcon,
  ScheduleIcon,
} from "@/components/atoms/icons";
export const contactData = [
  {
    id: 1,
    icon: EmailIcon,
    title: "Email us",
    type: "email",
    items: [
      { label: "Primary", value: "hello@inherix.com" },
      { label: "Support", value: "support@inherix.com" },
    ],
  },
  {
    id: 2,
    icon: CallIcon,
    title: "Call us",
    type: "phone",
    items: [
      { value: "+44 (0) 800 123 4567" },
      { value: "Mon–Fri, 9am–6pm GMT" },
    ],
  },
  {
    id: 3,
    icon: OfficeIcon,
    title: "Our office",
    type: "address",
    items: [
      { value: "12 Estate Lane, London" },
      { value: "EC1A 1BB, United Kingdom" },
    ],
  },
  {
    id: 4,
    icon: ScheduleIcon,
    title: "Business hours",
    type: "hours",
    items: [
      { value: "Monday – Friday: 09:00 AM – 06:00 PM" },
      { value: "Saturday: 10:00 AM – 02:00 PM" },
    ],
  },
];
