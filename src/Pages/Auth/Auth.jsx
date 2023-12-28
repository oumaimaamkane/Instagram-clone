import { Box, Container, Flex , Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../Components/AuthForm"
function Auth() {
  return (
      <Container maxW={"container.md"}>
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={'center'} px={4}>
            <Box display={{base:"none" , md :"block"}}>
                <Image src="images/home-phones.png" />
            </Box>
            <VStack spacing={4} align={"stretch"}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the app</Box>
                    <Flex gap={5} alignContent={"center"}>
                        <Image src="images/playstore.png" h={"10"} alt="download from playstore"/>
                        <Image src="images/microsoft.png" h={"10"} alt="download from microsoft"/>
                    </Flex>
            </VStack>
        </Flex>
    </Container>
  )
}

export default Auth