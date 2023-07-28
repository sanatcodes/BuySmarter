import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Center,
  VStack,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWholesalerStep } from "../../../features/wholesaler/wholesaleSlice";

export default function IdPictureUpload() {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    //Convert the FileList object to an array
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = () => {
    //Here you can handle the files (EX: upload them to server)
    console.log(files);

    dispatch(setWholesalerStep(10));
  };

  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Heading mb={10}>Upload ID pictures:</Heading>
      <Box as="label">
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          hidden
          id="file-upload"
        />
        <Center
          w="400px"
          h="500px"
          borderWidth="2px"
          borderRadius="md"
          borderColor="gray.500"
          cursor="pointer"
          _hover={{ bg: "gray.100" }}
        >
          <VStack>
            <Text>Select Files</Text>
            {files &&
              files.map((file, index) => <Text key={index}>{file.name}</Text>)}
          </VStack>
        </Center>
      </Box>
      <Button mt={4} onClick={handleSubmit}>
        Continue
      </Button>
    </Flex>
  );
}
