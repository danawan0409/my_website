'use client'

import { IconButton, useBreakpointValue } from "@chakra-ui/react"
import { Flex, Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { projects } from "@/components/info/projects"
import PortfolioCard from "./PortfolioCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export default function RecentPortfolio() {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0); // track left/right
    const cardsPerPage = useBreakpointValue({ base: 1, md: 3 }) ?? 3;
    const recentProjects = projects.slice(0, 6);
    const mobileCardWidth = "min(18rem, calc(100vw - 8rem))";

    const maxPage = Math.max(0, Math.ceil(recentProjects.length / cardsPerPage) - 1);

    useEffect(() => {
        setPage((prev) => Math.min(prev, maxPage));
    }, [maxPage]);

    const visibleCards = recentProjects.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);
    const paginate = (newPage) => {
        if (newPage === page) return;
        setDirection(newPage > page ? 1 : -1);
        setPage(newPage);
    };

    return (
        <Flex flexDirection='column' align="center" gap={{ base: 3, md: 4 }} w="full" minH={{ base: 'auto', md: '100vh' }} py={{ base: 6, md: 8 }} justifyContent='center'>
            <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }} textAlign='center' color='yellow.50'>Recent Projects and Contributions</Heading>
            <Flex justifyContent='center' alignItems='center' w='full' gap={{ base: 1, md: 2 }} px={{ base: 1, md: 0 }}> 
                <IconButton 
                    onClick={() => paginate(Math.max(0, page - 1))} 
                    isDisabled={page === 0}
                    color={page === 0 ? 'yellow.300' : 'red.50'}
                    bgColor={page === 0 ? 'brown.100' : 'brown.300'}
                    opacity={page === 0 ? 0.55 : 1}
                    cursor={page === 0 ? 'not-allowed' : 'pointer'}
                    _hover={{ bgColor: page === 0 ? 'brown.100' : 'red.300' }}
                    _disabled={{ opacity: 0.55 }}
                    aria-label="Previous projects page"
                    flexShrink={0}
                >
                    <FaAngleLeft/>
                </IconButton>
                <AnimatePresence mode="wait" custom={direction}>
                    <MotionFlex
                        key={page} // re-mounts when page changes
                        initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        wrap={{ base: "wrap", md: "nowrap" }}
                        justify="center"
                        direction={{ base: "column", md: "row" }}
                        align="stretch"
                        gap={{ base: 3, md: 4 }}
                        w={{ base: mobileCardWidth, md: 'full' }}
                        maxW='1200px'
                    >
                        {visibleCards.map((card, i) => (
                        <Box
                            key={`${page}-${i}`}
                            display='flex'
                            flex='0 0 auto'
                            justifyContent='center'
                            w={{ base: mobileCardWidth, md: cardsPerPage === 3 ? 'calc((100% - 2rem) / 3)' : '100%' }}
                            minW={{ base: mobileCardWidth, md: cardsPerPage === 3 ? 'calc((100% - 2rem) / 3)' : '100%' }}
                            maxW={{ base: mobileCardWidth, md: 'none' }}
                        >
                            <PortfolioCard {...card} />
                        </Box>
                        ))}
                    </MotionFlex>
                </AnimatePresence>
                <IconButton 
                    onClick={() => paginate(Math.min(maxPage, page + 1))} 
                    isDisabled={page === maxPage}
                    color={page === maxPage ? 'yellow.300' : 'red.50'}
                    bgColor={page === maxPage ? 'brown.100' : 'brown.300'}
                    opacity={page === maxPage ? 0.55 : 1}
                    cursor={page === maxPage ? 'not-allowed' : 'pointer'}
                    _hover={{ bgColor: page === maxPage ? 'brown.100' : 'red.300' }}
                    _disabled={{ opacity: 0.55 }}
                    aria-label="Next projects page"
                    flexShrink={0}
                >
                    <FaAngleRight/>
                </IconButton>
            </Flex>
            <Flex justify="center" mt={{ base: 2, md: 4 }} gap={2}>
                {Array.from({ length: maxPage + 1 }).map((_, i) => (
                    <MotionBox
                        key={i}
                        w="10px"
                        h="10px"
                        borderRadius="full"
                        cursor="pointer"
                        bg={i === page ? "red.50" : "red.100"}
                        onClick={() => paginate(i)}
                        animate={{
                            scale: i === page ? 1.4 : 1,
                            opacity: i === page ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
