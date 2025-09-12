
import { Flex, Image, Box, Heading, Text, Highlight, Center, Grid } from "@chakra-ui/react";
import { useState } from "react";

export default function Experiences() {

  return (
    <Flex w="full" height='100vh' min-height='500px' justifyContent='center' alignItems='center' flexDirection='column' >
        <Heading size='4xl' color='yellow.50'> 
            Work Experiences
        </Heading>
        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}  gap={16} p={16} alignItems='center' >
          <Image src="https://companieslogo.com/img/orig/CIEN.D-042d7f19.png?t=1721039917"/>
          <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Telus_Health_logo.svg/2560px-Telus_Health_logo.svg.png'/>
        </Grid>
    </Flex>
  );
}
