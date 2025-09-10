"use client";

import { Box, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = ["about", "skills", "contact"];

export default function Scrollbar() {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "about";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = "gray.200";
  const activeBg = "blue.300";

  return (
    <Box display="flex" h="100vh">
      {/* Sidebar */}
      <VStack
        position="sticky"
        top="50%"
        align="start"
        spacing={4}
        p={4}
        bg={bg}
      >
        {sections.map((id) => (
          <Button
            key={id}
            size="sm"
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            bg={currentSection === id ? activeBg : "transparent"}
          >
            {id.toUpperCase()}
          </Button>
        ))}
      </VStack>

      {/* Content */}
      <Box flex="1" pl={8}>
        {sections.map((id) => (
          <Box
            key={id}
            id={id}
            h="100vh"
            borderBottom="1px solid"
            borderColor="gray.300"
          >
            <h1>{id.toUpperCase()}</h1>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
