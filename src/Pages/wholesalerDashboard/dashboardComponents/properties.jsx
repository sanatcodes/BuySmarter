import PropTypes from "prop-types";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function Properties({ imgSrc, address, zip, state }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      my={10}
      mx={10}
      position="relative"
      style={{ cursor: "pointer" }}
    >
      <Image src={imgSrc} alt={address} />

      <Box
        position="absolute"
        bottom="0"
        left={0}
        right={0}
        p="5"
        bgColor="rgba(0, 0, 0, 0.8)"
      >
        <VStack alignItems="start" spacing="1">
          <Text fontSize="2xl" color="white" fontWeight="bold">
            {address}
          </Text>
          <Text fontSize="md" color="white">
            {zip}, {state}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

Properties.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};
