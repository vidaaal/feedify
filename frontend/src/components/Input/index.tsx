import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  FormLabel
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  error?: FieldError;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, label, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel>
          {label}
        </FormLabel>
      )}

      <ChakraInput
        w="100%"
        borderColor="gray.700"
        focusBorderColor="green.400"
        autoComplete='off'
        {...rest}
        ref={ref}
      />

      <FormErrorMessage>
        {error?.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);