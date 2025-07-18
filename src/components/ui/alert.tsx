import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

interface AlertProps extends React.ComponentPropsWithoutRef<typeof View> {
  variant?: "default" | "destructive" | "success" | "warning" | "info"
}

const Alert = React.forwardRef<View, AlertProps>(
  ({ variant = "default", style, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        style={[
          styles.base,
          styles[variant],
          style
        ]}
        {...props}
      >
        {children}
      </View>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  Text,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.title, style]}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  Text,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.description, style]}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"


const styles = StyleSheet.create({
  base: {
    position: 'relative',
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    padding: 16,
  },
  title: {
    marginBottom: 4,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
  },
  default: {
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
  },
  destructive: {
    borderColor: 'rgba(220, 53, 69, 0.5)',
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
  },
  success: {
    borderColor: 'rgba(40, 167, 69, 0.5)',
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
  },
  warning: {
    borderColor: 'rgba(255, 193, 7, 0.5)',
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
  },
  info: {
    borderColor: 'rgba(0, 123, 255, 0.5)',
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
  },
});

export { Alert, AlertTitle, AlertDescription }
