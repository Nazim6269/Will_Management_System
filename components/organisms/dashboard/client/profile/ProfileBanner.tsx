"use client";

import User from "@/components/molecules/client/profile/User";
import Image from "next/image";

interface StatItem {
  value: number;
  label: string;
  valueClassName: string;
}

interface ClientProfileBannerProps {
  name?: string;
  email?: string;
  memberSince?: string;
  avatarUrl?: string;
  isActive?: boolean;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: 2, label: "Will Complete", valueClassName: "text-violet85" },
  { value: 3, label: "Invoices Paid", valueClassName: "text-[#2DD4BF]" },
  { value: 5, label: "Appointments", valueClassName: "text-[#F87171]" },
];

export default function ClientProfileBanner({
  name = "Sarah Johnson",
  email = "sarah.j@email.com",
  memberSince = "Client since March 2026",
  avatarUrl,
  isActive = true,
  stats = defaultStats,
}: ClientProfileBannerProps) {
  return (
    <div className="w-full   rounded-2xl border border-borderColor/18 bg-blue14 p-5 sm:p-6">
      <User
        name={name}
        email={email}
        memberSince={memberSince}
        avatarUrl={avatarUrl}
        isActive={isActive}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 rounded-[10px] border border-borderColor/18 bg-[#16102F] py-3.5"
          >
            <span
              className={`text-2xl font-bold leading-none ${stat.valueClassName}`}
            >
              {stat.value}
            </span>
            <span className="text-base font-medium uppercase tracking-[2px] text-blue46">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
