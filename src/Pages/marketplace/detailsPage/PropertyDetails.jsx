import {
  Flex,
  Stack,
  Text,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { FaBath, FaBed } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoMdHome } from "react-icons/io";

export const PropertyDetails = ({ property }) => (
  <Stack spacing={3}>
    <Stat>
      <StatNumber>{property.formattedPrice}</StatNumber>
    </Stat>
    <Flex alignItems="center">
      <IoMdHome size={24} />
      <Text ml={2}>{property.title}</Text>
    </Flex>

    <Flex alignItems="center">
      <GoLocation size={24} />
      <Text ml={2}>{property.address}</Text>
    </Flex>

    <Flex alignItems="center">
      <FaBed size={24} />
      <Text ml={2}>Beds: {property.beds}</Text>
    </Flex>

    <Flex alignItems="center">
      <FaBath size={24} />
      <Text ml={2}>Baths: {property.baths}</Text>
    </Flex>
  </Stack>
);
