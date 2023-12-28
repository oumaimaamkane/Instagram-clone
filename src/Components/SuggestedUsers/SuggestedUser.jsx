import { Avatar, Box, Flex, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

function SuggestedUser({name , avatar , followers}) {
    const [isFollowed , setIsFollower] = useState(false);
    const handleFollow = () => {
        setIsFollower(!isFollowed)
    }
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name={name} src={avatar} size={'md'}/>
            <Box>
                <Text as={'span'} fontWeight={'700'}>{name}</Text>
                <Text color={'gray.400'} fontSize={12} fontWeight={'400'}>{followers} followers</Text>
            </Box>
        </Flex>
        <Button color={'blue.400'} bg={'transparent'} fontSize={14} p={0} _hover={{bg:'transparent' , color :'white'}} onClick={handleFollow}>
            {!isFollowed ? 'Follow' : 'Unfollowed'}
        </Button>
    </Flex>
  )
}

export default SuggestedUser