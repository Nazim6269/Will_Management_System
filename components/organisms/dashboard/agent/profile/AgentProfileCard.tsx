"use client";

import { Pencil, User } from "lucide-react";
import Image from "next/image";

interface StatItem {
  label: string;
  value: number;
}

interface AgentProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  avatarUrl?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { label: "Clients", value: 24 },
  { label: "Wills", value: 18 },
  { label: "Invoices", value: 31 },
];

export default function AgentProfileCard({
  name = "James Thornton",
  role = "Senior Agent",
  email = "james@inherix.co",
  avatarUrl,
  stats = defaultStats,
}: AgentProfileCardProps) {
  return (
    <div className="w-full  rounded-2xl border border-borderColor/18 bg-blue14 overflow-hidden">
      {/* Top section */}
      <div className="flex flex-col items-center px-6 pb-6 pt-8">
        {/* Avatar */}
        <div className="relative mb-5">
          <div className="h-[100px] w-[100px] overflow-hidden rounded-full border-[3px] border-borderColor/18 bg-blue9">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/User.jpg"
                  alt={name}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          {/* Edit badge */}
          <div className="absolute bottom-0.5 right-0.5 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-blue8 bg-blue66">
            <Pencil className="h-3.5 w-3.5 text-white" />
          </div>
        </div>

        {/* Name */}
        <h2 className="mb-3 text-lg font-extrabold leading-[160%] tracking-[-0.5px] text-gray96">
          {name}
        </h2>

        {/* Role badge */}
        <div className="mb-3 rounded-full border border-borderColor/18 bg-borderColor/18 px-3 py-1">
          <span className="text-xs font-semibold text-violet85">{role}</span>
        </div>

        {/* Email */}
        <span className="text-xs text-cyan4A7A74">{email}</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x divide-borderColor/18 border-t border-borderColor/18">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 py-5"
          >
            <span className="text-[1.375rem] font-extrabold leading-none text-violet85">
              {stat.value}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.8px] text-cyan4A7A74">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
