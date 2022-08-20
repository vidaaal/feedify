import Link from "next/link";
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "../../../Button";
import { Input } from "../../../Input";
import { useForm, useFormContext } from "react-hook-form";

interface RegisterStepOneProps {
  handleStepChange: (step: number, fields: string | string[]) => void;
}

export function RegisterStepOne({ handleStepChange }: RegisterStepOneProps) {
  const { register, formState: { errors } } = useFormContext<{ name: string }>();

  return (
    <>
      <Flex mb="6" direction="column" align="center">
        <Text fontSize="xl" fontWeight="bold">Create Account</Text>
        <Text fontSize="md" color="gray.400">
          Let's start by you telling us your name
        </Text>
      </Flex>


      <Input
        placeholder="Name"
        {...register('name')}
        error={errors.name}
      />

      <Button
        rightIcon={<FiArrowRight />}
        mt="4"
        onClick={() => handleStepChange(2, 'name')}
        type="button"
      >
        Continue
      </Button>

      <Text fontSize="sm" mt="2" color="gray.400">
        Have an account?
        {' '}
        <Link href="/login">
          <ChakraLink color="green.400">Sign in</ChakraLink>
        </Link>
      </Text>
    </>
  )
}