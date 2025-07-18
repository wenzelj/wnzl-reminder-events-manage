import * as React from "react"
import { TextInput, StyleSheet } from "react-native"

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput>

const Input = React.forwardRef<TextInput, InputProps>(
  ({ style, ...props }, ref) => {
    return (
      <TextInput
        style={[styles.base, style]}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

const styles = StyleSheet.create({
  base: {
    height: 40,
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    fontSize: 14,
  },
});

export { Input }
