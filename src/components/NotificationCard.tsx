import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Notification } from '@/types';
import { Check, Edit, Trash2, Clock, Repeat } from 'lucide-react';
import { format } from 'date-fns';

interface NotificationCardProps {
  notification: Notification;
  onAcknowledge: (id: string) => void;
  onEdit: (notification: Notification) => void;
  onDelete: (id: string) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
  onAcknowledge,
  onEdit,
  onDelete
}) => {
  const isOverdue = new Date(notification.dueDate) < new Date() && !notification.isAcknowledged;
  const isDueSoon = new Date(notification.dueDate) <= new Date(Date.now() + 24 * 60 * 60 * 1000) && !notification.isAcknowledged;

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Birthday': '#FF6B6B',
      'Wedding': '#4ECDC4',
      'Meeting': '#45B7D1',
      'Car Service': '#96CEB4',
      'Smoke Detector': '#FFEAA7',
      'Appointment': '#A8E6CF',
      'Reminder': '#FFD93D',
      'Task': '#6C5CE7',
      'Event': '#FD79A8',
      'Bill Payment': '#FDCB6E'
    };
    return colors[category] || '#6B7280';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Birthday': '🎂',
      'Wedding': '💒',
      'Meeting': '📅',
      'Car Service': '🚗',
      'Smoke Detector': '🔥',
      'Appointment': '📋',
      'Reminder': '⏰',
      'Task': '✅',
      'Event': '🎉',
      'Bill Payment': '💳'
    };
    return icons[category] || '📌';
  };

  const categoryColor = getCategoryColor(notification.category);
  const categoryIcon = getCategoryIcon(notification.category);

  return (
    <Card className={`mb-4 transition-all duration-200 hover:shadow-lg ${
      !notification.isActive
        ? 'bg-gray-100 border-gray-300 opacity-60'
        : notification.isAcknowledged 
        ? 'bg-gray-50 border-gray-200' 
        : isOverdue 
        ? 'bg-red-50 border-red-200 shadow-red-100' 
        : isDueSoon 
        ? 'bg-yellow-50 border-yellow-200 shadow-yellow-100'
        : 'bg-white border-gray-200 shadow-md'
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{categoryIcon}</span>
            <div>
              <CardTitle className={`text-lg ${
                notification.isAcknowledged ? 'text-gray-500 line-through' : 
                !notification.isActive ? 'text-gray-400' : 'text-gray-900'
              }`}>
                {notification.title}
              </CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge 
                  variant="secondary" 
                  style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}
                >
                  {notification.category}
                </Badge>
                {!notification.isActive && (
                  <Badge variant="outline" className="text-xs text-gray-500">
                    Inactive
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          {!notification.isAcknowledged && (
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onAcknowledge(notification.id)}
                className="text-green-600 hover:bg-green-50"
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(notification)}
                className="text-blue-600 hover:bg-blue-50"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(notification.id)}
                className="text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className={`text-sm mb-3 ${
          notification.isAcknowledged ? 'text-gray-400' : 
          !notification.isActive ? 'text-gray-500' : 'text-gray-600'
        }`}>
          {notification.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{format(new Date(notification.dueDate), 'MMM dd, yyyy HH:mm')}</span>
          </div>
          
          {notification.isRecurring && (
            <div className="flex items-center space-x-1">
              <Repeat className="h-3 w-3" />
              <Badge variant="outline" className="text-xs">
                {notification.recurringType}
              </Badge>
            </div>
          )}
        </div>
        
        {notification.isAcknowledged && notification.acknowledgedAt && (
          <div className="mt-2 text-xs text-green-600">
            ✓ Acknowledged on {format(new Date(notification.acknowledgedAt), 'MMM dd, yyyy HH:mm')}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationCard;