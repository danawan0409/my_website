'use client'

import { Provider } from "@/components/ui/provider"
import { Tabs, useTabs } from "@chakra-ui/react"
import { Flex, Image, Box, Heading } from "@chakra-ui/react";
import IntroAnimation from "./intro-animation/IntroAnimation";

export default function Intro() {

  return (
    <Box w="full">
        <IntroAnimation/>
    </Box>
  );
}
