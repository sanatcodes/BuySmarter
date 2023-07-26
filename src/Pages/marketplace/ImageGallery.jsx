import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Flex } from "@chakra-ui/react";

const ImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((oldIndex) => {
      return oldIndex === 0 ? images.length - 1 : oldIndex - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((oldIndex) => {
      return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
    });
  };

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Button onClick={handlePrev}>Prev</Button>
        <Image
          src={images[activeIndex]}
          alt="Selected"
          boxSize="50%"
          objectFit="cover"
        />
        <Button onClick={handleNext}>Next</Button>
      </Flex>
      <Flex justifyContent="center" gap="10px">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Thumbnail"
            opacity={activeIndex === index ? "1" : "0.5"}
            boxSize="50px"
            objectFit="cover"
          />
        ))}
      </Flex>
    </Box>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
