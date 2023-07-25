import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setWholesalerStep } from "../../features/wholesaler/wholesaleSlice";

export default function UploadLegalDocs() {
  const dispatch = useDispatch();
  return (
    <Box>
      <Heading>Upload paperwork here</Heading>
      <Button
        onClick={() => {
          dispatch(setWholesalerStep(5));
        }}
      >
        Continue
      </Button>
    </Box>
  );
}
