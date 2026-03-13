
import { Flex, Image, Box, Heading, Text, Grid } from "@chakra-ui/react";
import { useState } from "react";

export default function Experiences() {
  const [failedLogos, setFailedLogos] = useState({});

  const experienceLogos = [
    {
      id: "ciena",
      label: "Ciena",
      src: "https://companieslogo.com/img/orig/CIEN.D-042d7f19.png?t=1721039917",
    },
    {
      id: "telus-health",
      label: "Telus Health",
      src: "https://images.ctfassets.net/fltupc9ltp8m/2gpVnhLZ33jCLjQDQBJL4T/1a52c0d7010694ad4b207f31e9c4db19/OG_Image-TELUS_Health_Logo-EN.png",
    },
    {
      id: "clio",
      label: "Clio",
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clio.com%2Fca%2Fwp-content%2Fuploads%2Fsites%2F6%2F2025%2F07%2FClio_Meta-Image_General.png&f=1&nofb=1&ipt=1277f7e3dbba43fb579b5fce7856c34d44c05cdb27164412670185e9c2dc1dcf",
    },
  ];

  return (
    <Flex w="full" overflowX='clip' minH={{ base: 'auto', md: '500px' }} h={{ base: 'auto', lg: '100vh' }} justifyContent='center' alignItems='center' flexDirection='column' py={{ base: 6, md: 8 }}>
        <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }} color='yellow.50' textAlign='center'> 
            Work Experiences
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
          gap={{ base: 8, md: 12 }}
          px={{ base: 3, md: 12 }}
          py={{ base: 4, md: 12 }}
          alignItems='center'
          justifyItems='center'
          w='full'
        >
          {experienceLogos.map((experience, index) => {
            const isThirdItem = index === 2;
            const hasFailed = Boolean(failedLogos[experience.id]);

            return (
              <Box
                key={experience.id}
                w='full'
                maxW={{ base: '22rem', md: '26rem' }}
                h={{ base: "90px", md: "120px" }}
                gridColumn={{ base: "auto", xl: isThirdItem ? "1 / -1" : "auto" }}
                justifySelf='center'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                {hasFailed ? (
                  <Text color='yellow.50' fontWeight='semibold' textAlign='center' fontSize={{ base: 'lg', md: 'xl' }}>
                    {experience.label}
                  </Text>
                ) : (
                  <Image
                    src={experience.src}
                    w='full'
                    h='full'
                    objectFit='contain'
                    onError={() => {
                      setFailedLogos((prev) => ({ ...prev, [experience.id]: true }));
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Grid>
    </Flex>
  );
}
