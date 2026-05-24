import { AppointmentsIcon, ClientAppointment, ClientInvoice, InvoiceIcon, WillStatus } from "@/components/atoms/icons";
import { StatCard } from "@/components/molecules/shared/statCard/StatCard";
import { StatItem } from "@/constants/stat";

const statData: StatItem[] = [
  {
    title: "Will Status",
    value: "Completed",
    subtitle: "Generated Mar 27, 2026",
    variant: "primary",
    textColor: "default",
    icon:WillStatus
  },
  {
    title: "Invoices",
    value: "1 Unpaid",
    subtitle: "£149 due Apr 20, 2026",
    variant: "violet",
    textColor: "violet",
    icon:ClientInvoice
  },
  {
    title: "Next Appointment",
    value: "Apr 18",
    subtitle: "10:00 AM with James T.",
    variant: "danger",
    textColor: "danger",
    icon:ClientAppointment
  },
];

const ClientStatGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
      {statData.map((item, index) => (
        <StatCard key={index} {...item} size="sm"/>
      ))}
    </div>
  );
};

export default ClientStatGrid;
