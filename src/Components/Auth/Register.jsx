import {useState} from 'react'
import {Alert, AlertIcon, Button, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import useSignUpWithEmail from '../../hooks/useSignUpWithEmail';
function Register() {
  const [inputs , setInputs] = useState({
    fullName : "",
    username : "",
    email : "",
    password : "",
    confirmPassword: ""
  })
  const [showPassword , setShowPassword] = useState(false);
  const [showConfirmPassword , setShowConfirmPassword] = useState(false);
  const {loading , error , signUp} = useSignUpWithEmail();

  return (
    <>
      <Input size={"sm"} placeholder='Enter your email ' fontSize={14}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs ,email:e.target.value})}
        />

      <Input size={"sm"} placeholder='Enter your full name ' fontSize={14}
        value={inputs.fullName}
        onChange={(e) => setInputs({...inputs ,fullName:e.target.value})}
        />

      <Input size={"sm"} placeholder='Enter your  username' fontSize={14}
        value={inputs.username}
        onChange={(e) => setInputs({...inputs ,username:e.target.value})}
        />
      <InputGroup>
        <Input size={"sm"} placeholder='Enter your password' type={showPassword ? 'text' : 'password'} fontSize={14}
        value={inputs.password}
        onChange={(e) => setInputs({...inputs ,password:e.target.value})}/>
        <InputRightElement h={'full'}>
        <Button variant={'ghost'} size={"sm"} onClick={() => {setShowPassword(!showPassword)}}>
          {!showPassword ? (<IoEye/>) : (<IoEyeOff/>)}
        </Button>
        </InputRightElement>
      </InputGroup>
      
      <InputGroup>
        <Input size={"sm"} placeholder='Confirm your password' type={showConfirmPassword ? 'text' : 'password'} fontSize={14}
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs ,confirmPassword:e.target.value})}/>
        <InputRightElement h={'full'}>
          <Button variant={'ghost2'} size={"sm"} onClick={() => {setShowConfirmPassword(!showConfirmPassword)}}>
            {!showConfirmPassword ? (<IoEye/>) : (<IoEyeOff/>)}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12}/>
          {error.message}
        </Alert>
      )}
      <Button isLoading={loading} colorScheme='blue' w={'full'} size={"sm"} fontSize={14} onClick={() => signUp(inputs) }>Sign up</Button>
    </>
  )
}

export default Register