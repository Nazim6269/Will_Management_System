export interface Notification {
  id: number;
  icon: string;
  title: string;
  desc: string;
  time: string;
  unread: boolean;
}

export const notificationsData: Notification[] = [
  {
    id: 1,
    icon: "invoice",
    title: "Invoice payment received",
    desc: "Sarah Johnson paid invoice INV-0031 for £750. Payment confirmed via Stripe.",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    icon: "calendar",
    title: "Appointment request from Michael Brown",
    desc: "Michael has requested a Will Review appointment on 08 Apr 2026 at 2:00 PM. Pending your approval.",
    time: "18 minutes ago",
    unread: true,
  },
  {
    id: 3,
    icon: "invoice",
    title: "Invoice overdue - Jennifer Scott",
    desc: "Invoice INV-0027 (£800) is now 22 days overdue. Consider sending a payment reminder.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    icon: "calcheck",
    title: "Appointment confirmed by Emma Williams",
    desc: "Emma has confirmed the Asset Discussion appointment on 06 Apr at 3:00 PM.",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 5,
    icon: "will",
    title: "Will form submitted - Thomas Wright",
    desc: "Thomas has completed his Will Form. The PDF has been generated and is available for review.",
    time: "Yesterday, 4:12 PM",
    unread: true,
  },
  {
    id: 6,
    icon: "invoice",
    title: "New invoice created - Patricia Hale",
    desc: "Invoice INV-0025 for £120 (Vault Storage) has been sent to Patricia Hale.",
    time: "Yesterday, 11:40 AM",
    unread: true,
  },
  {
    id: 7,
    icon: "calx",
    title: "Appointment cancelled - Robert Adams",
    desc: "Robert Adams has cancelled his Will Review appointment scheduled for 01 Apr 2026.",
    time: "2 days ago",
    unread: true,
  },
  {
    id: 8,
    icon: "invoice",
    title: "Invoice paid - David Clarke",
    desc: "David Clarke paid INV-0028 (£120 Vault Storage). Status updated to Paid.",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 9,
    icon: "login",
    title: "New login from London, UK",
    desc: "A new sign-in was detected on your account from Chrome on MacOS. If this wasn't you, change your password immediately.",
    time: "5 days ago",
    unread: false,
  },
];

export const TABS = ["All", "Unread", "Invoices", "Appointments"];

export const emailPrefs = [
  { label: "Invoice Payments", sub: "When a client pays an invoice", on: true },
  {
    label: "Appointment Requests",
    sub: "New booking requests from clients",
    on: true,
  },
  {
    label: "Overdue Invoices",
    sub: "Daily reminders for unpaid invoices",
    on: true,
  },
  {
    label: "Will Submissions",
    sub: "When a client completes a will form",
    on: true,
  },
  {
    label: "Cancellations",
    sub: "Appointment cancellations & changes",
    on: false,
  },
  {
    label: "Security Alerts",
    sub: "New logins and account activity",
    on: true,
  },
  {
    label: "System Updates",
    sub: "Product news and feature releases",
    on: false,
  },
];

export const pushPrefs = [
  { label: "Enable Push Alerts", sub: "Show browser notifications", on: true },
  { label: "Sound Alerts", sub: "Play a sound on new notification", on: false },
];
