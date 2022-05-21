import { HStack } from "@chakra-ui/react";
import { NavLink } from "./NavLink"

export function NavMenu() {
    return (
        <HStack as="nav" spacing="4">
            <NavLink href="/" shouldMatchExactHref>Home</NavLink>
            <NavLink href="/subscribe">Matricule-se</NavLink>
        </HStack>
    )
}