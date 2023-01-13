import { Box, FormHelperText, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { InitialState } from "../constants/constants";

const InputBox = () => {
  const { expression }: InitialState = useSelector(
    (state: InitialState) => state
  );
  return (
    <Box mt={5} px={5}>
      <Input
        h={"10vh"}
        fontSize={"xl"}
        placeholder="Use the keyboard below or type any expression"
        value={expression}
      />
    </Box>
  );
};

export default InputBox;
