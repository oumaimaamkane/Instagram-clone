import { Avatar, Flex , Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function SuggestedHeader() {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} py={2} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src='images/avatar.jpg' size={'sm'} name='oumaima'/>
            <Text fontSize={14} fontWeight={'700'}>oumaima_codes</Text>
        </Flex>
       <Link as={RouterLink} to={'/auth'} fontSize={14} color={'blue.500'} style={{textDecoration:'none'}}>Log out</Link>
    </Flex>
  )
}

export default SuggestedHeader