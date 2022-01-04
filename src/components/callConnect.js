import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";

export default function Sj(props) {
    return (
        <Flex
            bg={useColorModeValue("#F5C141", "gray.600")}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box bg={useColorModeValue("#F5C141", "gray.800")}>
                <Box
                    maxW="7xl"
                    w={{ md: "3xl", lg: "4xl" }}
                    mx="auto"
                    py={{ base: 12, lg: 16 }}
                    px={{ base: 4, lg: 8 }}
                    display={{ lg: "flex" }}
                    alignItems={{ lg: "center" }}
                    justifyContent={{ lg: "center" }}
                >
                    <chakra.h2
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        lineHeight="shorter"
                        color={useColorModeValue("gray.900", "gray.100")}
                    >
                        <chakra.span display="block">{props.mainText}</chakra.span>

                    </chakra.h2>
                    <chakra.p>
                        <sub>
                            <chakra.h6 verticalAlign="true">
                                <chakra.span
                                    display="block"
                                    color={useColorModeValue("brand.600", "gray.500")}
                                >
                                    {props.littleText}
                                </chakra.span>
                            </chakra.h6>
                        </sub>

                    </chakra.p>
                    <chakra.p>
                        <chakra.button
                            onClick={props.onClick}
                            w={["full", , "auto"]}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            px={5}
                            py={3}
                            border="solid transparent"
                            fontSize="6xl"
                            textTransform="uppercase"
                            fontFamily='wf_e4b1e1e4405343d9ad0296011'
                            rounded="lg"
                            borderRadius="lg"
                            shadow="md"
                            color="white"
                            bg="#8f0100"
                            _hover={{
                                bg: "brand.50",
                            }}
                        >
                            <chakra.span width="180px">CONNECT</chakra.span>
                        </chakra.button>

                    </chakra.p>

                    {/* </Stack> */}
                </Box>
            </Box>
        </Flex>
    );
}