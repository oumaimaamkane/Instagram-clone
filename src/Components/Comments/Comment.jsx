import {Flex , Avatar , Box}from '@chakra-ui/react'

function Comment({createdAt , username , avatar , text}) {
  return (
    <Flex justifyContent={'flex-start'} gap={2} mb={3}>
         <Avatar name={username} src={avatar} size={"sm"}/>
        <Flex gap={1} alignItems={'flex-start'} direction={'column'}>
            <Flex fontSize={12} fontWeight={'bold'} gap={2}>
                {username}
                <Box color={'gray'}>{text}</Box>
            </Flex>
            <Box fontSize={10} color={'gray'}>{createdAt}</Box>
        </Flex> 
    </Flex>
  )
}

export default Comment