import { Flex, IconButton, HStack } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";
import TagCard from "./TagCard";

export default function TagCardDisplay({ tags }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 120; // adjust as needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex align="center" gap={2}>
      {/* Left button */}
      <IconButton
        size="xs"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        variant='ghost'
        color='yellow.50'
      >
        <FaAngleLeft/>
      </IconButton>

      {/* Tag container */}
      <HStack
        ref={scrollRef}
        spacing={3}
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {tags.map((tag, i) => (
          <TagCard key={i} label={tag}/>
        ))}
      </HStack>

      {/* Right button */}
      <IconButton
        size="xs"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        variant='ghost'
        color='yellow.50'
      >
        <FaAngleRight/>
      </IconButton>
    </Flex>
  );
}