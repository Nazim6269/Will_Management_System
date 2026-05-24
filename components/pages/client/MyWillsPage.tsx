import DocumentInfoCard from "@/components/organisms/dashboard/client/my-will/DocInfo";
import NeedChangesCard from "@/components/organisms/dashboard/client/my-will/NeedChange";
import WillContent from "@/components/organisms/dashboard/client/my-will/WillContent";


const MyWillsPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
      {/* Left Content */}
      <div className="xl:col-span-9">
        <WillContent />
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col gap-4 xl:col-span-3">
        <DocumentInfoCard />
        <NeedChangesCard />
      </div>
    </div>
  );
};

export default MyWillsPage;
