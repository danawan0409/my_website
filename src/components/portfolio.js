'use client'

import { useState, useMemo } from "react";
import {
  Flex,
  Box,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  Portal,
  IconButton, 
  Select, 
  createListCollection
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/components/info/projects";
import { HiSortAscending } from "react-icons/hi"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { tagTypes, tags } from "@/components/info/tagsList";
import Filter from "@/components/Filter";

const sortItems = createListCollection({
  items: [
    { label: "New to old", value: "new" },
    { label: "Old to new", value: "old" },
  ],
});

const groupByType = (tags) => {
  return tags.reduce((acc, tag) => {
    if (!acc[tag.type]) acc[tag.type] = []
    acc[tag.type].push({ ...tag, checked: false })
    return acc
  }, {})
}

export default function PortfolioPage() {
  const [sortOrder, setSortOrder] = useState("new");
  const [page, setPage] = useState(0);
  const [value, setValue] = useState("asc")
  const [tagGroups, setTagGroups] = useState(groupByType(tags))
  const selectedTags = useMemo(() => {
    return Object.values(tagGroups)
      .flat()
      .filter(tag => tag.checked)
      .map(tag => tag.id);
  }, [tagGroups]);

  // Toggle a single tag
  const toggleTag = (type, index, checked) => {
    setTagGroups((prev) => {
      const updated = { ...prev }
      updated[type] = [...updated[type]]
      updated[type][index] = { ...updated[type][index], checked }
      return updated
    })
  }

  // Toggle all tags under a type
  const toggleType = (type, checked) => {
    setTagGroups((prev) => {
      const updated = { ...prev }
      updated[type] = updated[type].map((tag) => ({
        ...tag,
        checked,
      }))
      return updated
    })
  }

  const itemsPerPage = 9;

  // Filtering + sorting
  const filteredItems = useMemo(() => {
    let items = [...projects];

    if (selectedTags.length > 0) {
      items = items.filter(item =>
        item.tags.some(tag => selectedTags.includes(tag))
      );
    }

    if (sortOrder[0] === "old") items.reverse();

    return items;
  }, [selectedTags, sortOrder]);


  const maxPage = Math.ceil(filteredItems.length / itemsPerPage);

  const pagedItems = filteredItems.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <Flex w="full" p={6} gap={4}>
      {/* Filter sidebar */}
      <Filter
          tagTypes={tagTypes}
          tagGroups={tagGroups}
          toggleTag={toggleTag}
          toggleType={toggleType}
        />


      {/* Main content */}
      <Flex direction="column" flex="1" gap={4}>
        {/* Sort menu */}
        <Select.Root
          collection={sortItems}
          width="200px"
          value={sortOrder}
          onValueChange={(e) => setSortOrder(e.value)}
        >
          <Select.HiddenSelect />
          <Select.Label>
            <Heading size='xl' color='yellow.50'>
              Sort Projects
            </Heading>
          </Select.Label>
          <Select.Control >
            <Select.Trigger borderColor='red.300'>
              <Select.ValueText placeholder="Select sort order" p={2}/>
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {sortItems.items.map((item) => (
                  <Select.Item item={item} key={item.value} px={2}>
                    {item.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>


        <Flex flexDirection='column' alignItems='center'>
          {/* Card grid */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, "3xl": 3 }} // 1 column on small, 2 on medium, 3 on xl+
            spacing={6}
          >
            {pagedItems.map((item, i) => (
              <PortfolioCard key={i} {...item} />
            ))}
          </SimpleGrid>
          
          {/* Pagination buttons */}
          <HStack p={4}>
            <IconButton 
              onClick={() => setPage((p) => Math.max(p - 1, 0))} 
              isDisabled={page === 0}
              color='red.50'
              bgColor='brown.300'
              _hover={{ bgColor: 'red.300' }}
            >
              <FaAngleLeft/>
            </IconButton>
            <Text>
              Page {page + 1} / {maxPage || 1}
            </Text>
            <IconButton
              onClick={() => setPage((p) => Math.min(p + 1, maxPage - 1))}
              isDisabled={page >= maxPage - 1}
              color='red.50'
              bgColor='brown.300'
              _hover={{ bgColor: 'red.300' }}
            >
              <FaAngleRight/>
            </IconButton>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}