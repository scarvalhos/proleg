import Link from "next/link"
import { Center, Flex, Link as ChakraLink, Text } from "@chakra-ui/react"

export const SubscribeButton = () => {
    return (
        <Link href="/subscribe" passHref>
            <Center
                w="210px"
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
                    px="14"
                    py="3"
                    _hover={{
                        bgColor: "gray.900"
                    }}
                    _active={{
                        bgColor: "gray.900"
                    }}
                >
                    <Text fontWeight="bold">Matricule-se</Text>
                </ChakraLink>
            </Center>
        </Link>
    )
}
