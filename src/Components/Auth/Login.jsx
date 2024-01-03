import { Input , Button} from "@chakra-ui/react"
import { useState } from "react"
function Login() {
  const [inputs , setInputs] = useState({
    email : "",
    password : "",
    confirmPassword: ""
})
  return (
    <>
        <Input size={"sm"} placeholder='Enter your email , username or phone number' fontSize={14}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs ,email:e.target.value})}
        />
        <Input size={"sm"} placeholder='Enter your password' type='password' fontSize={14}
        value={inputs.password}
        onChange={(e) => setInputs({...inputs ,password:e.target.value})}/>
        <Button colorScheme='blue' w={'full'} size={"sm"} fontSize={14}>Log in</Button>

    </>
  )
}

export default Login