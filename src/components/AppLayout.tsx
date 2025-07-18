import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';
import LoginForm from './LoginForm';
import MobileHeader from './MobileHeader';
import NotificationCard from './NotificationCard';
import NotificationForm from './NotificationForm';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, History } from 'lucide-react';
import { Notification } from '@/types';

const AppLayout: React.FC = () => {
  const { user, login, loading } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [editingNotification, setEditingNotification] = useState<Notification | undefined>();
  const [activeTab, setActiveTab] = useState('notifications');
  
  const notificationHook = useNotifications(user?.id || '');

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <LoginForm onLogin={login} />;
  }

  const allNotifications = notificationHook.notifications;
  const activeNotifications = allNotifications.filter(n => !n.isAcknowledged);
  const acknowledgedNotifications = allNotifications.filter(n => n.isAcknowledged);

  const handleEditNotification = (notification: Notification) => {
    setEditingNotification(notification);
    setShowForm(true);
  };

  const handleFormSubmit = (data: Omit<Notification, 'id' | 'userId' | 'createdAt'>) => {
    if (editingNotification) {
      notificationHook.updateNotification(editingNotification.id, data);
    } else {
      notificationHook.addNotification(data);
    }
    setShowForm(false);
    setEditingNotification(undefined);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingNotification(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader 
        onMenuClick={() => {}} 
        pendingCount={activeNotifications.length} 
      />
      
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notifications">All Notifications</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">All Notifications</h2>
              <Button onClick={() => setShowForm(true)} className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
            
            {notificationHook.loading ? (
              <div className="text-center py-12 text-gray-500">Loading notifications...</div>
            ) : allNotifications.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-4xl mb-4">📭</div>
                <p>No notifications yet. Create your first one!</p>
              </div>
            ) : (
              allNotifications.map(notification => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onAcknowledge={notificationHook.acknowledgeNotification}
                  onEdit={handleEditNotification}
                  onDelete={notificationHook.deleteNotification}
                />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <h2 className="text-xl font-semibold">Acknowledged Notifications</h2>
            {acknowledgedNotifications.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <History className="h-12 w-12 mx-auto mb-4" />
                <p>No acknowledged notifications yet.</p>
              </div>
            ) : (
              acknowledgedNotifications.map(notification => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onAcknowledge={notificationHook.acknowledgeNotification}
                  onEdit={handleEditNotification}
                  onDelete={notificationHook.deleteNotification}
                />
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      {showForm && (
        <NotificationForm
          notification={editingNotification}
          onSubmit={handleFormSubmit}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default AppLayout;