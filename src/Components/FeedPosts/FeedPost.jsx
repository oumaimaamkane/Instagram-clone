import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

function FeedPost({avatar , username , img , caption}) {
  return (
    <Container my={10}>
        <PostHeader avatar={avatar} username={username}  />
        <Box borderRadius={7} overflow={'hidden'}>
            <Image src={img} alt={username}/> 
        </Box>
        <PostFooter caption={caption}/>
    </Container>
  )
}

export default FeedPost