'use client'
import { useEffect, useState } from "react";
import { Box, Flex, VStack, Button, Blockquote } from "@chakra-ui/react";
import Intro from "@/components/Intro";
import About from "@/components/About";
import RecentPortfolio from "@/components/RecentPortfolio";
import Experiences from "@/components/Experiences";

export default function Home() {
  const sections = [
    { id: "top", text: "Intro" },
    { id: "about", text: "About" },
    { id: "portfolio", text: "Portfolio" },
    { id: "experiences", text: "Experiences" }
  ];
  const [active, setActive] = useState("top");

  // Observe which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // section is "active" when 60% visible
    );

    sections.forEach((sect) => {
      const el = document.getElementById(sect.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Flex flexDirection='column' alignItems='center' p={16}>
      {/* Sidebar Navbar */}
      <Box
        position="fixed"
        top="50%"
        transform="translateY(-50%)"
        left={0}
        width="200px"
        color="white"
        p={4}
      >
        <Blockquote.Root bgColor='transparent'>
          <Blockquote.Content>
            <VStack spacing={4} align="stretch" p={4}>
              {sections.map((sect) => (
                <Button
                  key={sect.id}
                  onClick={() => scrollTo(sect.id)}
                  variant="ghost"
                  justifyContent="flex-start"
                  color={active === sect.id ? "red.100" : "white"}
                  fontWeight={active === sect.id ? "bold" : "normal"}
                  p={4}
                >
                  {sect.text}
                </Button>
              ))}
            </VStack>
          </Blockquote.Content>
        </Blockquote.Root>
      </Box>


      <Box minWidth='350px' alignItems='center' justifyContent='center'>
        <Box id="intro">
          <Intro />
        </Box>

        <Box id="about">
          <About />
        </Box>

        <Box id="portfolio">
          <RecentPortfolio />
        </Box>

        <Box id="experiences">
          <Experiences />
        </Box>
      </Box>
    </Flex>
  );
}
