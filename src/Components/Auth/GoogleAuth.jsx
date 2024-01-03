import { Flex , Text } from "@chakra-ui/react";

function GoogleAuth() {
  return (
    <>
      <Flex cursor={'pointer'}>
          <Text fontSize={14} color={'blue.500'}>Log in with Google</Text>
      </Flex>
    </>
  )
}

export default GoogleAuth