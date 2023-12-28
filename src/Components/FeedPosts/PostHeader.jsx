import { Avatar, Box, Flex , Text} from '@chakra-ui/react'
import React from 'react'

function PostHeader({avatar , username}) {
  return (
    <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2} mb={2}>
      <Flex alignItems={'center'} gap={3}>
        <Avatar name={username} src={avatar} size={"sm"}/>
        <Flex fontSize={12} fontWeight={'bold'} gap={2}>
          {username}
          <Box color={'gray'}>*1w</Box>
        </Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Text
        fontSize={12}
        color={'blue.500'}
        _hover={{color : 'white'}}
        transition={'0.2 ease-in-out'}
        >Unfollow</Text>
      </Box>
    </Flex>
  )
}

export default PostHeader