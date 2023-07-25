import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWholesalerStep } from "../../features/wholesaler/wholesaleSlice";

export default function WholesalerIntroComponent() {
  const dispatch = useDispatch();
  const color = useColorModeValue("gray.700", "gray.200");
  return (
    <Container maxW="container.md">
      <Flex>
        {/* Left Side */}
        <Box
          flex="1"
          p={4}
          color="white"
          h="80vh"
          display="flex"
          alignItems="center"
        >
          <Heading as="h1" fontSize={"4xl"} size="lg" color={color}>
            It's easy to list on BuySmarter
          </Heading>
        </Box>
        {/* Right Side */}
        <Flex
          flex="1"
          p={4}
          direction="column"
          justifyContent="center"
          minH="80vh"
        >
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    1. Tell us about the property
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    2. Add some pictures
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    3. Show us the doucments
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
      <Box display={"flex"} justifyContent="flex-end">
        <Button onClick={() => dispatch(setWholesalerStep(2))}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
