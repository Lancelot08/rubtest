import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";


export default function NftImage(props) {
    let srcImage = "https://static.wixstatic.com/media/485d82_3889f11d2844404ea6b5ab52e775161e~mv2.jpg"
    // console.log(jD)
    return (
        <Box
            w="xs"
            bg="teal.500"
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            mx="auto"
        >
            <Image
                w="full"
                h={56}
                fit="cover"
                src={srcImage}
                alt="avatar"
            />
            {/* 
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.800", "white")} */}
            <Box py={5} textAlign="center">
                <chakra.span

                    display="block"
                    fontSize="2xl"
                    color="white"
                    fontWeight="bold"

                >
                    Rubber Duckz {props.id}
                </chakra.span>

            </Box>
        </Box>

    );
};

