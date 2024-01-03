import { Box, Button, Flex, Image, Input, VStack , Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import GoogleAuth from './GoogleAuth';

function AuthForm() {
    const [isLogging , setIsLogging] = useState(true);
    
    
  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
        <Image src='images/instagram.png' justifyContent={"center"} cursor={"pointer"} h={20}/>

        {/* Auth form */}
        {isLogging ? (<Login/>) : (<Register/>)}
       
       {/* Divider */}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text fontSize={14} color={"white"}>Or</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
        </Flex>
        {/* Google Auth */}
        <GoogleAuth/>
        </VStack>
    </Box>

    {/* Don't have an account */}
    <Box border={"1px solid gray"} borderRadius={4} padding={4}>
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Box fontSize={14} color={'white'} mx={1}>
                {isLogging ? "You don't have an account?" : "Already have an account"}
            </Box>
            <Box fontSize={13} color={'blue.500'} cursor={'pointer'} onClick={() =>setIsLogging(!isLogging)}>
                {isLogging ? "Sign up" : "Login"}
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default AuthForm