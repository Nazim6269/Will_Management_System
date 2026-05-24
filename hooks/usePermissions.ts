// "use client";

// import { useCallback } from "react";

// export function usePermissions() {
//   // Mock permission checker
//   const hasPermission = useCallback((permission: string) => {
//     // For now, allow everything
//     return true;
//   }, []);

//   return { hasPermission };
// }
// hooks/usePermission.ts
import { useContext } from 'react';
import { PermissionContext } from '@/components/providers/PermissionProvider';
import type { Permission } from '@/types/dashboardType';

export function usePermission(required?: Permission[]) {
  const ctx = useContext(PermissionContext);
  if (!ctx) {
    throw new Error('usePermission must be used inside <PermissionProvider>');
  }
  const { permissions } = ctx;
  
  const hasPermission = (req: Permission | Permission[]) => {
    const requiredArr = Array.isArray(req) ? req : [req];
    return requiredArr.every(p => permissions.includes(p));
  };

  if (required === undefined) {
    return { permissions, hasPermission };
  }
  
  return hasPermission(required);
}

// Usage in NavItem atom:
// const hasAccess = usePermission(item.permissions);
// if (!hasAccess) return null;