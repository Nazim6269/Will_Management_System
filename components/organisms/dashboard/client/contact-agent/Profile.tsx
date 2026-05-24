import User from "@/components/molecules/client/profile/User";
import React from "react";

const ProfileCard = () => {
  const profileData = [
    { label: "Email", value: "james@inherix.com" },
    { label: "Phone", value: "+44 7700 900100" },
    { label: "Response Time", value: "Usually within 2 hours" },
    { label: "Working Hours", value: "Mon–Fri, 9AM–6PM (GMT)" },
  ];

  return (
    <div className="w-full rounded-2xl border border-borderColor/18 overflow-hidden p-4 bg-blue14">
      {/* Profile Header Section */}

      <User
        name="James Thornton"
        email="[EMAIL_ADDRESS]"
        memberSince="2022"
        avatarUrl="/avatar.png"
        isActive={true}
      />

      {/* Info Rows */}
      <div className="">
        <div className="divide-y divide-blue16 border-t border-blue16">
          {profileData.map((info, index) => (
            <div key={index} className="flex justify-between py-3 group">
              <span className="text-blue46 text-sm font-medium font-plus-jakarta">
                {info.label}
              </span>
              <span className="text-blue70 text-sm font-semibold font-plus-jakarta group-hover:text-white transition-colors">
                {info.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
