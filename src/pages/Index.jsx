import { Box, Container, Flex, Heading, Text, VStack, Link, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [posts] = useState([
    {
      title: "First Blog Post",
      excerpt: "This is the summary of the first blog post.",
      link: "#"
    },
    {
      title: "Second Blog Post",
      excerpt: "This is the summary of the second blog post.",
      link: "#"
    }
  ]);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="lg">My Blog</Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3">
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.excerpt}</Text>
                <Link color="teal.500" href={post.link} mt={2}>Read more</Link>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex="1" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="lg" mb={4}>About Me</Heading>
          <Text mb={4}>This is a brief description about the blog author.</Text>
          <Heading fontSize="lg" mb={4}>Links</Heading>
          <VStack spacing={2} align="stretch">
            <Link color="teal.500" href="#">Link 1</Link>
            <Link color="teal.500" href="#">Link 2</Link>
            <Link color="teal.500" href="#">Link 3</Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;