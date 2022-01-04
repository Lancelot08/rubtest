import React, { useState } from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Flex,
    Stack,
    HStack,
    VStack
} from "@chakra-ui/react";



const CTA = (props) => {

    const MintSection = (props) => {

        const [contatore, setContatore] = useState(2);
        return (<VStack>
            <HStack maxW='180px' >
                <chakra.span color="#8f0100"
                    fontSize="6xl"
                    textTransform="uppercase"
                    fontFamily='wf_e4b1e1e4405343d9ad0296011'
                    letterSpacing="wide" onClick={() => {

                        setContatore(1);
                    }}>-</chakra.span>
                <chakra.span color="#8f0100"
                    fontSize="6xl"
                    textTransform="uppercase"
                    fontFamily='wf_e4b1e1e4405343d9ad0296011'
                    letterSpacing="wide" textAlign={['right']}
                >{contatore}</chakra.span>
                <chakra.span color="#8f0100"
                    fontSize="6xl"
                    textTransform="uppercase"
                    fontFamily='wf_e4b1e1e4405343d9ad0296011'
                    letterSpacing="wide" onClick={() => {

                        setContatore(2);
                    }}>+</chakra.span>
            </HStack>
            <Box display="inline-flex" rounded="md" shadow="md" borderRadius="full">
                <chakra.a
                    onClick={(e) => {
                        e.preventDefault();
                        props.handleClick(contatore);
                    }}
                    mt={2}
                    py={8}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    textTransform="uppercase"
                    fontFamily='wf_e4b1e1e4405343d9ad0296011'
                    fontSize="4xl"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    w="full"
                    rounded="lg"
                    borderRadius="full"
                    color={useColorModeValue("white")}
                    bg="#8f0100"
                >
                    <chakra.span width="180px">MINT</chakra.span>

                </chakra.a>
            </Box>
        </VStack>
        )

    }


    return (
        <Stack spacing={0} align={"center"}>

            <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                zIndex={3}
            >
                <Box display="inline-flex">
                    <MintSection handleClick={props.handleClick} />

                </Box>
            </Flex>

        </Stack>
    );
};

export default CTA;