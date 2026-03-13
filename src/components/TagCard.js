
import { CloseButton, Tag } from "@chakra-ui/react"

export default function TagCard({ label, onRemove, size = "lg", maxW = "200px" }) {
  const isRemovable = typeof onRemove === "function";

  return (
    <Tag.Root size={size} maxW={maxW} p={2} color='red.50' bgColor='red.200' borderRadius='full' display='inline-flex' alignItems='center'>
        <Tag.Label>{label}</Tag.Label>
        {isRemovable ? (
          <CloseButton
            size="2xs"
            aria-label={`Remove ${label}`}
            onClick={onRemove}
            color='red.50'
            _hover={{ bg: "rgba(255,255,255,0.18)" }}
          />
        ) : null}
    </Tag.Root>
  );
}
