'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  HStack,
  Portal,
  IconButton, 
  Button,
  Select, 
  createListCollection,
  useBreakpointValue
} from "@chakra-ui/react";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/components/info/projects";
import { HiSortAscending } from "react-icons/hi"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { tagTypes, tags } from "@/components/info/tagsList";
import Filter from "@/components/Filter";
import { RiCloseLine, RiFilter3Line } from "react-icons/ri";
import TagCardDisplay from "@/components/TagCardDisplay";

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
  const isMobile = useBreakpointValue({ base: true, lg: false }) ?? false;
  const [sortOrder, setSortOrder] = useState(["new"]);
  const [page, setPage] = useState(0);
  const [tagGroups, setTagGroups] = useState(groupByType(tags))
  const [mobileTagGroups, setMobileTagGroups] = useState(groupByType(tags));
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const topRef = useRef(null);
  const tagNameMap = useMemo(
    () => Object.fromEntries(tags.map((tag) => [tag.id, tag.name])),
    []
  );

  const selectedTags = useMemo(() => {
    return Object.values(tagGroups)
      .flat()
      .filter(tag => tag.checked)
      .map(tag => tag.id);
  }, [tagGroups]);

  useEffect(() => {
    if (!isMobile) {
      setMobileTagGroups(tagGroups);
    }
  }, [isMobile, tagGroups]);

  useEffect(() => {
    setPage(0);
  }, [selectedTags, sortOrder]);

  // Toggle a single tag
  const toggleTag = (type, index, checked, setter = setTagGroups) => {
    setter((prev) => {
      const updated = { ...prev }
      updated[type] = [...updated[type]]
      updated[type][index] = { ...updated[type][index], checked }
      return updated
    })
  }

  // Toggle all tags under a type
  const toggleType = (type, checked, setter = setTagGroups) => {
    setter((prev) => {
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

    if (sortOrder.includes("old")) items.reverse();

    return items;
  }, [selectedTags, sortOrder]);


  const maxPage = Math.ceil(filteredItems.length / itemsPerPage);

  const pagedItems = filteredItems.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const goToPage = (nextPage) => {
    const clamped = Math.max(0, Math.min(nextPage, Math.max(0, maxPage - 1)));
    setPage(clamped);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openMobileFilters = () => {
    setMobileTagGroups(tagGroups);
    setIsFilterOpen(true);
  };

  const applyMobileFilters = () => {
    setTagGroups(mobileTagGroups);
    setIsFilterOpen(false);
  };

  const removeSelectedTag = (tagId) => {
    setTagGroups((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((type) => {
        updated[type] = updated[type].map((tag) =>
          tag.id === tagId ? { ...tag, checked: false } : tag
        );
      });
      return updated;
    });
  };

  return (
    <Flex w="full" px={{ base: 3, md: 6 }} pt={0} pb={{ base: 3, md: 6 }} gap={{ base: 4, lg: 6 }} direction={{ base: 'column', lg: 'row' }}>
      {/* Desktop filter sidebar */}
      <Box display={{ base: "none", lg: "block" }}>
        <Filter
          tagTypes={tagTypes}
          tagGroups={tagGroups}
          toggleTag={(type, index, checked) => toggleTag(type, index, checked, setTagGroups)}
          toggleType={(type, checked) => toggleType(type, checked, setTagGroups)}
        />
      </Box>

      {/* Mobile fullscreen filters */}
      {isFilterOpen ? (
        <Box
          position="fixed"
          inset={0}
          zIndex={40}
          bg="rgba(10, 10, 10, 0.82)"
          backdropFilter="blur(6px)"
          display={{ base: "flex", lg: "none" }}
          flexDirection="column"
          p={4}
        >
          <Flex justify="space-between" align="center" mb={3}>
            <Text fontWeight="bold" fontSize="lg" color="yellow.50">
              Filters
            </Text>
            <IconButton
              aria-label="Close filters"
              onClick={() => setIsFilterOpen(false)}
              borderRadius="full"
              bgColor="brown.200"
              color="yellow.50"
            >
              <RiCloseLine />
            </IconButton>
          </Flex>

          <Box flex="1" overflowY="auto" pr={1}>
            <Filter
              tagTypes={tagTypes}
              tagGroups={mobileTagGroups}
              toggleTag={(type, index, checked) => toggleTag(type, index, checked, setMobileTagGroups)}
              toggleType={(type, checked) => toggleType(type, checked, setMobileTagGroups)}
              showTitle={false}
            />
          </Box>

          <Button
            mt={4}
            size="lg"
            bgColor="red.200"
            color="yellow.50"
            _hover={{ bgColor: "red.100" }}
            onClick={applyMobileFilters}
          >
            Apply Filters
          </Button>
        </Box>
      ) : null}


      {/* Main content */}
      <Flex ref={topRef} direction="column" flex="1" gap={{ base: 3, md: 4 }} minW={0}>
        <Flex justify="space-between" align="center" gap={3}>
          <HStack display={{ base: "flex", lg: "none" }}>
            <Text color="yellow.50" fontWeight="semibold">Filters</Text>
            <IconButton
              aria-label="Open filters"
              onClick={openMobileFilters}
              borderRadius="full"
              bgColor="brown.200"
              color="yellow.50"
              _hover={{ bgColor: "brown.100" }}
            >
              <RiFilter3Line />
            </IconButton>
          </HStack>

          <Select.Root
            collection={sortItems}
            width={{ base: "fit-content", sm: "fit-content" }}
            value={sortOrder}
            onValueChange={(e) => setSortOrder(e.value)}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger borderColor='red.300' px={2} pe={10} minH="36px" gap={2}>
                <HiSortAscending />
                <Select.ValueText placeholder="Sort" />
              </Select.Trigger>
              <Select.IndicatorGroup pe={2}>
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
        </Flex>

        {selectedTags.length > 0 ? (
          <TagCardDisplay
            tags={selectedTags}
            onRemove={removeSelectedTag}
            size="sm"
          />
        ) : null}


        <Flex flexDirection='column' alignItems='center' w='full'>
          {/* Card grid */}
          <SimpleGrid 
            w='full'
            columns={{ base: 1, md: 2, xl: 3 }} // 1 column on small, 2 on medium, 3 on xl+
            gap={{ base: 4, md: 5 }}
            rowGap={{ base: 4, md: 5 }}
            columnGap={{ base: 4, md: 5 }}
          >
            {pagedItems.map((item, i) => (
              <PortfolioCard key={i} {...item} />
            ))}
          </SimpleGrid>
          
          {/* Pagination buttons */}
          <HStack p={{ base: 3, md: 4 }}>
            <IconButton 
              onClick={() => goToPage(page - 1)} 
              isDisabled={page === 0}
              color={page === 0 ? 'yellow.300' : 'red.50'}
              bgColor={page === 0 ? 'brown.100' : 'brown.300'}
              opacity={page === 0 ? 0.55 : 1}
              cursor={page === 0 ? 'not-allowed' : 'pointer'}
              _hover={{ bgColor: page === 0 ? 'brown.100' : 'red.300' }}
              _disabled={{ opacity: 0.55 }}
            >
              <FaAngleLeft/>
            </IconButton>
            <Text>
              Page {page + 1} / {maxPage || 1}
            </Text>
            <IconButton
              onClick={() => goToPage(page + 1)}
              isDisabled={page >= maxPage - 1}
              color={page >= maxPage - 1 ? 'yellow.300' : 'red.50'}
              bgColor={page >= maxPage - 1 ? 'brown.100' : 'brown.300'}
              opacity={page >= maxPage - 1 ? 0.55 : 1}
              cursor={page >= maxPage - 1 ? 'not-allowed' : 'pointer'}
              _hover={{ bgColor: page >= maxPage - 1 ? 'brown.100' : 'red.300' }}
              _disabled={{ opacity: 0.55 }}
            >
              <FaAngleRight/>
            </IconButton>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}