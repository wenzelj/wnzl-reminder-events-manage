import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

const Card = React.forwardRef<
  View,
  React.ComponentPropsWithoutRef<typeof View>
>(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.card, style]}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  View,
  React.ComponentPropsWithoutRef<typeof View>
>(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.header, style]}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  Text,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.title, style]}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  Text,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.description, style]}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  View,
  React.ComponentPropsWithoutRef<typeof View>
>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.content, style]} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  View,
  React.ComponentPropsWithoutRef<typeof View>
>(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.footer, style]}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    flexDirection: 'column',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: -0.025,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
  },
  content: {
    padding: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
});

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
