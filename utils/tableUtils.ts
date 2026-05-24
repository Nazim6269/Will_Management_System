import { InvoiceStatus, Status } from "@/constants/recentClients";

export const getStatusColor = (status: string) => {
  const lowerStatus = status.toLowerCase();

  if (lowerStatus.includes("paid") && !lowerStatus.includes("unpaid")) {
    return "bg-cyan5212/10 text-cyan64 border border-cyan5212/20";
  }
  if (lowerStatus.includes("unpaid")) {
    return "bg-red60/10 text-red60 border border-red60/12";
  }
  if (lowerStatus.includes("pending") || lowerStatus.includes("not started")) {
    return "bg-borderColor/15 text-violet85 border border-borderColor/22";
  }
  if (lowerStatus.includes("in progress")) {
    return "bg-orange50/10 text-orange50 border border-orange50/20";
  }
  if (
    lowerStatus.includes("complete") ||
    lowerStatus.includes("will complete")
  ) {
    return "bg-cyan5212/10 text-cyan64 border border-cyan5212/20";
  }
  if (
    lowerStatus.includes("confirmed") ||
    lowerStatus.includes("will confirm")
  ) {
    return "bg-springGreen2/10 text-springGreen4E border border-springGreen2/20";
  }
  if (lowerStatus.includes("cancelled")) {
    return "bg-red60/10 text-red60 border border-red60/20";
  }
  if (lowerStatus.includes("draft")) {
    return "bg-blue66/12 text-blue66 border border-blue66/20";
  }
  if (lowerStatus.includes("overdue")) {
    return "bg-orange50/10 text-orange50 border border-orange50/20";
  }
  if (lowerStatus.includes("active")) {
    return "bg-cyan5212/10 text-cyan64 border border-cyan5212/20";
  }
  if (lowerStatus.includes("inactive")) {
    return "bg-red60/10 text-red60 border border-red60/20";
  }

  return "bg-borderColor/15 text-violet85 border border-borderColor/22";
};

export const getWillStatusColor = (status: Status) => getStatusColor(status);
export const getInvoiceStatusColor = (status: InvoiceStatus) =>
  getStatusColor(status);
