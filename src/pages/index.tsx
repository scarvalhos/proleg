import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Center, Container, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Siderbar'
import { SubscribeButton } from '../components/SubscribeButton'
import { url } from 'inspector'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proleg - Programação para Leigos</title>
      </Head>
      <Header />
      <Sidebar />
      
      <Box
        w="100%"
        h="100vh"
        backgroundImage="url('/background.svg')"
        backgroundPosition="center"
        backgroundSize="cover"
        pt="20"
      >
        <Container
          as="main"
          maxW="75vw"
          h="70vh"
          display="flex"
          flexDirection="row"
        >
          <Box as="section">
            <Text
              fontSize="16"
            >
              Matrículas abertas até <strong>05 de Março</strong>
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
        </Container>
      </Box>
      <Container
        as="main"
        maxW="75vw"
        h="100vh"
        p="0"
        pt="20"
        display="flex"
        flexDirection="row"
      >
      <Tabs width="100%">
        <TabList borderColor="gray.700">
          <Tab _selected={{ borderColor: 'pink.500', borderBottom: "3px solid pink.500" }} p="1rem 3rem">Módulo 01</Tab>
          <Tab _selected={{ borderColor: 'pink.500', borderBottom: "3px solid pink.500" }} p="1rem 3rem">Módulo 02</Tab>
          <Tab _selected={{ borderColor: 'pink.500', borderBottom: "3px solid pink.500" }} p="1rem 3rem">Módulo 03</Tab>
          <Tab _selected={{ borderColor: 'pink.500', borderBottom: "3px solid pink.500" }} p="1rem 3rem">Módulo 04</Tab>
          <Tab _selected={{ borderColor: 'pink.500', borderBottom: "3px solid pink.500" }} p="1rem 3rem">+ Bônus</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="2rem 0">
            <Text
              bgGradient='linear(to-r, pink.500, purple.400)'
              bgClip="text"
              fontSize="5xl"
              fontWeight="700"
              mb="1rem"
            >
              Introdução ao HTML
            </Text>
            <Text pr="28" mb="2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida varius enim sociis sapien et sit elit tellus. Nisi porttitor nisi eros, laoreet. Lectus amet posuere odio sit nisi. Quam arcu sollicitudin neque vel ornare rutrum augue urna vitae. Vel sapien, ac quisque lectus. Eu lacus, pellentesque tincidunt enim vel luctus id. Convallis sagittis odio velit pellentesque ornare aliquam id tempus. <br /><br />
              Viverra a euismod porttitor in leo malesuada risus. Leo quis a nullam facilisis amet, erat cursus. Sollicitudin porta nunc diam consequat imperdiet ullamcorper non magnis lobortis. Etiam sed gravida nunc praesent donec nisl purus. Porta diam morbi nisl urna dictumst lorem montes, fames. Nunc lectus senectus phasellus et id. Massa fermentum varius et sociis nisl id felis.
            </Text>
            <SubscribeButton />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Container>
      <Box
        w="100%"
        h="100vh"
        bgColor="gray.800"
        pt="20"
      >
        <Container
          as="main"
          maxW="75vw"
          h="70vh"
          display="flex"
          flexDirection="row"
        >
          <Box>
            <Image src="/girl.svg" boxSize={452} />
          </Box>
          <Flex flexDirection="column" justifyContent="center" pl="2rem">
            <Flex>
              <Text
                fontWeight="700"
                fontSize="5xl"
                lineHeight="1.1"
              >
                Mais de
              </Text>
              <Text
                bgGradient='linear(to-r, pink.500, purple.400)'
                bgClip="text"
                ml="1.5"
                fontWeight="700"
                fontSize="5xl"
                lineHeight="1.1"
                >
                200h
              </Text>
            </Flex>
            <Text
              fontWeight="700"
              fontSize="5xl"
              lineHeight="1.1"
            >
              em aulas gravadas<br />
              para você decolar!
            </Text>
            <Text
              mt="6"
              mb="8"
              color="gray.600"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit egestas feugiat placerat aliquam pellentesque.
            </Text>
            <SubscribeButton />
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Home
