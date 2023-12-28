import { GridItem , Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { IoHeart } from 'react-icons/io5'
import {FaComment, FaRegComment} from 'react-icons/fa6'
function ProfilePost({img}) {
  return (
    <GridItem
    cursor={'pointer'}
    overflow={'hidden'}
    borderRadius={4}
    aspectRatio={'1/1'}
    position={'relative'}
    >
      <Flex
      opacity={0}
      _hover={{opacity : 1}}
      bg={"blackAlpha.700"}
      zIndex={1}
      justifyContent={'center'}
      position={'absolute'}
      aspectRatio={"1/1"}
      h={'100%'}
      alignItems={'center'}
      gap={4}
      >
        <IoHeart size={25}/>
        <FaComment size={24}/>
      </Flex>
      <Image src={img}/>
    </GridItem>
  )
}

export default ProfilePost