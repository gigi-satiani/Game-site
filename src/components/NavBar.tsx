import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../images/logo.webp";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"70px"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
