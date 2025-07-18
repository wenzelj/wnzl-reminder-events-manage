import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface MobileHeaderProps {
  onMenuClick: () => void;
  pendingCount: number;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuClick, pendingCount }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="text-white hover:bg-white/20"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔔</span>
            <h1 className="text-xl font-bold">NotifyMe</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {pendingCount > 0 && (
            <div className="relative">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {pendingCount}
              </span>
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span className="text-sm font-medium hidden sm:block">
              {user?.name}
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="text-white hover:bg-white/20"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;