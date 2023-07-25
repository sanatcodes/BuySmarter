import { Box, Button, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWholesalerStep } from "../../features/wholesaler/wholesaleSlice";

export default function WholesalePictureUpload() {
  const dispatch = useDispatch();
  return (
    <Box>
      <Heading>Upload some pictures here</Heading>
      <Button onClick={() => dispatch(setWholesalerStep(4))}>Continue</Button>
    </Box>
  );
}
