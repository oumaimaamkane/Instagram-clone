import { Box, Button, Flex , Input, InputGroup, InputRightElement, Text} from '@chakra-ui/react'
import {IoHeart, IoHeartOutline} from 'react-icons/io5'
import { FaRegComment } from 'react-icons/fa6'
import { useState } from 'react'
function PostFooter({isProfilePage}) {
  const [liked , setLiked] = useState(false);
  const [likes , setLikes] = useState(500);
  const handleLikes = () =>{
    if(liked){
      setLiked(false);
      setLikes(likes-1);
    }else{
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  const handleComments = () => {
    alert('post your comment');
  };
  return (
    <>
    <Flex direction={'row'} justifyContent={'flex-start'} gap={4} w={'full'} mb={2} mt={3}>
      <Box onClick={handleLikes} cursor={'pointer'}>
        {!liked ? <IoHeartOutline size={25}/> : <IoHeart color={'red'} size={25}/>}
      </Box>
      <Box cursor={'pointer'} onClick={handleComments}>
        <FaRegComment size={25}/>
      </Box>
    </Flex>
    <Text size={'sm'}>
    {likes} likes
    </Text>
    {!isProfilePage && (
      <>
        <Text fontSize={'sm'}>
          Oumaima Amkane {'_'}
          <Text as={'span'}>
            Good
          </Text>
        </Text>
        <Text fontSize={'sm'} color={'gray'}>
          View all 1000 comments
        </Text>
      </>)}
      

      <Flex gap={4} w={'full'} justifyContent={'space-between'} alignItems={'center'}>
        <InputGroup>
        <Input placeholder='enter an element' variant={'flashed'} bg={'initial'} borderBottom={"1px solid"} borderColor={'gray.500'}/>
        <InputRightElement>
        <Button fontSize={14} bg={'transparent'} cursor={'pointer'} color={'blue.500'} _hover={{color : 'white'}}>Post</Button>
        </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  )
}

export default PostFooter