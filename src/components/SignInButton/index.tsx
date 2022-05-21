import Link from "next/link"
import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react"

export const SignInButton = () => {
    return (
        <Link href="/login" passHref>
            <Flex
                bgGradient='linear(to-r, pink.500, purple.400)'
                borderRadius="60"
                transitionDuration="0.3s"
                _hover={{
                    filter: 'brightness(0.8)',
                }}
            >
                <ChakraLink
                    margin="0.5"
                    borderRadius="60"
                    bgColor="gray.900"
                    px="6"
                    py="2"
                    _hover={{
                        bgColor: "gray.900"
                    }}
                    _active={{
                        bgColor: "gray.900"
                    }}
                >
                    <Text fontWeight="bold">Entrar</Text>
                </ChakraLink>
            </Flex>
        </Link>
    )
}
