import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      bg="gray.800"
      py="4"
      justify="center"
    >
      <Text fontSize="lg">Feedify</Text>
    </Flex>
  )
}