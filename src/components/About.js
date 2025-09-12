
import { Flex, Image, Box, Heading, Text, Highlight, Center } from "@chakra-ui/react";
import { useState } from "react";

export default function About() {

  return (
    <Flex w="full" height='100vh' min-height='500px' alignItems='center'>
        <Flex flexDirection='column'>
            <Heading size='4xl' color='yellow.50'> 
                <Highlight query="Me" styles={{ color: "red.100" }}>
                    About Me
                </Highlight>
            </Heading>
            <Text fontSize='xl' p={2}>I&apos;m Dana, a student at UofT for Computer Science. My passions are cafe-hopping, trying new restaurants, and stealing food from the fridge at 12am. My non-food related passions include music and games. If we share any common interests, send me a message!</Text>
        </Flex>
        <Image src="/selfie.jpg" w={["90vw", "60vw", "30vw"]}  h="fit-content" p={4}/>
    </Flex>
  );
}
