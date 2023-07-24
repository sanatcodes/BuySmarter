import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
  Box,
  useColorMode,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import darkLogo from "../assets/DarkModeLogo.png";
import lightLogo from "../assets/LightModeLogo.png";

const links = ["Blog", "Terms of use", "Privacy policy"];
const accounts = [
  {
    url: "https://github.com",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://twitter.com/",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://linkedin.com/in",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="footer"
      mt="auto"
      bg={colorMode === "light" ? "purple.200" : "gray.700"}
    >
      <Stack
        maxW="5xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Image
          w="150px"
          src={colorMode === "dark" ? darkLogo : lightLogo}
          alt="TemplatesKart"
        />

        {/* Desktop Screen */}
        <HStack
          spacing={4}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link, index) => (
            <CustomLink key={index}>{link}</CustomLink>
          ))}
        </HStack>

        {/* Mobile and Tablet Screens */}
        <Stack display={{ base: "flex", md: "none" }} alignItems="center">
          <HStack alignItems="center">
            <CustomLink>Documentation</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Terms of use</CustomLink>
            <CustomLink>Privacy policy</CustomLink>
          </HStack>
        </Stack>

        <Stack direction="row" spacing={5} alignItems="center">
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="md"
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
