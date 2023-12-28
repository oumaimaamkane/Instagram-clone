import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

function FeedPosts() {
  const [loading , setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=> {setIsLoading(false)} , 2000);
  } , []);
  const Posts = [
    {
      avatar : 'images/avatar.jpg',
      username : 'oumaima_codes',
      img : 'images/Post-1.jpg',
      caption : 'test'
    },
    {
      avatar : 'images/avatar-2.jpg',
      username : 'emecexpo',
      img : 'images/Post-2.jpg',
      caption : 'Follow us'
    },
    {
      avatar : 'images/avatar-3.jpg',
      username : 'devslops',
      img : 'images/Post-3.jpg',
      caption : 'joke'
    },
  ]
  return (
    <Container maxW={'container.m'} py={2} px={2}>
      {loading && [0,1,2,3].map((index)=>{
        return(
          <VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
            <SkeletonCircle size="8"/>
            <VStack gap={2} alignItems={'flex-start'}>
              <Skeleton height={"10px"} width={"200px"}/>
              <Skeleton height={"10px"} width={"200px"}/>
            </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={'500px'}>content</Box>
            </Skeleton>

          </VStack>
        );
      })}
      {!loading &&  
        Posts.map((Post , index) => {
          return(
          <FeedPost key={index} avatar={Post.avatar} username={Post.username} img={Post.img} caption={Post.caption} />
          )
        })
      
      }

    </Container>
  )
}

export default FeedPosts