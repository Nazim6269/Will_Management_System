import Image from "next/image";
import { Pencil, Eye, Trash2 } from "lucide-react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
interface Agent {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  clients: number;
  wills: number;
  revenue: string;
  status: "Active" | "Inactive";
}
interface AgentCardProps {
  agent: Agent;
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function AgentCard({ agent, onEdit, onView, onDelete }: AgentCardProps) {
  return (
    <div className="flex flex-col gap-3.5 rounded-[14px] border border-borderColor/18 bg-blue14 p-4  -two">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Avatar */}
          <div className="h-[42px] w-[42px] flex-shrink-0 overflow-hidden rounded-full border-2 border-borderColor/18 bg-blue10">
            {agent.avatarUrl ? (
              <Image
                src={agent.avatarUrl}
                alt={agent.name}
                width={42}
                height={42}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[14px] font-bold text-violet85">
                {getInitials(agent.name)}
              </div>
            )}
          </div>
          {/* Name + email */}
          <div className="min-w-0">
            <p className="truncate text-[1.25rem] font-bold text-blueF0">
              {agent.name}
            </p>
            <p className="truncate text-sm text-borderColor/60">
              {agent.email}
            </p>
          </div>
        </div>
        {/* Status badge */}
        <span className="flex-shrink-0 rounded-full border border-springGreen2/20 bg-springGreen2/10 px-3 py-1 text-[11px] font-bold text-springGreen2">
          {agent.status}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4  py-3">
        {[
          { label: "Clients", value: agent.clients },
          { label: "Wills", value: agent.wills },
          { label: "Revenue", value: agent.revenue },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col px-1.5 py-3 items-center gap-1 bg-[#0F0B22] rounded-md">
            <span className="text-2xl font-black leading-none text-violet85">
              {stat.value}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[1px] text-blue46">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between gap-2">
        <button
          onClick={() => onEdit?.(agent.id)}
          className="flex items-center gap-1.5 rounded-[8px] border border-borderColor/18 bg-blue10 px-3.5 py-1.5 text-[12px] font-semibold text-blue70 transition-colors hover:bg-borderColor/10"
        >
          <Pencil size={11} /> Edit
        </button>
        <button
          onClick={() => onView?.(agent.id)}
          className="flex items-center gap-1.5 rounded-[8px] border border-borderColor/18 bg-blue10 px-3.5 py-1.5 text-[12px] font-semibold text-blue70 transition-colors hover:bg-borderColor/10"
        >
          <Eye size={11} /> View
        </button>
        <button
          onClick={() => onDelete?.(agent.id)}
          className="flex items-center gap-1.5 rounded-[8px] border border-red-500/25 bg-red-500/10 px-3.5 py-1.5 text-[12px] font-semibold text-red-400 transition-colors hover:bg-red-500/20"
        >
          <Trash2 size={11} /> Delete
        </button>
      </div>
    </div>
  );
}