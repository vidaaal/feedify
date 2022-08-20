import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export function Button({children, ...rest}: ButtonProps) {
  return (
    <ChakraButton w="100%" colorScheme="green" {...rest}>
      {children}
    </ChakraButton>
  )
}