import { Flex, Link, Icon, } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { getAssetPath } from "@/lib/getAssetPath";

export default function Contact() {
  return (
    <Flex
      direction={{ base: "row", lg: "column" }}
      gap={{ base: 3, md: 4 }}
      justify="center"
      align="center"
      py={{ base: 2, md: 3 }}
      ml={{ base: 0, lg: 0 }}
      wrap={{ base: "wrap", lg: "nowrap" }}
    >
      <Tooltip content="LinkedIn" showArrow interactive>
        <Link
          href="https://www.linkedin.com/in/dana-wan/"
          isExternal
          _hover={{ color: "blue.500" }}
        >
          <Icon as={FaLinkedin} boxSize={8} />
        </Link>
      </Tooltip>

      <Tooltip content="GitHub" showArrow interactive>
        <Link
          href="https://github.com/danawan0409"
          isExternal
          _hover={{ color: "gray.600" }}
        >
          <Icon as={FaGithub} boxSize={8} />
        </Link>
      </Tooltip>

      <Tooltip content="dana.wan0409@gmail.com" showArrow interactive>
        <Link
          href="mailto:dana.wan0409@gmail.com"
          _hover={{ color: "red.100" }}
        >
          <Icon as={IoIosMail} boxSize={8} />
        </Link>
      </Tooltip>

      <Tooltip content="Open Resume" showArrow interactive>
        <Link
          href={getAssetPath('/resume.pdf')}
          isExternal
          _hover={{ color: "green.500" }}
        >
          <Icon as={FaFileAlt} boxSize={8} />
        </Link>
      </Tooltip>
    </Flex>
  );
}
