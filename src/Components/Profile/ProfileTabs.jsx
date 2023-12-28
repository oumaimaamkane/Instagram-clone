import { Box, Flex , Text } from '@chakra-ui/react'
import {BsGrid3X3} from 'react-icons/bs'
import { IoBookmarkOutline, IoHeartOutline } from 'react-icons/io5'
function ProfileTabs() {
  return (
    <Flex gap={8} alignItems={'center'} justifyContent={'center'} p={2}>
      <Flex justifyContent={'center'} alignItems={'center'} gap={1} px={5} cursor={'pointer'} borderTop={"1px solid"} borderColor={'whiteAlpha.800'}>
        <Box>
          <BsGrid3X3 size={16}/>
        </Box>
        <Text fontSize={18} fontWeight={'semi-bold'}>Posts</Text>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'} gap={1} px={5} cursor={'pointer'}>
        <Box>
          <IoBookmarkOutline size={16}/>
        </Box>
        <Text fontSize={18} fontWeight={'semi-bold'}>Saved</Text>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'} gap={1} px={5} cursor={'pointer'}>
        <Box>
          <IoHeartOutline size={16}/>
        </Box>
        <Text fontSize={18} fontWeight={'semi-bold'}>Likes</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs