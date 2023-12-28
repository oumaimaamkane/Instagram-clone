import SuggestedHeader from './SuggestedHeader'
import { Box, Flex, Link,Text, VStack } from '@chakra-ui/react'
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
    const users =[
        {name:"John Doe", avatar: "https://i.pravatar.cc/150?img=3" , followers : '18000'},
        {name:"Jane Smith",avatar: "https://i.pravatar.cc/150?img=4" , followers : "500"},
        {name:"Mary Johnson", avatar: "https://i.pravatar.cc/150?img=26" , followers : "29199"}
    ]
  return (
    <VStack gap={4} py={8} px={6}>
        <SuggestedHeader/>
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>Suggested for you</Text>
            <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>View all</Text>
        </Flex>
    {users.map((user , index) => {
        return (
        <SuggestedUser key={index} name={user.name} avatar={user.avatar} followers={user.followers}/>)
    })}
    <Box py={5}>
        <Text fontSize={14}>
        © 2023 Created by  
        <Link href='https://app.afriposte.com/sller' target='_blank' color={"gray.400"} style={{textDecoration:'none'}}> Oumaima amkane</Link>
        </Text>
    </Box>
    </VStack>
  )
}

export default SuggestedUsers