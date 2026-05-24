"use client";

import { type ReactNode } from "react";
import { useCurrentUser, usePermission, useRole } from "@/core/auth/auth.hooks";
import { redirect } from "next/navigation";
  
interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  redirectTo?: string;
}

export function AuthGuard({ children, fallback, redirectTo = "/login" }: AuthGuardProps) {
  const user = useCurrentUser();

  if (!user) {
    if (redirectTo) redirect(redirectTo);
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

interface PermissionGuardProps {
  permission: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function PermissionGuard({ permission, children, fallback = null }: PermissionGuardProps) {
  const hasPermission = usePermission(permission);
  return hasPermission ? <>{children}</> : <>{fallback}</>;
}

// ─── Role Guard ───────────────────────────────────────────────────────────────

interface RoleGuardProps {
  role: string | string[];
  children: ReactNode;
  fallback?: ReactNode;
}


export function RoleGuard({ role, children, fallback = null }: RoleGuardProps) {
  const user = useCurrentUser();
  const roles = Array.isArray(role) ? role : [role];
  const allowed = user ? roles.includes(user.role) : false;
  return allowed ? <>{children}</> : <>{fallback}</>;
}

// ─── Usage Examples ───────────────────────────────────────────────────────────
//
// Route-level:
// <AuthGuard redirectTo="/login">
//   <DashboardPage />
// </AuthGuard>
//
// Feature-level (hide UI element):
// <PermissionGuard permission="invoices:create">
//   <CreateInvoiceButton />
// </PermissionGuard>
//
// Role-level:
// <RoleGuard role={["admin", "manager"]}>
//   <AdminPanel />
// </RoleGuard>