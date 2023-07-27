import { SimpleGrid, Box, Center, Flex, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import PropertyCardComponent from "../../components/PropertyCardComponent";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/FilterPrimary";
import PropertyDetailComponent from "./PropertyDetailComponent";
import GoogleMapComponent from "../../components/GoogleMapsComponent";
import { properties } from "../../data/properties"; // Replace with the path to your data generation file

export default function Marketplace() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  if (selectedProperty) {
    return (
      <>
        <NavBar />
        <Center>
          <Box p={4} bg="red.300">
            <Text>{selectedProperty.title}</Text>
            <PropertyDetailComponent property={selectedProperty} />
            <Button onClick={() => setSelectedProperty(null)}>Go Back</Button>
          </Box>
        </Center>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Center>
        <Box p={4}>
          <Flex alignItems="center" justifyContent="space-between" mb={4}>
            <Box flex={1} mr={4}>
              <SearchBar />
            </Box>
            <Flex gap={3}>
              <Button>Price</Button>
              <Button>Bed & Baths</Button>
              <Button>Home Type</Button>
              <Filter />
            </Flex>
          </Flex>
          <Flex direction={["column", "row"]} mt={10} h="80vh">
            <Box
              flex="1"
              mr={2}
              bg="gray.200"
              sx={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
              <GoogleMapComponent />
            </Box>
            <Box flex="1" ml={2} overflowY="auto">
              <SimpleGrid columns={[1, 1, 2]} spacing={20}>
                {properties.map((p) => (
                  <PropertyCardComponent
                    key={p.title}
                    property={p}
                    onClick={() => setSelectedProperty(p)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
