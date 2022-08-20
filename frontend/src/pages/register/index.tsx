import { useMemo, useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Logo } from "../../components/Logo";
import { RegisterStepOne } from "../../components/Steps/Register/StepOne";
import { RegisterStepTwo } from "../../components/Steps/Register/StepTwo";
import { RegisterStepThree } from "../../components/Steps/Register/StepThree";

const registerFormSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Must be at least 3 characters long'),
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required').min(6, 'Must be at lest 6 characters long'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passwords do not match')
})

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm({
    resolver: yupResolver(registerFormSchema)
  });

  const steps = useMemo(() => ({
    1: RegisterStepOne,
    2: RegisterStepTwo,
    3: RegisterStepThree
  }), []);

  const CurrentStep = useMemo(() => steps[currentStep as keyof typeof steps], [currentStep]);

  async function handleStepChange(step: number, fields: string | string[]) {
    const formHasNoError = await methods.trigger(fields);

    if (formHasNoError) {
      setCurrentStep(step);
    }
  }

  function handleBackButton() {
    setCurrentStep(prevState => prevState - 1)
  }

  function handleFormSubmit(data: any) {
    if (currentStep === 3) {
      console.log(data);
    }
  }

  return (
    <Flex
      w="100%"
      maxW={400}
      h="100vh"
      mx="auto"
      justify="center"
      direction="column"
    >

      {currentStep > 1 && (
        <Button
          w="min-content"
          bg="transparent"
          onClick={handleBackButton}
          leftIcon={<HiArrowNarrowLeft />}
          color="green.400"
          _hover={{ bg: 'gray.800' }}
          mb="1"
        >
          Back
        </Button>
      )}

      <Flex
        w="100%"
        bg="gray.800"
        borderRadius="8"
        p="8"
        direction="column"
        align="center"
      >

        <Flex align="center" mb="8">
          <Logo boxSize="16" />

          <Text ml="4" fontSize="2xl" fontWeight="bold">
            Feedify
          </Text>
        </Flex>


        <FormProvider {...methods}>
          <Flex
            as="form"
            w="100%"
            align="center"
            direction="column"
            onSubmit={methods.handleSubmit(handleFormSubmit)}
          >
            <CurrentStep handleStepChange={handleStepChange} />
          </Flex>
        </FormProvider>

      </Flex>
    </Flex>
  )
}