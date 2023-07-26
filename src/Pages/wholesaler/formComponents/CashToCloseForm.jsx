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

const CashToCloseForm = () => {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize={"2xl"}
        size="lg"
        color={"white.700"}
        textAlign="center"
      >
        Cash To Close
      </Heading>
      <Box
        my="10"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <FormControl id="depositMade">
            <FormLabel>Deposit(s) made with Offer</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="lessProRation">
            <FormLabel>Less Pro-Ration of Rents</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="cashToClose">
            <FormLabel>Cash Required to Close</FormLabel>
            <NumberInput defaultValue={73070} min={0} precision={2}>
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

export default CashToCloseForm;
