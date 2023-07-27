import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import {
  FaBed,
  FaBath,
  FaCar,
  FaDollarSign,
  FaRulerCombined,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { propertyPropTypes } from "../../prop-types";
import ImageGallery from "./ImageGallery";
import { images } from "../../data/properties";

const PropertyDetailComponent = ({ property }) => {
  if (!property) {
    return null;
  }

  return (
    <Flex>
      {/* Left Side: Property Images */}
      <Box flex="1">
        <Heading as="h2">Property Images</Heading>
        <ImageGallery images={property.imageUrl} />
      </Box>

      {/* Right Side: Property Details */}
      <Flex flex="1" flexDirection="column">
        <Flex p="20px" flexDirection="row">
          {/* First row of Property Details */}
          <Box flex="1">
            <Heading as="h2">Property Details</Heading>
            <Flex alignItems="center">
              <IoMdHome size={32} />
              <Text ml="10px">{property.title}</Text>
            </Flex>

            <Flex alignItems="center">
              <GoLocation size={32} />
              <Text ml="10px">{property.address}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaBed size={32} />
              <Text ml="10px">Beds: {property.beds}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaBath size={32} />
              <Text ml="10px">Baths: {property.baths}</Text>
            </Flex>
          </Box>

          {/* Second row of Property Details */}
          <Box flex="1">
            <Heading as="h2">Financial Information</Heading>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">Offer Price: {property.offerPrice}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">
                Estimated Market Value: {property.fairMarketValue}
              </Text>
            </Flex>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">
                Real Purchase Price: {property.realPurchasePrice}
              </Text>
            </Flex>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">
                Cash Required to Close: {property.cashRequiredToClose}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex p="20px" gap={10} justifyContent="center">
          <Button>Contact Now</Button>
          <Button>Get verified to buy quickly</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

PropertyDetailComponent.propTypes = propertyPropTypes;

export default PropertyDetailComponent;
