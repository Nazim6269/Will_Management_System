'use client';

import { createContext, useContext, type PropsWithChildren } from 'react';
import type { Permission } from '@/types/dashboardType';

interface PermissionContextValue {
  permissions: Permission[];
  hasPermission: (permission: Permission) => boolean;
  hasAnyPermission: (permissions: Permission[]) => boolean;
}

const PermissionContext = createContext<PermissionContextValue | null>(null);

export function PermissionProvider({ 
  children, 
  permissions 
}: PropsWithChildren<{ permissions: Permission[] }>) {
  const hasPermission = (permission: Permission): boolean => {
    return permissions.includes(permission);
  };

  const hasAnyPermission = (permissions: Permission[]): boolean => {
    return permissions.some(p => permissions.includes(p));
  };

  return (
    <PermissionContext.Provider value={{ permissions, hasPermission, hasAnyPermission }}>
      {children}
    </PermissionContext.Provider>
  );
}

export function usePermissions(): PermissionContextValue {
  const ctx = useContext(PermissionContext);
  if (!ctx) {
    throw new Error('usePermissions must be used inside <PermissionProvider>');
  }
  return ctx;
}

export { PermissionContext };
