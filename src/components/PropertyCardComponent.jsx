import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Image,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { PropertyCardPropTypes } from "../prop-types";

export default function PropertyCardComponent({ property, onClick }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={4}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Image src={property.imageUrl[0]} alt={property.imageAlt} />

      <Box mt={2}>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={2}
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt={1}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          <Stat>
            <StatNumber>{property.formattedPrice}</StatNumber>
          </Stat>
        </Box>
      </Box>
    </Box>
  );
}

PropertyCardComponent.propTypes = PropertyCardPropTypes;
