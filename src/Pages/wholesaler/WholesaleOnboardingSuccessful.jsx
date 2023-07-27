import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function WholesaleOnboardingSuccessful() {
  const navigate = useNavigate();
  return (
    <Box>
      <Heading>Congratulations, your property has been listed</Heading>
      <Button onClick={() => navigate("/wholesaleDashboard")}>
        Go to Dashboard
      </Button>
    </Box>
  );
}
