import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../images/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize={"50px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
