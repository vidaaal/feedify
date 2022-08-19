import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { theme } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box w="100%" px="4">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
