import ChangePasswordForm from "@/components/organisms/dashboard/client/profile/ChangePassword";
import NotificationSettingsCard from "@/components/organisms/dashboard/client/profile/NotificationSetting";
import PrimaryBeneficiaryForm from "@/components/organisms/dashboard/client/profile/PrimaryBenificiary";
import ClientProfileBanner from "@/components/organisms/dashboard/client/profile/ProfileBanner";
import WillWriter from "@/components/organisms/dashboard/client/profile/WillWriter";
import React from "react";

const Profile = () => {
  return (
    <div>
      <ClientProfileBanner />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <PrimaryBeneficiaryForm />
        </div>
        <div className="lg:col-span-5">
          <ChangePasswordForm />
          <NotificationSettingsCard />
          <WillWriter />
        </div>
      </div>
    </div>
  );
};

export default Profile;
