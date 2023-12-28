import { Box, Button, Flex, Image, Input, VStack , Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AuthForm() {
    const [isLogging , setIsLogging] = useState(true);
    const [inputs , setInputs] = useState({
        email : "",
        password : "",
        confirmPassword: ""
    })
    const navigate = useNavigate();

    const handAuth = () => {
        if(!inputs.email || !inputs.password){
            alert("Please fill out all fields")
            return 
        }else{
            navigate('/');
        }
    }
    
  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
        <Image src='images/instagram.png' justifyContent={"center"} cursor={"pointer"} h={20}/>
        <Input size={"md"} placeholder='Enter your email , username or phone number' fontSize={14}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs ,email:e.target.value})}
        />
        <Input size={"md"} placeholder='Enter your password' type='password' fontSize={14}
        value={inputs.password}
        onChange={(e) => setInputs({...inputs ,password:e.target.value})}/>
        {!isLogging?(
            <Input size={"md"} placeholder='Confirm your password' type='password' fontSize={14}
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs ,confirmPassword:e.target.value})}/>
        ):null}
        <Button colorScheme='blue' w={'full'} size={"sm"} fontSize={14} onClick={() => handAuth()}>{isLogging ? "Log in" : "Sign up"}</Button>
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text fontSize={14} color={"white"}>Or</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
        </Flex>
        <Flex cursor={'pointer'}>
            <Text fontSize={14} color={'blue.500'}>Log in with Google</Text>
        </Flex>
        </VStack>
    </Box>
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