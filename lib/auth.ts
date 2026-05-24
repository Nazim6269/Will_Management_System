import type { Permission, DashboardRole } from '@/types/dashboardType';

export interface User {
  id: string;
  name: string;
  email: string;
  role: DashboardRole;
  avatar?: string;
}

const MOCK_USERS: Record<string, User> = {
  'agent-1': {
    id: 'agent-1',
    name: 'James Thornton',
    email: 'james@inherix.com',
    role: 'agent',
    avatar: '/avatar.png'
  },
  'admin-1': {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@inherix.com',
    role: 'admin',
  },
  'client-1': {
    id: 'client-1',
    name: 'Client User',
    email: 'client@inherix.com',
    role: 'client',
  }
};

export async function getCurrentUser(): Promise<User | null> {
  // Simulate fetching from session
  // Change this ID to 'admin-1' or 'client-1' to test other roles
  return MOCK_USERS['agent-1'];
}

export async function getUserPermissions(role?: DashboardRole): Promise<Permission[]> {
  if (role === 'admin') {
    return ['view:reports', 'manage:users', 'manage:settings', 'view:billing'];
  }
  if (role === 'agent') {
    return ['view:reports', 'view:leads', 'manage:settings'];
  }
  return ['view:billing'];
}

