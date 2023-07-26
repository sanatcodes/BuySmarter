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
    return null; // or any other placeholder or loading state -- Perplexity
  }

  return (
    <Flex>
      {/* Left Side: Property Images */}

      <Box flex="1">
        <Heading as="h2">Property Images</Heading>

        <ImageGallery images={images} />
      </Box>

      {/* Right Side: Property Details */}
      <Flex flex="1" flexDirection="column">
        <Flex p="20px" flexDirection="row">
          {/* First row of Property Details */}
          <Box flex="1">
            <Heading as="h2">Property Details</Heading>

            <Flex alignItems="center">
              <IoMdHome size={32} />
              <Text ml="10px">{property.propertyName}</Text>
            </Flex>

            <Flex alignItems="center">
              <GoLocation size={32} />
              <Text ml="10px">
                {property.address}, {property.city}, {property.state}{" "}
                {property.zipCode}
              </Text>
            </Flex>

            <Flex alignItems="center">
              <BiBuildingHouse size={32} />
              <Text ml="10px">Property Type: {property.propertyType}</Text>
            </Flex>

            <Flex alignItems="center">
              <AiOutlineFieldNumber size={32} />
              <Text ml="10px">Year Built: {property.yearBuilt}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaRulerCombined size={32} />
              <Text ml="10px">Square Footage: {property.squareFootage}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaBed size={32} />
              <Text ml="10px">Bedrooms: {property.numBedrooms}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaBath size={32} />
              <Text ml="10px">Bathrooms: {property.numBathrooms}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaCar size={32} />
              <Text ml="10px">Parking: {property.parking}</Text>
            </Flex>
          </Box>

          {/* Second row of Property Details */}
          <Box flex="1">
            <Heading as="h2">Financial Information</Heading>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">Asking Price: {property.askingPrice}</Text>
            </Flex>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">
                Estimated Market Value: {property.estimatedMarketValue}
              </Text>
            </Flex>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">
                Estimated Repair Cost: {property.estimatedRepairCost}
              </Text>
            </Flex>

            <Flex alignItems="center">
              <FaDollarSign size={32} />
              <Text ml="10px">
                Potential Rental Income: {property.potentialRentalIncome}
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
