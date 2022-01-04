import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Stack,
    Flex,
    Link,
} from "@chakra-ui/react";

const HeadOne = () => {
    return (
        <Box bg="#F5C141">
            <Stack spacing={0} align={"center"}>
                {/*  */}
                <chakra.h1
                    fontSize="6xl"
                    letterSpacing="tight"
                    lineHeight="short"
                    fontWeight="extrabold"
                    color="white"
                    textTransform="uppercase"
                    fontFamily='wf_e4b1e1e4405343d9ad0296011'
                    textAlign={['left']}
                >
                    <chakra.span display={{ base: "block", xl: "inline" }}>
                        <Link href='https://www.rubberduckz.com/'>
                            RUBBER DUCKZ
                        </Link>

                    </chakra.span>

                </chakra.h1>
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"

                >
                    <chakra.h1
                        color="white"
                        fontSize="6xl"
                        textTransform="uppercase"
                        fontFamily='wf_e4b1e1e4405343d9ad0296011'
                        letterSpacing="wide"
                        textAlign={['right']}
                    >
                        WELCOME TO
                    </chakra.h1>
                    <chakra.span
                        color="#8f0100"
                        fontSize="6xl"
                        textTransform="uppercase"
                        fontFamily='wf_e4b1e1e4405343d9ad0296011'
                        letterSpacing="wide"
                        mt={-14}
                        textAlign={['right']}
                    >
                        THE FLOCK
                    </chakra.span>
                    <chakra.p
                        pr={{ base: 0, lg: 16 }}
                        mb={4}
                        fontSize="lg"
                        color="#8f0100"
                        fontFamily='lulo-clean-w01-one-bold'
                        letterSpacing="wider"
                    >
                        PLEASE MINT YOUR
                        RUBBER DUCKZ
                    </chakra.p>


                </Flex>

            </Stack>
        </Box>
    );
};

export default HeadOne;