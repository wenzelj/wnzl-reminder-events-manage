import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Notification } from '@/types';
import { X } from 'lucide-react';

interface NotificationFormProps {
  notification?: Notification;
  onSubmit: (data: Omit<Notification, 'id' | 'userId' | 'createdAt'>) => void;
  onClose: () => void;
}

const NotificationForm: React.FC<NotificationFormProps> = ({
  notification,
  onSubmit,
  onClose
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    dueDate: '',
    dueTime: '',
    isRecurring: false,
    recurringType: 'daily' as 'daily' | 'weekly' | 'monthly' | 'yearly',
    isActive: true,
    isAcknowledged: false
  });

  useEffect(() => {
    if (notification) {
      const dueDate = new Date(notification.dueDate);
      setFormData({
        title: notification.title,
        description: notification.description,
        category: notification.category,
        dueDate: dueDate.toISOString().split('T')[0],
        dueTime: dueDate.toTimeString().slice(0, 5),
        isRecurring: notification.isRecurring,
        recurringType: notification.recurringType || 'daily',
        isActive: notification.isActive,
        isAcknowledged: notification.isAcknowledged
      });
    }
  }, [notification]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.category) return;

    const dueDateTime = formData.dueDate && formData.dueTime 
      ? new Date(`${formData.dueDate}T${formData.dueTime}:00`)
      : new Date();

    onSubmit({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      priority: 'medium',
      dueDate: dueDateTime,
      isRecurring: formData.isRecurring,
      recurringType: formData.isRecurring ? formData.recurringType : undefined,
      isActive: formData.isActive,
      isAcknowledged: formData.isAcknowledged,
      acknowledgedAt: notification?.acknowledgedAt
    });
    onClose();
  };

  const commonCategories = [
    'Birthday', 'Wedding', 'Meeting', 'Car Service', 'Smoke Detector',
    'Appointment', 'Reminder', 'Task', 'Event', 'Bill Payment'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{notification ? 'Edit Notification' : 'New Notification'}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter notification title"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Enter description"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {commonCategories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="dueTime">Due Time</Label>
              <Input
                id="dueTime"
                type="time"
                value={formData.dueTime}
                onChange={(e) => setFormData(prev => ({ ...prev, dueTime: e.target.value }))}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="isRecurring"
                checked={formData.isRecurring}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isRecurring: checked }))}
              />
              <Label htmlFor="isRecurring">Recurring Notification</Label>
            </div>
            
            {formData.isRecurring && (
              <div>
                <Label htmlFor="recurringType">Recurrence</Label>
                <Select value={formData.recurringType} onValueChange={(value) => setFormData(prev => ({ ...prev, recurringType: value as 'daily' | 'weekly' | 'monthly' | 'yearly' }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>
            
            <div className="flex space-x-2 pt-4">
              <Button type="submit" className="flex-1">
                {notification ? 'Update' : 'Create'}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationForm;