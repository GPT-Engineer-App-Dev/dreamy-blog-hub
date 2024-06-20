import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
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
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Understanding React Hooks
              </Heading>
              <Text fontSize="sm" color="gray.600">
                March 10, 2023
              </Text>
              <Text mt={2}>
                React Hooks have revolutionized the way we write functional components. In this post, we'll dive deep into the basics of Hooks and how to use them effectively.
              </Text>
              <Link color="teal.500" href="#" mt={2} display="block">
                Read more
              </Link>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                A Guide to Node.js Performance Optimization
              </Heading>
              <Text fontSize="sm" color="gray.600">
                February 25, 2023
              </Text>
              <Text mt={2}>
                Node.js is powerful, but optimizing its performance can be tricky. This guide covers essential tips and techniques to make your Node.js applications run faster and more efficiently.
              </Text>
              <Link color="teal.500" href="#" mt={2} display="block">
                Read more
              </Link>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
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