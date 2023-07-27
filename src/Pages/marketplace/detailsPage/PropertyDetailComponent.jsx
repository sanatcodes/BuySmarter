import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { propertyPropTypes } from "../../../prop-types";
import { FinancialInformation } from "./FinancialInformation";
import ImageGallery from "./ImageGallery";
import { PropertyDetails } from "./PropertyDetails";

const PropertyDetailComponent = ({ property }) => {
  if (!property) {
    return null;
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Flex direction={["column", "row"]}>
        {/* Left Side: Property Images */}
        <Box flex="1" p={5}>
          <ImageGallery images={property.imageUrl} />
        </Box>

        {/* Right Side: Property Details */}
        <Box flex="1" p={5}>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>
                <IoMdHome size={22} style={{ marginRight: "8px" }} />
                Property Details
              </Tab>
              <Tab>
                <FaLock size={18} style={{ marginRight: "8px" }} />
                Financial Information
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <PropertyDetails property={property} />
              </TabPanel>
              <TabPanel>
                <FinancialInformation property={property} />
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Flex mt={6} justifyContent="center">
            <Button colorScheme="blue" mr={3}>
              Contact Now
            </Button>
            <Button colorScheme="teal">Get verified to buy quickly</Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

PropertyDetailComponent.propTypes = propertyPropTypes;

export default PropertyDetailComponent;
