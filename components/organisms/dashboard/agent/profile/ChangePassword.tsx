import GenericTableHeader from "@/components/molecules/shared/GenericTableHeader";
import PassForm from "./PassForm";

const ChangePassword = () => {
  return (
    <div className="w-full bg-blue14 rounded-[20px] border border-borderColor/18">
      <GenericTableHeader
        title="Change Password"
        subtitle="Use a strong password you don't use elsewhere"
      />
      <PassForm />
    </div>
  );
};

export default ChangePassword;
