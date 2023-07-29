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
      <Button onClick={() => navigate("/wholesaleDashboard")}>
        Go to Dashboard
      </Button>
    </Flex>
  );
}
