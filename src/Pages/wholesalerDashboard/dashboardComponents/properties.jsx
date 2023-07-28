import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Properties({ property, isListView }) {
  return (
    <Box
      maxW={isListView ? "full" : "sm"} // Add this
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={4}
      style={{ cursor: "pointer" }}
    >
      {isListView ? (
        <Flex align="center" justify="space-between">
          <Box w="100vh">
            {" "}
            <Heading as="h3" size="lg">
              {property.address}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              {property.zip}, {property.state}
            </Text>
          </Box>
        </Flex>
      ) : (
        <>
          <Image src={property.imgSrc} alt="Property" />
          <Box mt={2}>
            <Box display="flex" alignItems="baseline">
              <Heading as="h3" size="lg">
                {property.address}
              </Heading>
            </Box>
            <Text color="gray.500" fontSize="sm">
              {property.zip}, {property.state}
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}
