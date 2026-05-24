import Image from "next/image";
import React from "react";

interface UserProps {
  name: string;
  email: string;
  memberSince: string;
  avatarUrl?: string;
  isActive?: boolean;
}

const User = ({ name, email, memberSince, avatarUrl, isActive }: UserProps) => {
  return (
    <div className="flex flex-col xl:flex-row  items-center justify-between mb-4">
      <div className="flex flex-col xl:flex-row items-center gap-3.5">
        {/* Avatar */}
        <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full border-2 border-borderColor/18 bg-blue10">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={name}
              width={52}
              height={52}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src="/User.jpg"
                alt={name}
                width={52}
                height={52}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col text-center xl:text-left">
          <p className="text-xl sm:text-2xl font-bold text-blueF0 mb-0.5">
            {name}
          </p>
          <p className="text-base text-blue46 mb-0.5">{email}</p>
          <p className="text-sm font-normal text-borderColor/60">
            {memberSince}
          </p>
        </div>
      </div>

      {/* Active badge */}
      {isActive && (
        <span className="rounded-full border border-springGreen2/20 bg-springGreen2/10 px-4.5 py-2 text-xs font-bold text-springGreen2 whitespace-nowrap mt-4 xl:mt-0">
          ✓ Active
        </span>
      )}
    </div>
  );
};

export default User;
