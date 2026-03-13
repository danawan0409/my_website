
import { Card, Link } from "@chakra-ui/react";
import TagCardDisplay from "./TagCardDisplay";

export default function PortfolioCard({title, description, link, deploy, tags}) {

  return (
    <Card.Root
      w='full'
      minW={0}
      h='340px'
      m={0}
      p={{ base: 4, md: 6 }}
      borderColor='red.200'
      bgColor='brown.300'
      display='flex'
      flexDirection='column'
      overflow='hidden'
    >
      <Card.Body gap="2" flex='1' overflow='hidden'>
        <Card.Title mt="1">
          {title}
        </Card.Title>
        <Card.Description
          py={1}
          color='yellow.200'
          flex='1'
          overflowY='auto'
          pr={2}
          css={{
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(240, 104, 98, 0.55)",
              borderRadius: "999px",
            },
          }}
        >
          {description || ""}
        </Card.Description>
        <TagCardDisplay tags={tags}/>
      </Card.Body>
      <Card.Footer justifyContent="flex-end" gap={4} mt='auto' pt={3}>
        <Link 
          variant="outline" 
          href={link}
          isExternal
          target="_blank"
          rel="noopener noreferrer"
          bgColor='red.300'
          color='red.50'
          p={2}
          borderRadius='md'
          _hover={{ bg: "red.200" }}
        >
            Source
        </Link>
        {deploy ? 
          <Link 
            variant="outline" 
            href={deploy}
            isExternal
            target="_blank"
            rel="noopener noreferrer"
            bgColor='red.300'
            color='red.50'
            p={2}
            borderRadius='md'
            _hover={{ bg: "red.200" }}
            >
              Link
          </Link> 
          : 
          <></>
        }
      </Card.Footer>
    </Card.Root>
  );
}
