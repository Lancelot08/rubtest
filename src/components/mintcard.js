import React from "react";
import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";
//


const MintCard = (props) => {
    return (
        <Flex

            p={2}
            w={256}
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                w="sm"
                mx="auto"
            >
                <Box
                    bg="gray.300"
                    h={64}
                    w="full"
                    rounded="lg"
                    shadow="md"
                    bgSize="cover"
                    bgPos="center"
                    style={{
                        backgroundImage: `url(${props.image})`
                        ,
                    }}
                ></Box>

                <Box
                    w={{ base: 56, md: 64 }}
                    bg={useColorModeValue("white", "gray.800")}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                >
                    <chakra.h3
                        py={2}
                        textAlign="center"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color={useColorModeValue("gray.800", "white")}
                        letterSpacing={1}
                    >
                        Rubber Duckz
                    </chakra.h3>

                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        py={2}
                        px={3}
                        bg={useColorModeValue("gray.200", "gray.700")}
                    >
                        <chakra.span
                            fontWeight="bold"
                            color={useColorModeValue("gray.800", "gray.200")}
                        >
                            Matic {props.cost}
                        </chakra.span>

                        <chakra.button
                            onClick={props.handleClick}

                            fontSize="xs"
                            fontWeight="bold"
                            bg="tomato"
                            px={2}
                            py={1}
                            rounded="lg"
                            textTransform="uppercase"
                            _hover={{
                                bg: useColorModeValue("tomato.700", "tomato.600"),
                            }}
                            _focus={{
                                bg: useColorModeValue("tomato.700", "tomato.600"),
                                outline: "none",
                            }}
                        >

                            Buy
                        </chakra.button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default MintCard;