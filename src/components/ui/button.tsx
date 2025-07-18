import * as React from "react"
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native"

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ variant = "default", size = "default", style, children, ...props }, ref) => {
    return (
      <TouchableOpacity
        style={[
          styles.base,
          styles[variant],
          styles[size],
          style
        ]}
        ref={ref}
        {...props}
      >
        <Text style={[
          styles.textBase,
          styles.textVariant,
        ]}>{children}</Text>
      </TouchableOpacity>
    )
  }
)
Button.displayName = "Button"

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  textBase: {
    fontSize: 14,
    fontWeight: '500',
  },
  textVariant: {
    color: '#ffffff',
  },
  default: {
    backgroundColor: '#007bff',
  },
  destructive: {
    backgroundColor: '#dc3545',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#007bff',
    backgroundColor: 'transparent',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
    textDecorationLine: 'underline',
  },
  sm: {
    height: 36,
    paddingHorizontal: 12,
  },
  lg: {
    height: 48,
    paddingHorizontal: 32,
  },
  icon: {
    height: 40,
    width: 40,
  },
});

export { Button }
