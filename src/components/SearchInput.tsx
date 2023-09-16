import { Input, InputGroup } from "@chakra-ui/react";
import { BsAlarm, BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <Input
        placeholder="Search for a game"
        variant={"filled"}
        borderRadius={20}
      />
    </InputGroup>
  );
};

export default SearchInput;
