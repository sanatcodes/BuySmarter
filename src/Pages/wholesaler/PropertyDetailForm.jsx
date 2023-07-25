import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const PropertyDetailsForm = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Property Name</FormLabel>
        <Input placeholder="Enter property name" />
      </FormControl>
      {/* Add more form fields as needed */}
    </Box>
  );
};

export default PropertyDetailsForm;
