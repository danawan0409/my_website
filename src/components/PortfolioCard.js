
import { Flex, Image, Box, Heading, Text, Highlight, Center, Button, Card, Link } from "@chakra-ui/react";
import { useState } from "react";
import TagCardDisplay from "./TagCardDisplay";

export default function PortfolioCard({title, description, link, deploy, tags}) {

  return (
    <Card.Root width="320px" height='320px' m={4} p={6}>
      <Card.Body gap="2">
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
        <TagCardDisplay tags={tags}/>
      </Card.Body>
      <Card.Footer justifyContent="flex-end" gap={4}>
        <Link 
          variant="outline" 
          href={link}
          isExternal
          >
            Source
        </Link>
        {deploy ? 
          <Link 
            variant="outline" 
            href={deploy}
            isExternal
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
