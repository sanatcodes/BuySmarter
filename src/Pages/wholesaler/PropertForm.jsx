import {
  FormControl,
  FormLabel,
  Input,
  Select,
  CheckboxGroup,
  HStack,
  Checkbox,
  Textarea,
  NumberInput,
  NumberInputField,
  Box,
  Heading,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWholesalerStep } from "../../features/wholesaler/wholesaleSlice";

export default function PropertyForm() {
  const color = useColorModeValue("gray.700", "gray.200");
  const dispatch = useDispatch();
  return (
    <Box>
      <Heading
        as="h1"
        fontSize={"2xl"}
        size="lg"
        color={color}
        textAlign="center"
      >
        House information
      </Heading>
      <Box
        my="10"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <FormControl id="propertyName" isRequired>
            <FormLabel>Property Name</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="propertyType" isRequired>
            <FormLabel>Property Type</FormLabel>
            <Select placeholder="Select property type">
              <option value="singleFamily">Single Family</option>
              <option value="multiFamily">Multi-Family</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="commercial">Commercial</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>

          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="city" isRequired>
            <FormLabel>City</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="state" isRequired>
            <FormLabel>State</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="zipCode" isRequired>
            <FormLabel>Zip Code</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="yearBuilt" isRequired>
            <FormLabel>Year Built</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl id="squareFootage" isRequired>
            <FormLabel>Square Footage</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="numBedrooms" isRequired>
            <FormLabel>Number of Bedrooms</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="numBathrooms" isRequired>
            <FormLabel>Number of Bathrooms</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="parking">
            <FormLabel>Parking</FormLabel>
            <CheckboxGroup>
              <HStack spacing="24px">
                <Checkbox value="garage">Garage</Checkbox>
                <Checkbox value="streetParking">Street Parking</Checkbox>
                <Checkbox value="noParking">No Parking</Checkbox>
              </HStack>
            </CheckboxGroup>
          </FormControl>

          <FormControl id="uniqueFeatures">
            <FormLabel>Unique Features</FormLabel>
            <Textarea />
          </FormControl>

          <FormControl id="askingPrice" isRequired>
            <FormLabel>Asking Price</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="estimatedMarketValue" isRequired>
            <FormLabel>Estimated Market Value</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="estimatedRepairCost" isRequired>
            <FormLabel>Estimated Repair Cost</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="potentialRentalIncome" isRequired>
            <FormLabel>Potential Rental Income</FormLabel>
            <NumberInput>
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </form>
        <Button
          type="submit"
          mt="4"
          colorScheme="purple"
          // lead to upload pictures page
          onClick={() => dispatch(setWholesalerStep(3))}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
}
