import { SimpleGrid, Box, Center, Flex, Button } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import PropertyCardComponent from "../../components/PropertyCardComponent";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/FilterPrimary";
import { properties } from "../../data/properties";
import PropertyDetailComponent from "./PropertyDetailComponent";

export default function Marketplace() {
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
          <SimpleGrid columns={[2, null, 3]} spacing={20} mt={10}>
            {properties.map((p) => (
              <PropertyCardComponent
                key={p.title}
                property={p}
                onClick={() => {
                  <PropertyDetailComponent />;
                }}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
}
