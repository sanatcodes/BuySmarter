import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Flex, Icon } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

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
        <ArrowBackIcon onClick={handlePrev}></ArrowBackIcon>
        <Image
          src={images[activeIndex]}
          alt="Selected"
          boxSize="80%"
          objectFit="cover"
          mb="5"
        />
        <ArrowForwardIcon onClick={handleNext}></ArrowForwardIcon>
      </Flex>
      <Flex justifyContent="center" gap="15px">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Thumbnail"
            opacity={activeIndex === index ? "1" : "0.5"}
            boxSize="100px"
            objectFit="cover"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveIndex(index)}
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
