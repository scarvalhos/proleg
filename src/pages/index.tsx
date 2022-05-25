import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Image, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Siderbar'
import { SubscribeButton } from '../components/SubscribeButton'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proleg - Programação para Leigos</title>
      </Head>
      <Header />
      <Sidebar />

      <Container
        as="main"
        maxW="75vw"
        h="70vh"
        mt="20"
        display="flex"
        flexDirection="row"
      >
        <Box as="section">
          <Text
            fontSize="16"
          >
            Matrículas abertas até <strong>05 de Março Teste</strong>
          </Text>
          <Text
            fontSize="80"
            fontWeight="600"
            bgGradient='linear(to-r, pink.500, purple.400)'
            bgClip="text"
            mb="-10"
          >
            Programação
          </Text>
          <Text 
            fontSize="80"
            fontWeight="600"
          >
            para leigos
          </Text>
          <Text fontSize="16" mb="8">
            Conheça agora o melhor curso de programação para <br />
            iniciantes da internet.
          </Text>
          <SubscribeButton />
        </Box>
        <Box>
          <Image src='background.svg'/>
        </Box>
      </Container>
    </>
  )
}

export default Home
