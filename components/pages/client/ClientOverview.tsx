import WelcomeCard from "@/components/molecules/shared/WelcomeCard";
import {
  ClientStatGrid,
  QuickAction as QuickActionsCard,
  WillDocCard as WillDocumentCard,
  UpcomingAppointmentCard,
  RecentActivityCard,
  OutstandingInvoiceCard,
} from "@/components/organisms/dashboard/client/overview";

const ClientOverview = () => {
  return (
    <div>
      <WelcomeCard />
      <ClientStatGrid />
      <div className="grid xl:grid-cols-12 gap-6">
        <div className="xl:col-span-9">
          <WillDocumentCard />
          <OutstandingInvoiceCard />
        </div>
        <div className="xl:col-span-3">
          <QuickActionsCard />
          <UpcomingAppointmentCard />
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
};

export default ClientOverview;
