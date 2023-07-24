import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState } from "react";
import darkLogo from "../assets/DarkModeLogo.png";
import lightLogo from "../assets/LightModeLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = useColorModeValue("purple.200", "gray.700");
  const color = useColorModeValue("gray.700", "gray.200");
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      color={color}
      p={4}
      alignItems="center"
    >
      <Box>
        <NavLink to="/">
          <Image
            w={{ base: "120px", md: "150px" }}
            src={colorMode === "dark" ? darkLogo : lightLogo}
            objectFit={"contain"}
            alt=" Logo"
          />
        </NavLink>
      </Box>
      <Box ml="auto" display={{ base: "none", md: "flex" }} alignItems="center">
        <Box mx={2}></Box>
        <Box mx={2}>
          <NavLink exact to="/marketplace" activeClassName="active">
            MarketPlace
          </NavLink>
        </Box>
        <Box mx={2}>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Box>

        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle Dark Mode"
        />
      </Box>
      <Box ml="auto" display={{ base: "flex", md: "none" }}>
        <IconButton
          onClick={handleToggle}
          icon={show ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle Dark Mode"
        />
      </Box>
      <Box
        pos="absolute"
        top="0"
        right="0"
        w="100vw"
        h="100vh"
        bg={bgColor}
        display={show ? "flex" : "none"}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        zIndex="999"
      >
        <CloseButton
          pos="absolute"
          top={2}
          right={2}
          onClick={handleToggle}
          color={color}
          _hover={{ color: "red.500" }}
        />
        <Box mx={2}>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={() => setShow(false)}
          >
            <Image
              boxSize="100px"
              src={colorMode === "dark" ? darkLogo : lightLogo}
              objectFit={"contain"}
              alt="Logo"
            />
          </NavLink>
        </Box>
        <Box mx={2} my={2}>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={() => setShow(false)}
          >
            Home
          </NavLink>
        </Box>
        <Box mx={2} my={2}>
          <NavLink
            exact
            to="/marketplace"
            activeClassName="active"
            onClick={() => setShow(false)}
          >
            Marketplace
          </NavLink>
        </Box>
        <Box mx={2} my={2}>
          <NavLink
            exact
            to="/about"
            activeClassName="active"
            onClick={() => setShow(false)}
          >
            About
          </NavLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default NavBar;
