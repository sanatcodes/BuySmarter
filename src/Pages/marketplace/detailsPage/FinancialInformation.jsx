import { Flex, Stack, Text } from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";

export const FinancialInformation = ({ property }) => (
  <Stack spacing={3}>
    <Flex alignItems="center">
      <FaDollarSign size={24} />
      <Text ml={2}>Offer Price: {property.offerPrice}</Text>
    </Flex>

    <Flex alignItems="center">
      <FaDollarSign size={24} />
      <Text ml={2}>Estimated Market Value: {property.fairMarketValue}</Text>
    </Flex>

    <Flex alignItems="center">
      <FaDollarSign size={24} />
      <Text ml={2}>Real Purchase Price: {property.realPurchasePrice}</Text>
    </Flex>

    <Flex alignItems="center">
      <FaDollarSign size={24} />
      <Text ml={2}>Cash Required to Close: {property.cashRequiredToClose}</Text>
    </Flex>
  </Stack>
);
