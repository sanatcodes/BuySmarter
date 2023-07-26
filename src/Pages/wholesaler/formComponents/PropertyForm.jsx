import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Heading,
} from "@chakra-ui/react";

export const PropertyForm = () => {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize={"2xl"}
        size="lg"
        color={"white.700"}
        textAlign="center"
      >
        Property Information
      </Heading>

      <Box
        my="10"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <FormControl id="fairMarketValue">
            <FormLabel>Fair Market Value</FormLabel>
            <NumberInput defaultValue={370000} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="managementRate">
            <FormLabel>Management Rate</FormLabel>
            <NumberInput defaultValue={5} min={0} max={100} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="numberOfUnits">
            <FormLabel>Number of Units</FormLabel>
            <NumberInput defaultValue={1} min={0} precision={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="annualAppreciation">
            <FormLabel>Annual Appreciation (10y average)</FormLabel>
            <NumberInput defaultValue={2} min={0} max={100} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};
