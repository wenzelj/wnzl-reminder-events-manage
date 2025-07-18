export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  category: string;
  userId: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  isRecurring: boolean;
  recurringType?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  isActive: boolean;
  isAcknowledged: boolean;
  acknowledgedAt?: Date;
  createdAt: Date;
}

export interface NotificationHistory {
  id: string;
  notificationId: string;
  acknowledgedAt: Date;
  title: string;
  description: string;
  categoryName: string;
}