'use client';

import { useState, useEffect } from 'react';
import type { User } from '@/lib/auth';

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchUser = async () => {
      try {
        // In reality, this would call getCurrentUser() via an API route or similar
        // but for mocking client-side, we'll just simulate it.
        const response = await fetch('/api/mock/user'); 
        if (response.ok) {
           const data = await response.json();
           setUser(data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    // For now, let's just use a direct mock to avoid needing an API route immediately
    setTimeout(() => {
      setUser({
        id: 'agent-1',
        name: 'James Thornton',
        email: 'james@inherix.com',
        role: 'agent',
        avatar: '/avatar.png'
      });
      setLoading(false);
    }, 500);
  }, []);

  return { user, role: user?.role, loading };
}
