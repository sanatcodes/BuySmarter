import { SimpleGrid, Box, Center, Flex } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import PropertyCardComponent from "../../components/PropertyCardComponent";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";
import { properties } from "../../data/properties";
import PropertyDetailComponent from "./PropertyDetailComponent";

export default function Marketplace() {
  return (
    <>
      <NavBar />
      <Box p={4}>
        <Flex>
          <Box flex={1}>
            <SearchBar />
          </Box>
          <Box>
            <Filter />
          </Box>
        </Flex>
        <Center>
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
        </Center>
      </Box>
    </>
  );
}
