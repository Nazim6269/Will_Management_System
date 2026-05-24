

import { z } from "zod";

// ─── Domain Model ─────────────────────────────────────────────────────────────
// What the UI and business logic work with

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = "admin" | "manager" | "member" | "viewer";
export type UserStatus = "active" | "inactive" | "suspended" | "pending";



export interface UserDTO {
  id: string;
  email: string;
  first_name: string;       
  last_name: string;
  role: string;
  status: string;
  avatar_url: string | null;
  created_at: string;           
  updated_at: string;
}

export interface UserListDTO {
  data: UserDTO[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

// ─── Pagination (domain model) ────────────────────────────────────────────────

export interface PaginatedResult<T> {
  items: T[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// ─── Create/Update DTOs ───────────────────────────────────────────────────────

export const CreateUserSchema = z.object({
  email: z.string().email("Invalid email"),
  firstName: z.string().min(1, "First name required").max(50),
  lastName: z.string().min(1, "Last name required").max(50),
  role: z.enum(["admin", "manager", "member", "viewer"]),
  password: z.string().min(8, "Minimum 8 characters"),
});

export const UpdateUserSchema = CreateUserSchema.partial().omit({ password: true });

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;



export interface UserListParams {
  page?: number;
  perPage?: number;
  search?: string;
  role?: UserRole;
  status?: UserStatus;
  sortBy?: "name" | "email" | "createdAt";
  sortOrder?: "asc" | "desc";
}