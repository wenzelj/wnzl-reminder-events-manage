import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Notification, NotificationHistory } from '@/types';
import { useNotifications } from '@/hooks/useNotifications';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  user: User | null;
  login: (email: string, name: string) => void;
  logout: () => void;
  notifications: Notification[];
  history: NotificationHistory[];
  loading: boolean;
  addNotification: (notification: Omit<Notification, 'id' | 'userId' | 'createdAt'>) => void;
  updateNotification: (id: string, updates: Partial<Notification>) => void;
  deleteNotification: (id: string) => void;
  acknowledgeNotification: (id: string) => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  user: null,
  login: () => {},
  logout: () => {},
  notifications: [],
  history: [],
  loading: false,
  addNotification: () => {},
  updateNotification: () => {},
  deleteNotification: () => {},
  acknowledgeNotification: () => {}
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  const {
    notifications,
    history,
    loading,
    addNotification,
    updateNotification,
    deleteNotification,
    acknowledgeNotification
  } = useNotifications(user?.email || '');

  useEffect(() => {
    const storedUser = localStorage.getItem('notification_app_user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  }, []);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  const login = (email: string, name: string) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name,
      createdAt: new Date()
    };
    setUser(newUser);
    localStorage.setItem('notification_app_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('notification_app_user');
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        user,
        login,
        logout,
        notifications,
        history,
        loading,
        addNotification,
        updateNotification,
        deleteNotification,
        acknowledgeNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
};