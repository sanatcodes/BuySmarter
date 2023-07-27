import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
  Image,
  CloseButton,
  Button,
  Avatar,
  Text,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import darkLogo from "../assets/DarkModeLogo.png";
import lightLogo from "../assets/LightModeLogo.png";
import { NavLink } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../services/firebase";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = useColorModeValue("purple.200", "gray.700");
  const color = useColorModeValue("gray.700", "gray.200");
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  const googlSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            Marketplace
          </NavLink>
        </Box>
        <Box mx={2}>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Box>
        <Box mx={2}>
          {auth.currentUser === null ? (
            <Button mx={2} colorScheme="purple" onClick={googlSignIn}>
              Sign Up / Login
            </Button>
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={
                  <Avatar src={auth.currentUser?.photoURL} size={"xs"} />
                }
              >
                {auth.currentUser?.displayName}
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        // Sign-out successful
                        setUser(null);
                      })
                      .catch((error) => {
                        // An error happened.
                        console.log(error);
                      });
                  }}
                >
                  Sign Out
                </MenuItem>
                <MenuItem>
                  <NavLink
                    exact
                    to="/wholesaleDashboard"
                    activeClassName="active"
                  >
                    Wholesaler Dashboard
                  </NavLink>
                </MenuItem>
                {/* Add additional menu items here */}
              </MenuList>
            </Menu>
          )}
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
