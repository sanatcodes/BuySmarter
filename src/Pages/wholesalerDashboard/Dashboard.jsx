import {
  Box,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Button,
  Input,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import Properties from "./dashboardComponents/properties";

export default function Dashboard() {
  const [isListView, setIsListView] = useState(false);
  const properties = [
    {
      imgSrc:
        "https://img.freepik.com/premium-photo/luxury-penthouse-with-stunning-view-city-skyline-river_124507-105621.jpg",
      address: "Rue de France",
      zip: "AA123Z",
      state: "FR",
    },
    {
      imgSrc:
        "https://a0.muscache.com/im/pictures/miso/Hosting-617949006716370711/original/d46f948e-68df-4ece-bee9-763b36978e24.jpeg?im_w=1200",
      address: "Rue de Canada",
      zip: "CA123Z",
      state: "CA",
    },
    {
      imgSrc:
        "https://images.trvl-media.com/lodging/35000000/34020000/34012800/34012781/cb29bea0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      address: "Rue de Italy",
      zip: "IT123Z",
      state: "IT",
    },
  ];

  const toggleView = () => {
    setIsListView(!isListView);
  };

  const renderProperties = () => {
    if (isListView) {
      return (
        <VStack spacing={5}>
          {properties.map((property, index) => (
            <Properties
              key={index}
              property={property}
              isListView={isListView}
            />
          ))}
        </VStack>
      );
    } else {
      return (
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {properties.map((property, index) => (
            <Properties
              key={index}
              property={property}
              isListView={isListView}
            />
          ))}
        </Grid>
      );
    }
  };

  return (
    <>
      <NavBar />
      <Heading my="5" mx="5">
        Selling Dashboard
      </Heading>
      <HStack spacing={5} mx={5} mb={5}>
        <Input placeholder="Search..." />
        <Button colorScheme="teal" size="md">
          Active
        </Button>
        <Button colorScheme="blue" size="md">
          Inactive
        </Button>
        <Button onClick={toggleView} size="md">
          {isListView ? "Card View" : "List View"}
        </Button>
      </HStack>
      <Tabs variant="enclosed" isLazy>
        <TabList mx="5">
          <Tab>Properties</Tab>
          <Tab>Messages</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box mx="10" my="10">
              {renderProperties()}
            </Box>
          </TabPanel>

          <TabPanel>
            <Box p={4}>
              {/* Replace this with your Messages component */}
              <p>Messages will go here</p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
