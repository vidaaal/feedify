import { Text, Flex, Stack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../../../Button";
import { Input } from "../../../Input";

interface RegisterStepThreeProps {
  handleStepChange: (step: number, fields: string | string[]) => void;
}


export function RegisterStepThree({ handleStepChange }: RegisterStepThreeProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext<{ password: string, password_confirmation: string }>();

  return (
    <>
      <Flex mb="6" direction="column" align="center">
        <Text fontSize="xl" fontWeight="bold">Last step</Text>
        <Text fontSize="md" color="gray.400">
          Define a password for your account
        </Text>
      </Flex>


      <Stack spacing="2" w="100%">
        <Input
          placeholder="Password"
          {...register('password')}
          error={errors.password}
        />

        <Input
          placeholder="Confirm Password"
          {...register('password_confirmation')}
          error={errors.password_confirmation}
        />
      </Stack>

      <Button
        mt="4"
        onClick={() => {
          handleStepChange(3, ['password', 'password_confirmation'])
        }}
        type="submit"
      >
        Create account
      </Button>
    </>
  )
}