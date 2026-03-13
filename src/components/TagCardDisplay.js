import { Flex, IconButton, HStack } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";
import TagCard from "./TagCard";
import { tags as allTags } from "./info/tagsList";

const tagNameMap = Object.fromEntries(allTags.map((tag) => [tag.id, tag.name]));

export default function TagCardDisplay({ tags, onRemove, size = "lg" }) {
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
        flex="1"
        minW={0}
        whiteSpace="nowrap"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {tags.map((tag, i) => (
          <TagCard
            key={`${tag}-${i}`}
            label={tagNameMap[tag] || tag}
            size={size}
            onRemove={onRemove ? () => onRemove(tag) : undefined}
          />
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