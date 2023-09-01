import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"50px"} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;