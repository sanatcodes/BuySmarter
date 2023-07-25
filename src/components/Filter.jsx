import { useState } from "react";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
  useControllableState,
} from "@chakra-ui/react";

export default function Filter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [range, setRange] = useControllableState({
    defaultValue: [1, 100],
    min: 1,
    max: 100,
  });

  const [minValue, setMinValue] = useState(range[0]);
  const [maxValue, setMaxValue] = useState(range[1]);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleMinValueChange(event) {
    const newMinValue = parseInt(event.target.value);
    setMinValue(newMinValue);
    setRange([newMinValue, range[1]]);
  }

  function handleMaxValueChange(event) {
    const newMaxValue = parseInt(event.target.value);
    setMaxValue(newMaxValue);
    setRange([range[0], newMaxValue]);
  }

  return (
    <>
      <Button onClick={toggleModal}>Filter</Button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter Properties</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <label htmlFor="priceRange">Price Range:</label>
              <RangeSlider
                aria-label="range=slider" // maybe change to price-range later
                value={range}
                onChange={setRange}
                minH="32px"
                colorScheme="pink"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Input
                type="number"
                value={minValue}
                onChange={handleMinValueChange}
                w="50%"
                mr={2}
              />
              <Input
                type="number"
                value={maxValue}
                onChange={handleMaxValueChange}
                w="50%"
                mr={2}
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={toggleModal}>
              Close
            </Button>
            <Button variant="ghost">Apply</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
