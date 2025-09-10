'use client'

import { Provider } from "@/components/ui/provider"
import { IconButton, Tabs, useTabs } from "@chakra-ui/react"
import { Flex, Image, Box, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { projects } from "@/components/info/projects"
import PortfolioCard from "./PortfolioCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Tooltip } from "@/components/ui/tooltip"

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export default function RecentPortfolio() {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0); // track left/right

    const maxPage = Math.min(Math.ceil(projects.length / 3), 2) - 1;

    const visibleCards = projects.slice(page * 3, page * 3 + 3);
    const paginate = (newPage) => {
        setDirection(newPage > page ? 1 : -1);
        setPage(newPage);
    };

    return (
        <Flex flexDirection='column' align="center" gap={4} w="full" height='100vh' min-height='500px' justifyContent='center'>
            <Heading size='4xl'>Recent Projects and Contributions</Heading>
            <Flex justifyContent='center' alignItems='center'> 
                <IconButton onClick={() => paginate(Math.max(0, page - 1))} isDisabled={page === 0}>
                    <FaAngleLeft/>
                </IconButton>
                <AnimatePresence mode="wait" custom={direction}>
                    <MotionFlex
                    key={page} // re-mounts when page changes
                    gap={4}
                    initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction < 0 ? -300 : 300, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    >
                    {visibleCards.map((card, i) => (
                        <Box key={i} p={4}>
                            <PortfolioCard {...card} />
                        </Box>
                    ))}
                    </MotionFlex>
                </AnimatePresence>
                <IconButton onClick={() => paginate(Math.min(maxPage, page + 1))} isDisabled={page === maxPage}>
                    <FaAngleRight/>
                </IconButton>
            </Flex>
            <Flex justify="center" mt={4} gap={2}>
                {Array.from({ length: maxPage + 1 }).map((_, i) => (
                    <MotionBox
                        key={i}
                        w="10px"
                        h="10px"
                        borderRadius="full"
                        cursor="pointer"
                        bg={i === page ? "blue.500" : "gray.300"}
                        onClick={() => setPage(i)}
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
