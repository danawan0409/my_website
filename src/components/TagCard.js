
import { Tag } from "@chakra-ui/react"

export default function TagCard({label}) {

  return (
    <Tag.Root size="lg" maxW={'200px'} p={2} color='red.50' bgColor='red.200'>
        <Tag.Label>{label}</Tag.Label>
    </Tag.Root>
  );
}
