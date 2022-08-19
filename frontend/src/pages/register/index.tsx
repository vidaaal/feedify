import { Flex, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Input";

export default function Register() {
  return (
    <Flex
      w="100%"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        mt="8"
        w="100%"
        maxW={360}
        mx="auto"
        bg="gray.800"
        borderRadius="8"
        p="4"
      >
        <Stack spacing="4" w="100%">
          <Input />
          <Input />
        </Stack>
      </Flex>
    </Flex>
  )
}