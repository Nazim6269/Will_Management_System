import CreateHeader from "@/components/molecules/admin/CreateHeader";
import AccountSetupForm from "@/components/organisms/dashboard/admin/create-agent/AccountSetup";
import CreateActions from "@/components/organisms/dashboard/admin/create-agent/CreateActions";
import PersonalInfoForm from "@/components/organisms/dashboard/admin/create-agent/PersonalInfoForm";

const CreateClient = () => {
  return (
    <div>
      <CreateHeader variant="client" /> 
      
      <PersonalInfoForm />
      
      <AccountSetupForm variant="client"/>

      <CreateActions variant="client" />
    </div>
  );
};

export default CreateClient;
