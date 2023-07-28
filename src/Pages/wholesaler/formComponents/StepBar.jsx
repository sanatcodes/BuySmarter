import {
  Box,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const steps = [
  { title: "Step 1", description: "General Property Information" },
  { title: "Step 2", description: "Specific Property Information" },
  { title: "Step 3", description: "Financing Information" },
  { title: "Step 4", description: "Income Information" },
  { title: "Step 5", description: "Operating Information" },
  { title: "Step 6", description: "Cash to Close" },
  { title: "Step 7", description: "Property Pictures" },
  { title: "Step 8", description: "ID Pictures" },
  { title: "Done!", description: "Click 'Return to Dashboard'" },
];

// *** If it does not work then remove default ***
export default function StepBar({ currentStep }) {
  let activeStep = currentStep - 2; // If currentStep starts from 1, you need to subtract 1 because array indices start from 0
  if (activeStep < 0) {
    activeStep = 0; // Make sure activeStep is not negative
  }
  const activeStepText = steps[activeStep].description;

  return (
    <Box mt={5} transform="scale(0.8)">
      {" "}
      {/* Change the scale value to adjust the size */}
      <Stack>
        <Stepper size="sm" index={activeStep} gap="0">
          {steps.map((step, index) => (
            <Step key={index} gap="0">
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator _horizontal={{ ml: "0" }} />
            </Step>
          ))}
        </Stepper>
        <Text mt={3}>
          Step {activeStep + 1}: <b>{activeStepText}</b>
        </Text>
      </Stack>
    </Box>
  );
}

StepBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
