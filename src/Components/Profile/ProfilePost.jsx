import { GridItem , Flex, Image, Box , Avatar , Text, useDisclosure , Modal , ModalBody , ModalHeader , ModalCloseButton , ModalOverlay , ModalContent, VStack, calc} from '@chakra-ui/react'
import React from 'react'
import { IoHeart } from 'react-icons/io5'
import {FaComment} from 'react-icons/fa6'
import PostFooter from '../FeedPosts/PostFooter'
import Comment from '../Comments/Comment'

function ProfilePost({img}) {
  const {isOpen , onOpen , onClose} = useDisclosure()
  return (
    <GridItem
    cursor={'pointer'}
    overflow={'hidden'}
    borderRadius={4}
    aspectRatio={'1/1'}
    position={'relative'}
    onClick={onOpen}
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
      transition={'all 0.3s ease'}
      gap={5}
      >
        <Flex>
          <IoHeart size={25}/>
          <Text ml={2}>30</Text>
        </Flex>
        <Flex>
          <FaComment size={24}/>
          <Text ml={2}>50</Text>
        </Flex>
      </Flex>
      <Image src={img} h={'100%'} w={'100%'} objectFit={'cover'}/>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}  size={{base:'md' , sm:"md" , md:'5xl'}}>
        <ModalOverlay />
        <ModalContent my={{base : "10px"}} mx={{sm: '10px'}}>
          <ModalCloseButton />
          <ModalBody bg={'black'} p={0}>
            <Flex  gap={2} direction={{base : 'column' , md : 'row'}}>
              {/* Header in small devices */}
                <Flex display={{base : 'flex' , md:'none'}} alignItems={'center'} gap={3} p={3}>
                  <Avatar name='oumaima_codes' src='images/avatar.jpg' size={"sm"} cursor={'pointer'}/>
                  <Flex fontSize={12} fontWeight={'bold'} gap={2} _hover={{color:'whiteAlpha.500'}} cursor={'pointer'}>
                    Oumaima_codes
                    <Box color={'gray'}>*1w</Box>
                  </Flex>
                </Flex>
              <Box borderRadius={5} flex={1.5}>
                <Image src={img} borderRadius={5} h={'100%'} aspectRatio={'1/1'} objectFit={'fill'}/>
              </Box>
              <Flex direction={'column'} justifyContent={'flex-start'} flex={1} px={4}>
                {/* Header in large devices */}
                <Flex display={{base : 'none' , md:'flex'}} alignItems={'center'} gap={3} borderBottom={"1px solid"} borderColor={'whiteAlpha.300'} py={3}>
                  <Avatar name='oumaima_codes' src='images/avatar.jpg' size={"sm"} cursor={'pointer'}/>
                  <Flex fontSize={12} fontWeight={'bold'} gap={2} _hover={{color:'whiteAlpha.500'}} cursor={'pointer'}>
                    Oumaima_codes
                    <Box color={'gray'}>*1w</Box>
                  </Flex>
                </Flex>
                <Flex maxH={"400px"} overflowY={'scroll'} display={{base : 'none' , md:'flex'}} justifyContent={'flex-start'} direction={'column'} >
                  <Text fontSize={14} mb={6}>
                    من بعد ما هضرنا على الطريق 🛤️لي خاص يتبع اي واحد باغي يتخصص فبرمجة Front-end (هادي شي عام تقريبا 🤫)
                    اليوم انهضرو على المسار ديال Back-end , و اكيد حاولت نلخص الامور و حطيت الاهم✅ , و كاينين حويجات محطيتهم و لكن هادشي متيمنعكمش 🙅🏻‍♀️انكم تزيدو تقلبو و تقراو اكثر.
                    الا عجبك المنشور متنساش تبارطاحيه مع صحابك لي مهتمين بالبرمجة ❤️💻
                    .
                    .
                    .
                    .
                    #tech #software#roadmap #webdevelopmentroadmap #frontend #frontenddeveloper #softwareengineer #developer #peoplewhocode #webdevelopment #webdeveloper #coding #programming #web #mobiledevelopment #webdesign #ai #instagram #followforfollowback #artificialintelligence #morocco #usa #برمجة #لغات_برمجة #تطوير_المهارات #تطوير_مواقع #تطوير_تطبيقات #الذكاء_الاصطناعي #المغرب#figma
                    من بعد ما هضرنا على الطريق 🛤️لي خاص يتبع اي واحد باغي يتخصص فبرمجة Front-end (هادي شي عام تقريبا 🤫)
                    اليوم انهضرو على المسار ديال Back-end , و اكيد حاولت نلخص الامور و حطيت الاهم✅ , و كاينين حويجات محطيتهم و لكن هادشي متيمنعكمش 🙅🏻‍♀️انكم تزيدو تقلبو و تقراو اكثر.
                    الا عجبك المنشور متنساش تبارطاحيه مع صحابك لي مهتمين بالبرمجة ❤️💻
                  </Text>
                  <Comment
                  username={"levi.aem"}
                  text = {"Apis pls"}
                  avatar={'images/avatar-2.jpg'}
                  createdAt={'12min ago'}
                  />
                  <Comment
                  username={"web3ar"}
                  text = {"Next time roadmap dial back end 💪 good job"}
                  avatar={'images/avatar-3.jpg'}
                  createdAt={'1d ago'}
                  />
                </Flex>
                <PostFooter isProfilePage={true}/>
              </Flex>
            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>
    </GridItem>
  )
}

export default ProfilePost