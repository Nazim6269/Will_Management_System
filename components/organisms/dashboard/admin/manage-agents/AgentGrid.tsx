"use client";

import AgentCard from "./AgentCard";

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

const defaultAgents: Agent[] = [
  {
    id: "1",
    name: "James Thornton",
    email: "james@inherix.com",
    clients: 24,
    wills: 18,
    revenue: "£4,450",
    status: "Active",
    avatarUrl: "/User.jpg",
  },
  {
    id: "2",
    name: "Smith Mitchell",
    email: "Smith@inherix.com",
    clients: 16,
    wills: 12,
    revenue: "£300",
    status: "Active",
    avatarUrl: "/User.jpg",
  },
  {
    id: "3",
    name: "Emily Clarke",
    email: "e.clarke@inherix.com",
    clients: 30,
    wills: 40,
    revenue: "£800",
    status: "Active",
    avatarUrl: "/User.jpg",
  },
  {
    id: "4",
    name: "David Clerk",
    email: "david@inherix.com",
    clients: 24,
    wills: 18,
    revenue: "£4,450",
    status: "Active",
    avatarUrl: "/User.jpg",
  },
  {
    id: "5",
    name: "Sarah Mitchell",
    email: "sarah.m@inherix.com",
    clients: 16,
    wills: 12,
    revenue: "£300",
    status: "Active",
    avatarUrl: "/User.jpg",
  },
  {
    id: "6",
    name: "Glane Maxa",
    email: "Glane@inherix.com",
    clients: 30,
    wills: 40,
    revenue: "£800",
    status: "Active",
  },
];

interface AgentGridProps {
  agents?: Agent[];
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
}

import { useTableFilter } from "@/hooks/useTableFilter";
import { ADMIN_AGENTS_FILTER_CONFIG } from "@/config/filterConfig";

export default function AgentGrid({
  agents = defaultAgents,
  onEdit,
  onView,
  onDelete,
}: AgentGridProps) {
  const filteredAgents = useTableFilter(ADMIN_AGENTS_FILTER_CONFIG, agents);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-6">
      {filteredAgents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onEdit={onEdit}
          onView={onView}
          onDelete={onDelete}
        />
      ))}
    </div>
  );    
}
