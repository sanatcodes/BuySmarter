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
import { setWholesalerStep } from "../../../features/wholesaler/wholesaleSlice";
import { useDispatch } from "react-redux";

const ExpensesForm = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Heading
        as="h1"
        fontSize={"2xl"}
        size="lg"
        color={"white.700"}
        textAlign="center"
      >
        Operational Expenses
      </Heading>
      <Box
        my="10"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <FormControl id="propertyTax">
            <FormLabel>Property Tax / School Tax (1y)</FormLabel>
            <NumberInput defaultValue={2472} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="insurance">
            <FormLabel>Insurance (1y)</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          {/* Add all the other FormControls in a similar manner */}

          <FormControl id="accounting">
            <FormLabel>Accounting (1y)</FormLabel>
            <NumberInput defaultValue={500} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="evictionCosts">
            <FormLabel>Eviction Costs (2y)</FormLabel>
            <NumberInput defaultValue={18} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Button
            type="submit"
            mt="4"
            colorScheme="purple"
            // lead to upload pictures page
            onClick={() => dispatch(setWholesalerStep(7))}
          >
            Next Step
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ExpensesForm;
