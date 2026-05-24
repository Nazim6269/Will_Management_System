import GenericButton from "@/components/atoms/GenericButton";
import User from "@/components/molecules/client/profile/User";
import React from "react";

const WillWriter = () => {
  return (
    <div className="w-full flex flex-col gap-3   rounded-2xl border border-borderColor/18 bg-blue14 p-5 sm:p-6 mt-6">
      <h2 className="px-3 py-3 sm:px-5.5 sm:py-4.5 border-b border-borderColor/32 text-gray96 text-base font-bold text-center sm:text-left">
        Your will writer
      </h2>
      <User
        name="James Thornton"
        email="james@inherix.com"
        memberSince="Certified Will Writer - SWW"
        avatarUrl="/avatar.png"
        isActive={true}
      />
      <GenericButton title="Send Message" variant={"outline"} fullWidth />
    </div>
  );
};

export default WillWriter;
