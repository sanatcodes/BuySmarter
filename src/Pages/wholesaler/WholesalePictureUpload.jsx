import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWholesalerStep } from "../../features/wholesaler/wholesaleSlice";

export default function WholesalePictureUpload() {
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

    dispatch(setWholesalerStep(9));
  };

  return (
    <Box>
      <Heading>Upload some pictures here</Heading>
      <Input type="file" accept="image/" multiple onChange={handleFileChange} />
      <Button onClick={handleSubmit}>Continue</Button>
    </Box>
  );
}
