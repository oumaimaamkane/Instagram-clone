import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'
const styles ={
  global :(props) => ({
    bg:mode("gray.100" , "#000")(props),
    color:mode("gray.800" , "whiteAlpa.900")(props)
  })
}
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config , styles })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
