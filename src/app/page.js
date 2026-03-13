'use client'

import { Provider } from "@/components/ui/provider"
import { IconButton, Tabs, useTabs } from "@chakra-ui/react"
import { Flex, Image, Box } from "@chakra-ui/react";
import Home from "@/components/home-page"; 
import Portfolio from "@/components/portfolio";
import { RiGalleryView2, RiHome4Fill, RiArrowUpCircleLine  } from "react-icons/ri";
import Contact from "@/components/Contact";
import Head from "next/head";
import { getAssetPath } from "@/lib/getAssetPath";


export default function Main() {
  return (
    <>
      <Head>
        <link rel="icon" href={getAssetPath('/Logo.svg')}/>
        <title>Dana Wan&apos;s Website</title>
      </Head>
      <Provider>
        <TabsWithProvider/>

      </Provider>
    </>
  );
}


function TabsWithProvider() {
  const tab = useTabs({ defaultValue: "home" }); // ✅ now inside ChakraProvider
  const tabslst = [
    { tab: "home", name: "Home", content: <Home />, image: <RiHome4Fill /> },
    { tab: "portfolio", name: "Portfolio", content: <Portfolio />, image: <RiGalleryView2 /> },
  ];
  const activeTabContent = tabslst.find((item) => item.tab === tab.value)?.content;

  return (
          <Flex
            width='full'
            alignItems='flex-start'
            justifyContent='center'
            px={{ base: 4, md: 8, lg: 12 }}
            py={{ base: 4, md: 6 }}
            gap={{ base: 4, lg: 6 }}
            wrap={{ base: 'wrap', lg: 'nowrap' }}
          >
            <Box
              w={{ base: '100%', lg: '160px' }}
              display='flex'
              justifyContent={{ base: 'center', lg: 'flex-start' }}
            >
              <Image src={getAssetPath('/Logo.svg')} mt={{ base: 0, lg: 4 }} id="top" boxSize={{ base: '56px', md: '72px' }} />
            </Box>

            <Tabs.RootProvider lazyMount unmountOnExit width={{ base: '100%', lg: '70vw' }} maxW='1100px' fitted value={tab} colorPalette='red' display='flex' flexDirection='column' gap={0}>
              <Tabs.List pt={{ base: 1, md: 1 }} pb={0} mb={0}>
                {tabslst.map((item, index) => (
                  <Tabs.Trigger key={index} value={item.tab} fontSize={{ base: 'sm', md: tab.value === item.tab ? 'lg' : 'md' }}>
                    {item.image}
                    {item.name}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <Box overflowY="auto" mt={{ base: 2, md: 3 }} pt={0}>
                {activeTabContent}
              </Box>
            </Tabs.RootProvider>

            <Box
              w={{ base: '100%', lg: '160px' }}
              display='flex'
              justifyContent={{ base: 'center', lg: 'flex-end' }}
            >
              <Contact />
            </Box>

            <IconButton 
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              position="fixed"
              display={{ base: 'none', lg: 'inline-flex' }}
              bottom={{ base: 4, md: 6 }}
              right={{ base: '4.5rem', md: 6 }}
              color='white'
              bgColor='red.200'
            >
              <RiArrowUpCircleLine />
            </IconButton>

          </Flex>
  );
}