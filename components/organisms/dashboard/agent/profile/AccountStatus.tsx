"use client";

interface AccountStatusCardProps {
  isActive?: boolean;
  isEmailVerified?: boolean;
  isTwoFactorOn?: boolean;
  memberSince?: string;
}

export default function AccountStatusCard({
  isActive = true,
  isEmailVerified = true,
  isTwoFactorOn = false,
  memberSince = "Jan 2025",
}: AccountStatusCardProps) {
  return (
    <div className="w-full  overflow-hidden rounded-2xl border border-borderColor/18 bg-blue14 mt-5">
      {/* Header */}
      <div className="px-6 py-5">
        <h2 className="text-base font-extrabold leading-[160%] tracking-[-0.3px] text-gray96">
          Account Status
        </h2>
      </div>

      {/* Rows */}
      <div className="border-t border-borderColor/18">
        {/* Account */}
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-sm  text-cyan65">Account</span>
          <div className="flex items-center gap-1.5 rounded-full border border-springGreen2/10 bg-springGreen2/20 px-3.5 py-1.5">
            <span className="h-2 w-2 rounded-full bg-springGreen2" />
            <span className="text-xs font-bold text-springGreen2">Active</span>
          </div>
        </div>

        {/* Email Verified */}
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-sm  text-cyan65">Email Verified</span>
          <div className="flex items-center gap-1.5 rounded-full border border-springGreen2/10 bg-springGreen2/20 px-3.5 py-1.5">
            <span className="text-xs font-bold text-springGreen2">
              ✓ Verified
            </span>
          </div>
        </div>

        {/* Two-Factor Auth */}
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-sm  text-cyan65">Two-Factor Auth</span>
          <div className="flex items-center gap-1.5 rounded-full border border-orange50/20 bg-orange50/10 px-3.5 py-1.5">
            <span className="text-xs font-bold text-orange50">⚠ Off</span>
          </div>
        </div>

        {/* Member Since */}
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-sm  text-cyan65">Member Since</span>
          <span className="text-sm font-semibold text-gray96">
            {memberSince}
          </span>
        </div>
      </div>
    </div>
  );
}
