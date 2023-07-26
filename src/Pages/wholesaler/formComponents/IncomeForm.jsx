import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Heading,
} from "@chakra-ui/react";

const IncomeForm = () => {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize={"2xl"}
        size="lg"
        color={"white.700"}
        textAlign="center"
      >
        Income information
      </Heading>
      <Box
        my="10"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <FormControl id="grossRents">
            <FormLabel>Gross Rents</FormLabel>
            <NumberInput defaultValue={28800} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="parking">
            <FormLabel>Parking</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="storage">
            <FormLabel>Storage</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="laundryVending">
            <FormLabel>Laundry / Vending</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="other">
            <FormLabel>Other</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
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

export default IncomeForm;
