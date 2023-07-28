import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaDollarSign, FaStar } from "react-icons/fa";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [bedrooms, setBedrooms] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const handleBedroomChange = (event) => {
    const value = event.target.value;
    if (bedrooms.includes(value)) {
      setBedrooms(bedrooms.filter((bedroom) => bedroom !== value));
    } else {
      setBedrooms([...bedrooms, value]);
    }
  };

  const handleAmenityChange = (event) => {
    const value = event.target.value;
    if (amenities.includes(value)) {
      setAmenities(amenities.filter((amenity) => amenity !== value));
    } else {
      setAmenities([...amenities, value]);
    }
  };

  const handleApplyFilter = () => {
    // Apply filter logic here
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>More</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={6}>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Price Range
                </Heading>
                <Flex align="center">
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaDollarSign} color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(event) =>
                        setMinPrice(parseInt(event.target.value))
                      }
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(event) =>
                        setMaxPrice(parseInt(event.target.value))
                      }
                    />
                  </InputGroup>
                </Flex>
                <Slider
                  aria-label="price-range"
                  value={priceRange}
                  onChange={handlePriceRangeChange}
                  min={0}
                  max={500}
                  step={10}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                  <SliderThumb />
                </Slider>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Bedrooms
                </Heading>
                <Stack spacing={2}>
                  <Checkbox
                    value="1"
                    isChecked={bedrooms.includes("1")}
                    onChange={handleBedroomChange}
                  >
                    <Text>1 Bedroom</Text>
                  </Checkbox>
                  <Checkbox
                    value="2"
                    isChecked={bedrooms.includes("2")}
                    onChange={handleBedroomChange}
                  >
                    <Text>2 Bedrooms</Text>
                  </Checkbox>
                  <Checkbox
                    value="3"
                    isChecked={bedrooms.includes("3")}
                    onChange={handleBedroomChange}
                  >
                    <Text>3 Bedrooms</Text>
                  </Checkbox>
                  <Checkbox
                    value="4"
                    isChecked={bedrooms.includes("4")}
                    onChange={handleBedroomChange}
                  >
                    <Text>4+ Bedrooms</Text>
                  </Checkbox>
                </Stack>
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb={2}>
                  Amenities
                </Heading>
                <Stack spacing={2}>
                  <Checkbox
                    value="wifi"
                    isChecked={amenities.includes("wifi")}
                    onChange={handleAmenityChange}
                  >
                    <Flex align="center">
                      <Icon as={FaStar} color="gray.300" mr={2} />
                      <Text>Wifi</Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    value="kitchen"
                    isChecked={amenities.includes("kitchen")}
                    onChange={handleAmenityChange}
                  >
                    <Flex align="center">
                      <Icon as={FaStar} color="gray.300" mr={2} />
                      <Text>Kitchen</Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    value="parking"
                    isChecked={amenities.includes("parking")}
                    onChange={handleAmenityChange}
                  >
                    <Flex align="center">
                      <Icon as={FaStar} color="gray.300" mr={2} />
                      <Text>Parking</Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    value="pool"
                    isChecked={amenities.includes("pool")}
                    onChange={handleAmenityChange}
                  >
                    <Flex align="center">
                      <Icon as={FaStar} color="gray.300" mr={2} />
                      <Text>Pool</Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    value="gym"
                    isChecked={amenities.includes("gym")}
                    onChange={handleAmenityChange}
                  >
                    <Flex align="center">
                      <Icon as={FaStar} color="gray.300" mr={2} />
                      <Text>Gym</Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    value="pets"
                    isChecked={amenities.includes("pets")}
                    onChange={handleAmenityChange}
                  >
                    <Flex align="center">
                      <Icon as={FaStar} color="gray.300" mr={2} />
                      <Text>Pets Allowed</Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleApplyFilter}>
              Apply
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
