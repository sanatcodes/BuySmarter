import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar({ onChange }) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input type="text" placeholder="Search" onChange={onChange} />
    </InputGroup>
  );
}
