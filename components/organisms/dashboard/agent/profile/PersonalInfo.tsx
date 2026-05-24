import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import InfoForm from "./InfoForm";

const PersonalInfo = () => {
  return (
    <div className="w-full bg-blue14 rounded-2xl border border-borderColor/18">
      <GenericTableHeader
        title="Personal Information"
        subtitle="Update your name, contact and bio"
      />
      <InfoForm />
    </div>
  );
};

export default PersonalInfo;
