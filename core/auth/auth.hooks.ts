import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useSyncExternalStore } from "react";
import { authService } from "@/core/container";
import { type LoginCredentials, type AuthUser } from "@/core/auth/auth-service";
import { parseError } from "@/core/errors/api-errors";


type Listener = () => void;
const listeners = new Set<Listener>();

function subscribeToAuthStore(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function notifyAuthStoreListeners(): void {
  listeners.forEach((fn) => fn());
}

function getAuthSnapshot(): AuthUser | null {
  return authService.getCurrentUser();
}

// ─── useCurrentUser ───────────────────────────────────────────────────────────

export function useCurrentUser(): AuthUser | null {
  return useSyncExternalStore(subscribeToAuthStore, getAuthSnapshot, () => null);
}

// ─── useIsAuthenticated ───────────────────────────────────────────────────────

export function useIsAuthenticated(): boolean {
  const user = useCurrentUser();
  return user !== null;
}

// ─── usePermission ────────────────────────────────────────────────────────────

export function usePermission(permission: string): boolean {
  const user = useCurrentUser();
  return user?.permissions.includes(permission) ?? false;
}

export function useRole(role: string): boolean {
  const user = useCurrentUser();
  return user?.role === role;
}

// ─── useLogin ─────────────────────────────────────────────────────────────────

export function useLogin() {
  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: () => {

      notifyAuthStoreListeners();
    },
    onError: (error) => {
      throw parseError(error);
    },
  });
}

// ─── useLogout ────────────────────────────────────────────────────────────────

export function useLogout() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      qc.clear();
      notifyAuthStoreListeners();
    },
  });
}

// ─── useSilentRefresh ─────────────────────────────────────────────────────────


export function useSilentRefresh() {
  useEffect(() => {
    authService.refreshToken().then((token) => {
      if (token) notifyAuthStoreListeners();
    });
  }, []);
}