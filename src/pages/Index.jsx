import { Container, VStack, Heading, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/images/profile.jpg"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer & Tech Enthusiast
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Welcome to my personal blog! I'm John, a passionate developer who loves to explore new technologies and share knowledge with the community. Here, you'll find articles on web development, programming tips, and my personal experiences in the tech world.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md" mb={2}>
                  {post.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {post.date}
                </Text>
                <Text mt={2}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box textAlign="center">
          <Button as={RouterLink} to="/add-post" colorScheme="teal" size="md" mb={4}>
            Add New Post
          </Button>
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <VStack spacing={4} direction="row" justify="center">
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="30px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="30px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="30px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;