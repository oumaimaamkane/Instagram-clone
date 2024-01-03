import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../Components/SideBar'
import { useLocation } from 'react-router-dom'

function BaseLayout({children}) {
    const location = useLocation();
  return (
    <Flex >
        {location.pathname !== '/auth' ? (
            <Box width={{base :'70px' , md : '240px'}}>
                <SideBar/>
            </Box>
        ) : null}
        <Box width={{base :'calc(100% - 70px)' , md : 'calc(100% - 240px)'}}>
            {children}
        </Box>
    </Flex>
  )
}

export default BaseLayout