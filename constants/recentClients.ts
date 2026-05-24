export type Status = "Complete" | "In Progress" | "Draft" | "Not Started";

export type InvoiceStatus = "Paid" | "Unpaid" | "Pending" | "Overdue";

export type Client = {
  name: string;
  email: string;
  willStatus: Status;
  invoice: InvoiceStatus;
  nextAppointment: string | null;
};

export const recentClients: Client[] = [
  {
    name: "Sarah Johnson",
    email: "sarah@email.com",
    willStatus: "Complete",
    invoice: "Paid",
    nextAppointment: "Apr 18",
  },
  {
    name: "Michael Brown",
    email: "m.brown@email.com",
    willStatus: "In Progress",
    invoice: "Unpaid",
    nextAppointment: "Mar 29",
  },
  {
    name: "Emma Williams",
    email: "emma.w@email.com",
    willStatus: "Draft",
    invoice: "Pending",
    nextAppointment: "Apr 2",
  },
  {
    name: "David Clarke",
    email: "d.clarke@email.com",
    willStatus: "Complete",
    invoice: "Paid",
    nextAppointment: null,
  },
  {
    name: "Jennifer Scott",
    email: "jen.s@email.com",
    willStatus: "Not Started",
    invoice: "Unpaid",
    nextAppointment: "Mar 28",
  },
];
