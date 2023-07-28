import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function WholesaleOnboardingSuccessful() {
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      height="100vh"
      pt={10}
    >
      <Heading mb={4}>Congratulations, your property has been listed</Heading>
      <Box boxSize="300px" my={10}>
        <Image
          src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          boxSize="100%"
          objectFit="cover"
        />
      </Box>
      <Button onClick={() => navigate("/wholesaleDashboard")}>
        Go to Dashboard
      </Button>
    </Flex>
  );
}
