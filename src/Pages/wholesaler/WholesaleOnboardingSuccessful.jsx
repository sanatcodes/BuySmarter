import { Box, Button, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWholesalerStep } from "../../features/wholesaler/wholesaleSlice";

export default function WholesaleOnboardingSuccessful() {
  const dispatch = useDispatch();
  return (
    <Box>
      <Heading>Congratulations, your property has been listed</Heading>
      <Button onClick={() => dispatch(setWholesalerStep(4))}>
        Return to Dashboard
      </Button>
    </Box>
  );
}
