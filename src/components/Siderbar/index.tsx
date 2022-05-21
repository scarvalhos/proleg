import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { NavMenu } from '../NavMenu'

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    return (
        <>
            { isDrawerSidebar && (
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent bg="gray.800" p="4">
                            <DrawerCloseButton mt="6" />
                            <DrawerHeader>Navegação</DrawerHeader>
                            <DrawerBody>
                                <NavMenu />
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            ) }
        </>
    )
}