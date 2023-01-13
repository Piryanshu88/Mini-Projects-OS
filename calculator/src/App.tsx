import { ChakraProvider, HStack, Heading, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Calculator from "./components/Calculator";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HStack justifyContent={"space-between"} px={10}>
      <Heading fontWeight={"semibold"} fontFamily={"monospace"} size={"xl"}>
        Calculator
      </Heading>
      <ColorModeSwitcher />
    </HStack>
    <Calculator />
  </ChakraProvider>
);
