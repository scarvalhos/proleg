import { Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    children: string;
    href: string;
    shouldMatchExactHref?: boolean;
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} shouldMatchExactHref passHref>
            <ChakraLink
                color="gray.600"
                paddingX="4"
                _hover={{
                    textDecoration: "none"
                }}
                {...rest}
            >
                <Text marginTop="8">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}
