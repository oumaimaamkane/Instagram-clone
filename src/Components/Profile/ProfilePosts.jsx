import { Box, Grid, GridItem, Skeleton, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost';

function ProfilePosts() {
  const [isLoading , setIsLoading] = useState(true);
  const Posts = [
    {img : 'images/Post-1.jpg'},
    {img : 'images/Post-Profile-2.jpeg'},
    {img : 'images/Post-Profile-3.jpg'},
    {img : 'images/Post-Profile-4.jpg'},
    {img : 'images/Post-Profile-5.jpeg'},
    {img : 'images/Post-Profile-6.jpg'},
  ];
  useEffect(() => {
    setTimeout(()=>{setIsLoading(false)},2000)
  },[])

  return (
    <Grid templateColumns={{sm:'repeat(1 , 1fr)' , md: 'repeat(3 , 1fr)'}} gap={1} columnGap={1}>
      {isLoading && [0,1,2,3,4,5].map((_,index)=>(
        <VStack key={index} alignItems={'flex-start'} gap={4} >
          <Skeleton w={'full'}>
            <Box h='300px'> hidden content</Box>
          </Skeleton>
        </VStack>
      ))}
      {!isLoading && Posts.map((Post , index) => {
        return(
          <ProfilePost key={index} img={Post.img}/>
        );
        })
     
      }
    </Grid>
  )
}

export default ProfilePosts