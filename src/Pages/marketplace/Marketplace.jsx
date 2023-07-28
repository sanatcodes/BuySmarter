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
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import NavBar from "../../components/NavBar";
import PropertyCardComponent from "../../components/PropertyCardComponent";
import SearchBar from "../../components/SearchBar";
import PropertyDetailComponent from "./detailsPage/PropertyDetailComponent";
import GoogleMapComponent from "../../components/GoogleMapsComponent";
import { properties } from "../../data/properties"; // Replace with the path to your data generation file

export default function Marketplace() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
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
            {isLargerThan768 ? (
              <Flex>
                <Menu>
                  <MenuButton as={Button} mr={3}>
                    Price
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Low-High</MenuItem>
                    <MenuItem>High-Low</MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton as={Button} mr={3}>
                    Bed & Baths
                  </MenuButton>
                  <MenuList>
                    <MenuItem>1</MenuItem>
                    <MenuItem>3-5</MenuItem>
                    <MenuItem>5+</MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton as={Button} mr={3}>
                    Home Type
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Houses</MenuItem>
                    <MenuItem>Multi Family </MenuItem>
                    <MenuItem>Apartment</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            ) : (
              <Button onClick={onOpen}>Filters</Button>
            )}

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Filters</DrawerHeader>

                  <DrawerBody>
                    <Menu>
                      <MenuButton as={Button} w="100%" mb={3}>
                        Price
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Low-High</MenuItem>
                        <MenuItem>High-Low</MenuItem>
                      </MenuList>
                    </Menu>

                    <Menu>
                      <MenuButton as={Button} w="100%" mb={3}>
                        Bed & Baths
                      </MenuButton>
                      <MenuList>
                        <MenuItem>1</MenuItem>
                        <MenuItem>3-5</MenuItem>
                        <MenuItem>5+</MenuItem>
                      </MenuList>
                    </Menu>

                    <Menu>
                      <MenuButton as={Button} w="100%" mb={3}>
                        Home Type
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Houses</MenuItem>
                        <MenuItem>Multi Family </MenuItem>
                        <MenuItem>Apartment</MenuItem>
                      </MenuList>
                    </Menu>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Flex>
          <Flex direction={["column", "row"]} mt={10} h="80vh">
            {isLargerThan768 && (
              <Box
                flex="1"
                mr={2}
                bg="gray.200"
                sx={{ "&::-webkit-scrollbar": { display: "none" } }}
              >
                <GoogleMapComponent />
              </Box>
            )}
            <Box
              flex="1"
              ml={2}
              overflowY="auto"
              sx={{
                "&::-webkit-scrollbar": { display: "none" },
                "-ms-overflow-style": "none",
                scrollbarWidth: "none",
              }}
            >
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
