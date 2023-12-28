import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../Components/Profile/ProfileHeader"
import ProfileTabs from "../../Components/Profile/ProfileTabs"
import ProfilePosts from "../../Components/Profile/ProfilePosts"

function Profile() {
  return (
    <Container maxW={'container.lg'} py={5}>
        <Flex
        py={10}
        px={5}
        pl={{base:4 , md : 10}}
        direction={'column'}
        w={'full'}
        maxW={'auto'}
        >
        <ProfileHeader/>
        </Flex>
        <Flex direction={'column'} 
        px={{base:2 , sm:4}} 
        w={'full'} 
        maxH={'auto'} 
        borderTop={'1px solid'}
        borderColor={'whiteAlpha.300'}>
            <ProfileTabs/>
            <ProfilePosts/>
        </Flex>
    </Container>
  )
}

export default Profile