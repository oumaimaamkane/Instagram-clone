import { Avatar, AvatarGroup, Box, Button, Container, Flex , Text } from "@chakra-ui/react"

function ProfileHeader() {
  return (
    <Container maxW={'container.lg'}>
        <Flex gap={8} alignItems={'center'} justifyContent={'flex-start'} direction={{base:'column' , md:'row'}}>
            <AvatarGroup size={{base:'xl' , md : '2xl'}}>
            <Avatar src="images/avatar.jpg" name="oumaima_codes"/>
            </AvatarGroup>
            <Box px={8}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize={18} fontWeight={400}>Oumaima_codes</Text>
                    <Button bg={'white'} color={'black'} _hover={{bg:'whiteAlpha.800'}} size={{base:'xs' , md : 'sm'}}>Edit profil</Button>
                </Flex>
                <Flex direction={'row'}  gap={8} w={'full'} py={4}>
                    <Text> <Text as={'span'} fontWeight={'bold'}> 36</Text> publications</Text>
                    <Text> <Text as={'span'} fontWeight={'bold'}>2650</Text> followers</Text>
                    <Text> <Text as={'span'} fontWeight={'bold'}>2885</Text> follows</Text>
                </Flex>
                <Box py={3}>
                    <Text fontWeight={'600'} fontSize={'16'}>Oumaima amkane | web developer</Text>
                    <Text>📍Agadir
                        🔹Project manager & developer of @afriposte
                        🔹Web developer🌐👩🏻‍💻(php-Laravel)
                        🔹 E-comm 📈
                    </Text>
                </Box>

            </Box>
            
        </Flex>
    </Container>
  )
}

export default ProfileHeader