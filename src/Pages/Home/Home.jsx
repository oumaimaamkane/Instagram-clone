import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../Components/FeedPosts/FeedPosts'
import SuggestedUsers from '../../Components/SuggestedUsers/SuggestedUsers'

function Home() {
  return (
    <Container maxW={'container.lg'}>
      <Flex direction={"row"} gap={20}>
        <Box flex={3} py={10}>
          <FeedPosts/>
        </Box>
        <Box display={{base : 'none' , lg : 'block'}}  flex={2} mr={20} maxW={"300px"}>
          <SuggestedUsers/>
        </Box>
      </Flex>
    </Container>
  )
}

export default Home