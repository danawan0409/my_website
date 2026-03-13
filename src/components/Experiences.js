
import { Flex, Image, Box, Heading, Text, Highlight, Center, Grid } from "@chakra-ui/react";
import { useState } from "react";

export default function Experiences() {

  return (
    <Flex w="full" minH={{ base: 'auto', md: '500px' }} h={{ base: 'auto', lg: '100vh' }} justifyContent='center' alignItems='center' flexDirection='column' py={{ base: 6, md: 8 }}>
        <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }} color='yellow.50' textAlign='center'> 
            Work Experiences
        </Heading>
        <Grid templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }} gap={{ base: 8, md: 16 }} p={{ base: 4, md: 16 }} alignItems='center' >
          <Image
            src="https://companieslogo.com/img/orig/CIEN.D-042d7f19.png?t=1721039917"
            width="100%"
            height="auto"
            objectFit="contain"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Telus_Health_logo.svg/2560px-Telus_Health_logo.svg.png"
            width="100%"
            height="auto"
            objectFit="contain"
          />
        </Grid>
    </Flex>
  );
}
