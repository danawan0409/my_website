'use client'

import styles from "./page.module.css";
import { Provider } from "@/components/ui/provider"
import { IconButton, Tabs, useTabs } from "@chakra-ui/react"
import { Flex, Image, Box } from "@chakra-ui/react";
import Home from "@/pages/home-page"; 
import Portfolio from "@/pages/portfolio";
import { RiGalleryView2, RiHome4Fill, RiArrowUpCircleLine  } from "react-icons/ri";
import Contact from "@/components/Contact";
import Head from "next/head";
import { useEffect } from "react";


export default function Main() {
  const tab = useTabs({
    defaultValue: "home",
  }); 

  const tabslst = [
    {
      tab: 'home', 
      name: 'Home', 
      content: <Home />, 
      image: <RiHome4Fill/>
    }, 
    {
      tab: 'portfolio', 
      name: 'Portfolio', 
      content: <Portfolio/>,
      image: <RiGalleryView2/>
    }
  ]

  return (
    <>
      <Head>
        <link rel="icon" href="/Logo.svg"/>
        <title>Dana Wan's Website</title>
      </Head>
      <Provider>
          <Flex width='full' alignItems='flex-start' justifyContent='space-between' px={16}>
            
            <Image src="/Logo.svg" p='4' id="top"/>

            <Tabs.RootProvider lazyMount unmountOnExit width='70vw' fitted value={tab} colorPalette='red'>
              <Tabs.List py={12}>
                {tabslst.map((item, index) => (
                  <Tabs.Trigger key={index} value={item.tab} fontSize={tab.value === item.tab ? 'lg' : 'md'}>
                    {item.image}
                    {item.name}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <Box overflowY="auto">
                {tabslst.map((item, index) => (
                  <Tabs.Content
                    key={index}
                    value={item.tab}
                    height='fit-content'
                    _open={{
                      animationName: "fade-in, scale-in",
                      animationDuration: "300ms",
                    }}
                    _closed={{
                      animationName: "fade-out, scale-out",
                      animationDuration: "120ms",
                    }}
                  >
                    {item.content}
                  </Tabs.Content>
                ))}
              </Box>
            </Tabs.RootProvider>

            <Contact/>

            <IconButton 
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              position="fixed"
              bottom={16}
              right={16}
              color='white'
              bgColor='red.200'
            >
              <RiArrowUpCircleLine />
            </IconButton>

          </Flex>

      </Provider>
    </>
  );
}
