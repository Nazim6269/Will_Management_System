// providers/PermissionProvider.tsx
'use client';

import { createContext, useContext } from 'react';
import type { Permission } from '@/types/dashboardType';

interface PermissionContextValue {
  permissions: Permission[];
}

export const PermissionContext = createContext<PermissionContextValue>({
  permissions: [],
});

export function PermissionProvider({
  children,
  permissions,
}: {
  children: React.ReactNode;
  permissions: Permission[];
}) {
  return (
    <PermissionContext.Provider value={{ permissions }}>
      {children}
    </PermissionContext.Provider>
  );
}