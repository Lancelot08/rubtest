import React from "react";
import { chakra, Box, Flex, useColorModeValue, VStack } from "@chakra-ui/react";

const Ma = (props) => {
    return (
        <Flex
            bg="#F5C141"
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                bg="#F5C141"
                direction="column"
                justifyContent="center"
                alignItems="center"
                w="sm"
                mx="auto"
            >

                <Box

                    bg="#F5C141"
                    maxW="7xl"
                    w={{ md: "3xl", lg: "4xl" }}
                    mx="auto"
                    py={{ base: 12, lg: 16 }}
                    px={{ base: 4, lg: 8 }}
                    display={{ lg: "flex" }}
                    alignItems={{ lg: "center" }}
                    justifyContent={{ lg: "center" }}

                    overflow="hidden"
                >
                    <VStack spacing={4}
                        align='stretch'>

                        <chakra.h2
                            py={2}
                            textAlign="center"
                            fontWeight="bold"
                            textTransform="uppercase"
                            color="white"
                            letterSpacing={1}
                        >
                            Welcome to
                        </chakra.h2>
                        <chakra.h3

                            textAlign="center"
                            fontWeight="bold"
                            textTransform="uppercase"
                            color="#8f0100"
                            letterSpacing={1}
                            mt={-50}
                        >
                            The Flock
                        </chakra.h3>

                        <chakra.button
                            onClick={props.handleClick}
                            bg="white"
                            fontSize="xl"
                            fontWeight="bold"
                            color="#8f0100"
                            px={2}
                            py={1}
                            rounded="lg"
                            textTransform="uppercase"
                            _hover={{
                                bg: useColorModeValue("gray.700", "gray.600"),
                            }}
                            _focus={{
                                bg: useColorModeValue("gray.700", "gray.600"),
                                outline: "none",
                            }}
                        >
                            MINT
                        </chakra.button>


                    </VStack>
                </Box>

            </Flex>
        </Flex>
    );
};

export default Ma;