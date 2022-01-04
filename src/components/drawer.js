import {
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
} from "@chakra-ui/react"

const XlDrawer = (props) => {

    const {
        isOpen: isOpenDrawer,
        onOpen: onOpenDrawer,
        onClose: onCloseDrawer
    } = useDisclosure()

    const handleClick = () => {
        onOpenDrawer()
    }


    return (
        <>
            <Button bg="blue.500" onClick={() => handleClick()}
            >Add Yoomans to your Legion</Button>

            <Drawer onClose={onCloseDrawer} isOpen={isOpenDrawer} size="xl">
                <DrawerOverlay />
                <DrawerContent bg="#F5C141">
                    {/* <DrawerHeader></DrawerHeader> */}
                    <DrawerBody>
                        {props.children}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default XlDrawer;