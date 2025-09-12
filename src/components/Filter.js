"use client";

import { Stack, Box, Text } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react"; // assuming your current checkbox code works

export default function Filter({ tagTypes, tagGroups, toggleTag, toggleType }){
  return (
    <Box w="200px" p={4} borderWidth="1px" borderRadius="lg" h="fit-content" borderColor='red.300'>
      <Text fontWeight="bold" mb={2} color='yellow.50'>
        Filter by Tags
      </Text>

      <Stack align="flex-start" spacing={6}>
        {tagTypes.map(({ type, name }) => {
          const items = tagGroups[type] || [];
          const allChecked = items.length > 0 && items.every((t) => t.checked);
          const indeterminate = items.some((t) => t.checked) && !allChecked;

          return (
            <Stack key={type} align="flex-start">
              {/* Outer checkbox = Tag Type */}
              <Checkbox.Root
                checked={indeterminate ? "indeterminate" : allChecked}
                onCheckedChange={(e) => toggleType(type, !!e.checked)}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control _checked={{ bg: "red.200", borderColor: "red.100" }}>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Label color='red.50'>{name}</Checkbox.Label>
              </Checkbox.Root>

              {/* Inner checkboxes = Tags */}
              <Stack ps={6}>
                {items.map((tag, index) => (
                  <Checkbox.Root
                    key={tag.id}
                    checked={tag.checked}
                    onCheckedChange={(e) => toggleTag(type, index, !!e.checked)}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control _checked={{ bg: "brown.100", borderColor: "brown.50" }} />
                    <Checkbox.Label>{tag.name}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
