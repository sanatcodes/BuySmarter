import {
  SimpleGrid,
  Box,
  Center,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import NavBar from "../../components/NavBar";
import PropertyCardComponent from "../../components/PropertyCardComponent";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/FilterPrimary";
import PropertyDetailComponent from "./detailsPage/PropertyDetailComponent";
import GoogleMapComponent from "../../components/GoogleMapsComponent";
import { properties } from "../../data/properties"; // Replace with the path to your data generation file

export default function Marketplace() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [search, setSearch] = useState("");

  // This will recalculate the filtered properties only when the search query or properties array changes
  const filteredProperties = useMemo(() => {
    if (search === "") {
      return properties;
    } else {
      return properties.filter((property) =>
        property.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }, [search, properties]);

  if (selectedProperty) {
    return (
      <>
        <NavBar />
        <Center>
          <Box p={4}>
            <Button onClick={() => setSelectedProperty(null)}>Go Back</Button>
            <PropertyDetailComponent property={selectedProperty} />
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
              <SearchBar onChange={(e) => setSearch(e.target.value)} />
            </Box>
            <Flex gap={3}>
              <Menu>
                <MenuButton as={Button}>Price</MenuButton>
                <MenuList>
                  <MenuItem>Low-High</MenuItem>
                  <MenuItem>High-Low</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton as={Button}>Bed & Baths</MenuButton>
                <MenuList>
                  <MenuItem>1</MenuItem>
                  <MenuItem>3-5</MenuItem>
                  <MenuItem>5+</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton as={Button}>Home Type</MenuButton>
                <MenuList>
                  <MenuItem>Houses</MenuItem>
                  <MenuItem>Multi Family </MenuItem>
                  <MenuItem>Apartment</MenuItem>
                </MenuList>
              </Menu>

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
                {filteredProperties.map((p) => (
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
