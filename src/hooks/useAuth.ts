import { useState, useEffect } from 'react';
import { User } from '@/types';
import { supabase } from '@/lib/supabase';

const STORAGE_KEY = 'notification_app_user';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, name: string) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name,
      createdAt: new Date()
    };
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('notification_app_categories');
    localStorage.removeItem('notification_app_notifications');
    localStorage.removeItem('notification_app_history');
  };

  return { user, login, logout, loading };
};