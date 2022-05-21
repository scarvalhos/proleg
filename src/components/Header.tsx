import Link from "next/link"
import { Container, Flex, HStack, Image, Text, Link as ChakraLink, useBreakpointValue, Icon, IconButton} from "@chakra-ui/react"
import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from "../contexts/SidebarDrawerContext"
import { NavMenu } from "./NavMenu"
import { SignInButton } from "./SignInButton"

export const Header = () => {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    })

    return (
        <Flex
            as="header"
            flex={1}
            h="80px"
            borderBottom="1px"
            borderBottomColor="gray.700"
        >
            <Container
                maxW='90vw'
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <HStack>
                    <Image
                        boxSize='8'
                        src="/favicon.png"
                        alt='Logo | Planetdev'
                    />
                    <Text fontWeight="600" ml="2">proleg.com</Text>
                </HStack>

                { isWideVersion ? (
                    <>
                        <NavMenu />

                        <HStack spacing="4">
                            <Link href="/register" passHref>
                                <ChakraLink _hover={{ textDecoration: "none" }}>
                                    <Text>Cadastre-se</Text>
                                </ChakraLink>
                            </Link>
                            <SignInButton />
                        </HStack>
                    </>
                ) : (
                    <IconButton
                        aria-label="Open navigation"
                        icon={<Icon as={RiMenuLine}/>}
                        fontSize="24"
                        variant="unstyled"
                        onClick={onOpen}
                        mr="2"
                    >

                    </IconButton>
                )}
            </Container>
        </Flex>
    )
}