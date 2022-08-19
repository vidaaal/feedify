import { FieldError } from 'react-hook-form';

import {
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  error?: FieldError;
}

export function Input({ error }: InputProps) {
  return (
    <FormControl>
      <ChakraInput 
        w="100%"
      />

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}