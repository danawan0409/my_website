import { Flex, Image, Box, Heading, Text, Highlight } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      w="100%"
      minW="350px"
      minH="500px"
      h="100vh"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"       // allows wrapping on small screens
      p={4}
    >
      <Flex flexDirection="column" flex="1" minW="300px" mr={4}>
        <Heading size="4xl" color="yellow.50">
          <Highlight query="Me" styles={{ color: "red.100" }}>
            About Me
          </Highlight>
        </Heading>
        <Text fontSize="xl" mt={4}>
          I&apos;m Dana, a student at UofT for Computer Science. My passions are
          cafe-hopping, trying new restaurants, and stealing food from the fridge
          at 12am. My non-food related passions include music and games. If we
          share any common interests, send me a message!
        </Text>
      </Flex>

      <Image
        src="./selfie.jpg"
        flex="1"
        maxW={["90vw", "60vw", "30vw"]}  // scales with parent
        height="auto"
        objectFit="contain"
        p={4}
      />
    </Flex>
  );
}
