import React, { useState } from "react";
import {
  Box,
  Button,
  VStack,
  Heading,
  List,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  HStack,
  useClipboard,
  Flex,
  Text,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

export default function ReferralsPage() {
  const [referrals, setReferrals] = useState([
    {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    // ... more referrals
  ]);
  const [newReferral, setNewReferral] = useState({
    name: "",
    email: "",
  });

  const referralLink = "http://yourwebsite.com/referralLink";
  const { hasCopied, onCopy } = useClipboard(referralLink);

  const handleChange = (e) => {
    setNewReferral({ ...newReferral, [e.target.name]: e.target.value });
  };

  const sendReferral = () => {
    setReferrals([...referrals, newReferral]);
    setNewReferral({ name: "", email: "" });
  };

  return (
    <>
      <NavBar />
      <Box p="5">
        <Heading mb="5">Referrals</Heading>
        <Text fontSize="xl" mb="5">
          Find investors and earn a share of their lifetime revenue
        </Text>
        <HStack mb="5">
          <Text>Your referral link: </Text>
          <Input value={referralLink} isReadOnly />
          <Button onClick={onCopy} ml="2">
            {hasCopied ? "Copied" : "Copy"}
          </Button>
        </HStack>
        <Flex>
          <VStack flex="1" spacing={4} align="stretch" mr="5">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={newReferral.name}
                onChange={handleChange}
                type="text"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                value={newReferral.email}
                onChange={handleChange}
                type="email"
              />
            </FormControl>
            <Button onClick={sendReferral}>Send Referral</Button>
          </VStack>
          <VStack flex="1" spacing={4} align="stretch" ml="5">
            <Box p="4" border="1px" borderColor="gray.200" borderRadius="md">
              <Heading size="md" mb="4">
                Your Referrals
              </Heading>
              <Text>5</Text>
            </Box>
            <Box p="4" border="1px" borderColor="gray.200" borderRadius="md">
              <Heading size="md" mb="4">
                Revenue Earned
              </Heading>
              <Text>$1000</Text>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}
