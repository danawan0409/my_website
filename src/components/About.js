import { Flex, Image, Box, Heading, Text, Highlight } from "@chakra-ui/react";
import { getAssetPath } from "@/lib/getAssetPath";

export default function About() {
  return (
    <Flex
      w="100%"
      minH={{ base: 'auto', md: '500px' }}
      h={{ base: 'auto', lg: '100vh' }}
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"       // allows wrapping on small screens
      p={{ base: 3, md: 4 }}
      gap={{ base: 4, lg: 0 }}
    >
      <Flex flexDirection="column" flex="1" minW={{ base: '100%', md: '300px' }} mr={{ base: 0, lg: 4 }}>
        <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }} color="yellow.50">
          <Highlight query="Me" styles={{ color: "red.100" }}>
            About Me
          </Highlight>
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }} mt={4}>
          I&apos;m Dana, a student at UofT for Computer Science. My passions are
          cafe-hopping, trying new restaurants, and stealing food from the fridge
          at 12am. My non-food related passions include music and games. If we
          share any common interests, send me a message!
        </Text>
      </Flex>

      <Image
        src={getAssetPath('/selfie.jpg')}
        flex={{ base: "none", md: "1" }}
        w={{ base: "100%", md: "auto" }}
        maxW={{ base: "100%", md: "60vw", lg: "30vw" }}
        height="auto"
        objectFit="contain"
        p={{ base: 0, md: 4 }}
        alignSelf="center"
      />
    </Flex>
  );
}
