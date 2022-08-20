import { Text, Flex } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../../../Button";
import { Input } from "../../../Input";

interface RegisterStepTwoProps {
  handleStepChange: (step: number, fields: string | string[]) => void;
}


export function RegisterStepTwo({ handleStepChange }: RegisterStepTwoProps) {
  const { register, formState: { errors } } = useFormContext<{ email: string }>();

  return (
    <>
      <Flex mb="6" direction="column" align="center">
        <Text fontSize="xl" fontWeight="bold">Almost finished</Text>
        <Text fontSize="md" color="gray.400">
          Now tell us your best e-mail
        </Text>
      </Flex>


      <Input
        placeholder="E-mail"
        {...register('email')}
        error={errors.email}
      />

      <Button
        rightIcon={<FiArrowRight />}
        mt="4"
        onClick={() => handleStepChange(3, 'email')}
        type="button"
      >
        Continue
      </Button>
    </>
  )
}