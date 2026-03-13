'use client'
import { useEffect, useState } from "react";
import { Box, Flex, VStack, Button, Blockquote, IconButton } from "@chakra-ui/react";
import Intro from "@/components/Intro";
import About from "@/components/About";
import RecentPortfolio from "@/components/RecentPortfolio";
import Experiences from "@/components/Experiences";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

export default function Home() {
  const sections = [
    { id: "top", text: "Intro" },
    { id: "about", text: "About" },
    { id: "portfolio", text: "Portfolio" },
    { id: "experiences", text: "Experiences" }
  ];
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <Flex flexDirection='column' alignItems='center' px={{ base: 2, md: 6, lg: 10 }} py={{ base: 6, md: 10 }}>
      {/* Sidebar Navbar */}
      <Box
        position="fixed"
        display={{ base: "none", lg: "block" }}
        top={{ lg: "50%" }}
        transform={{ lg: "translateY(-50%)" }}
        left={{ lg: 0 }}
        width={{ lg: "200px" }}
        zIndex={10}
        color="white"
        p={{ lg: 4 }}
      >
        <Blockquote.Root bgColor='transparent'>
          <Blockquote.Content>
            <VStack
              spacing={4}
              align="stretch"
              p={4}
              flexDirection='column'
              justifyContent='flex-start'
            >
              {sections.map((sect) => (
                <Button
                  key={sect.id}
                  onClick={() => scrollTo(sect.id)}
                  variant="ghost"
                  justifyContent='flex-start'
                  color={active === sect.id ? "red.100" : "white"}
                  fontWeight={active === sect.id ? "bold" : "normal"}
                  _hover={{ color: "red.100", bgColor: "rgba(87, 48, 43, 0.6)" }}
                  px={4}
                  py={4}
                  fontSize='md'
                >
                  {sect.text}
                </Button>
              ))}
            </VStack>
          </Blockquote.Content>
        </Blockquote.Root>
      </Box>

      <Box display={{ base: "block", lg: "none" }}>
        {menuOpen ? (
          <Box
            position="fixed"
            right={{ base: 4, md: 6 }}
            bottom={{ base: 20, md: 24 }}
            zIndex={20}
            p={2}
            borderRadius="xl"
            bg="rgba(21, 8, 7, 0.5)"
            backdropFilter="blur(8px)"
            boxShadow="0 10px 30px rgba(0,0,0,0.3)"
          >
            <VStack align="stretch" spacing={2}>
              {sections.map((sect) => (
                <Button
                  key={sect.id}
                  onClick={() => scrollTo(sect.id)}
                  variant="solid"
                  justifyContent="flex-start"
                  bgColor={active === sect.id ? "rgba(240, 104, 98, 0.24)" : "rgba(87, 48, 43, 0.42)"}
                  color={active === sect.id ? "yellow.50" : "white"}
                  borderWidth="1px"
                  borderColor={active === sect.id ? "rgba(255, 155, 150, 0.9)" : "rgba(255, 155, 150, 0.55)"}
                  _hover={{ bgColor: "rgba(87, 48, 43, 0.5)" }}
                  borderRadius="lg"
                  px={5}
                  py={5}
                  w="min(180px, calc(100vw - 2rem))"
                >
                  {sect.text}
                </Button>
              ))}
            </VStack>
          </Box>
        ) : null}

        <IconButton
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close section menu" : "Open section menu"}
          position="fixed"
          right={{ base: 4, md: 6 }}
          bottom={{ base: 4, md: 6 }}
          zIndex={21}
          borderRadius="full"
          boxSize={12}
          bgColor='red.200'
          color='white'
          _hover={{ bgColor: 'red.100' }}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </IconButton>
      </Box>


      <Box w='full' maxW='1200px' px={{ base: 2, md: 4 }} pb={{ base: 16, lg: 0 }} alignItems='center' justifyContent='center'>
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
