import { useState, useEffect } from 'react';
import { Notification, NotificationHistory } from '@/types';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

export const useNotifications = (userId: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [history, setHistory] = useState<NotificationHistory[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      loadNotifications();
    }
  }, [userId]);

  const loadNotifications = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const mappedNotifications: Notification[] = data.map(item => ({
        id: item.id,
        userId: item.user_id,
        title: item.title,
        description: item.message,
        category: item.category,
        priority: item.priority || 'medium',
        dueDate: item.due_date ? new Date(item.due_date) : new Date(),
        isRecurring: item.is_recurring || false,
        recurringType: item.recurring_type || 'monthly',
        isActive: item.is_active !== false,
        isAcknowledged: item.is_read,
        createdAt: new Date(item.created_at),
        acknowledgedAt: item.updated_at ? new Date(item.updated_at) : undefined
      }));
      
      setNotifications(mappedNotifications);
    } catch (error) {
      toast({ title: 'Error loading notifications', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const addNotification = async (notification: Omit<Notification, 'id' | 'userId' | 'createdAt'>) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .insert({
          user_id: userId,
          title: notification.title,
          message: notification.description,
          category: notification.category,
          priority: notification.priority,
          due_date: notification.dueDate.toISOString(),
          is_recurring: notification.isRecurring,
          recurring_type: notification.recurringType,
          is_active: notification.isActive
        });

      if (error) throw error;
      
      await loadNotifications();
      toast({ title: 'Notification created successfully!' });
    } catch (error) {
      console.error('Error creating notification:', error);
      toast({ title: 'Error creating notification', variant: 'destructive' });
    }
  };

  const updateNotification = async (id: string, updates: Partial<Notification>) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({
          title: updates.title,
          message: updates.description,
          category: updates.category,
          priority: updates.priority,
          due_date: updates.dueDate?.toISOString(),
          is_recurring: updates.isRecurring,
          recurring_type: updates.recurringType,
          is_active: updates.isActive,
          is_read: updates.isAcknowledged,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;
      
      await loadNotifications();
      toast({ title: 'Notification updated successfully!' });
    } catch (error) {
      toast({ title: 'Error updating notification', variant: 'destructive' });
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      await loadNotifications();
      toast({ title: 'Notification deleted successfully!' });
    } catch (error) {
      toast({ title: 'Error deleting notification', variant: 'destructive' });
    }
  };

  const acknowledgeNotification = async (id: string) => {
    const notification = notifications.find(n => n.id === id);
    if (!notification) return;

    const historyItem: NotificationHistory = {
      id: crypto.randomUUID(),
      notificationId: id,
      acknowledgedAt: new Date(),
      title: notification.title,
      description: notification.description,
      categoryName: notification.category
    };

    setHistory(prev => [...prev, historyItem]);
    await updateNotification(id, { isAcknowledged: true, acknowledgedAt: new Date() });
  };

  return {
    notifications,
    history,
    loading,
    addNotification,
    updateNotification,
    deleteNotification,
    acknowledgeNotification
  };
};