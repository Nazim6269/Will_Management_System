import GenericButton from "@/components/atoms/GenericButton";
import CreateActions from "@/components/organisms/dashboard/admin/create-agent/CreateActions";
import PersonalDetailsForm from "@/components/organisms/dashboard/admin/create-agent/PersonalDeatils";
import PersonalInfoForm from "@/components/organisms/dashboard/admin/create-agent/PersonalInfoForm";
import React from "react";
import CreateHeader from "@/components/molecules/admin/CreateHeader";
import AccountSetupForm from "@/components/organisms/dashboard/admin/create-agent/AccountSetup";

const CreateAgent = () => {
  return (
    <div>
      <CreateHeader variant="agent" />

      <PersonalInfoForm />
      <PersonalDetailsForm />
      <AccountSetupForm/>

      <CreateActions variant="agent" />
    </div>
  );
};

export default CreateAgent;
