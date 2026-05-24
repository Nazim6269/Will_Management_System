export type Status = "Complete" | "In Progress" | "Draft" | "Not Started";

export type InvoiceStatus = "Paid" | "Unpaid" | "Pending";

export type Client = {
  name: string;
  email: string;
  willStatus: Status;
  invoice: InvoiceStatus;
  nextAppointment: string | null;
};
