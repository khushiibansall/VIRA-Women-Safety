import { Box, Heading, Container, Text, Button, Stack, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box bg="#FFFDD0" h="100vh">
      <Container maxW={"6xl"} h="100%">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          h="100%"
          py={{ base: 10, md: 20 }}
          flexDirection={{ base: "column", md: "row" }} // Stack in column on small screens
        >
          {/* Left Side - First Image */}
          <Box flex="1" textAlign="center" mt={{ base: 10, md: 0 }}>
            <Image
              src={require('../assets/images/leftWoman.jpg')} // Replace with your left image path
              alt="Left Image"
              maxH={"400px"}
              objectFit="cover"
              borderRadius="md"
            />
          </Box>

          {/* Center - VIRA Text Content */}
          <Stack
            textAlign={{ base: "center", md: "center" }}
            spacing={{ base: 8, md: 10 }}
            flex="1"
            mx={5}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              <Text color={"pink.500"}>VIRA</Text>
            </Heading>
            <Text fontFamily={"Inter"} fontSize={"larger"} color={"gray.600"}>
              Your Safety, Our Mission.
            </Text>
            <Stack direction={"column"} spacing={5} align={"center"}>
              <Link to="/login">
                <Button
                  colorScheme={"pink"}
                  bg={"pink.600"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "pink.400",
                  }}
                >
                  Register Now
                </Button>
              </Link>
            </Stack>
          </Stack>

          {/* Right Side - Second Image */}
          <Box flex="1" textAlign="center" mt={{ base: 10, md: 0 }}>
            <Image
              src={require('../assets/images/womenCrowd.jpg')} // Replace with your right image path
              alt="Right Image"
              maxH={"400px"}
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Home;
