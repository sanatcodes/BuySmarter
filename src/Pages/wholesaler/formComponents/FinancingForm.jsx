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
import { setWholesalerStep } from "../../../features/wholesaler/wholesaleSlice";
import { useDispatch } from "react-redux";

const FinancingForm = () => {
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
        Financing Information
      </Heading>

      <Box
        my="10"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <FormControl id="firstMortgagePrinciple">
            <FormLabel>1st Mtg Principle Amount</FormLabel>
            <NumberInput defaultValue={280000} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="firstMortgageRate">
            <FormLabel>1st Mtg Interest Rate</FormLabel>
            <NumberInput defaultValue={5.7} min={0} max={100} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="firstMortgagePeriod">
            <FormLabel>1st Mtg Amortization Period</FormLabel>
            <NumberInput defaultValue={25} min={0} precision={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="secondMortgagePrinciple">
            <FormLabel>2nd Mtg Principle Amount</FormLabel>
            <NumberInput defaultValue={0} min={0} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="secondMortgageRate">
            <FormLabel>2nd Mtg Interest Rate</FormLabel>
            <NumberInput defaultValue={2.5} min={0} max={100} precision={2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="secondMortgagePeriod">
            <FormLabel>2nd Mtg Amortization Period</FormLabel>
            <NumberInput defaultValue={25} min={0} precision={0}>
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
            onClick={() => dispatch(setWholesalerStep(5))}
          >
            Next Step
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default FinancingForm;
