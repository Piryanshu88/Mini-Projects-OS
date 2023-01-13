import { Box, Flex } from "@chakra-ui/react";
import InputBox from "./InputBox";
import Buttons from "./Buttons";

const Calculator = () => {
  return (
    <Flex
      w={"sm"}
      flexDirection={"column"}
      border={"1px solid grey"}
      borderRadius={"xl"}
      m={"auto"}
      my={10}
    >
      <InputBox />
      <Buttons />
    </Flex>
  );
};

export default Calculator;
