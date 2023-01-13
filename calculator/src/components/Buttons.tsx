import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";
import { addExpression, evaluate, reset } from "../Redux/Calc/calc.actions";

const Buttons = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleAddExpression = (e: any) => {
    dispatch(addExpression(e.target.value));
  };
  const handleEvaluate = (): void => {
    dispatch(evaluate());
  };
  const handleReset = (): void => {
    dispatch(reset());
  };
  return (
    <Box>
      <SimpleGrid gap={7} my={5} px={5} columns={4}>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"7"}
        >
          7
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"8"}
        >
          8
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"9"}
        >
          9
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"+"}
        >
          +
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"4"}
        >
          4
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"5"}
        >
          5
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"6"}
        >
          6
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"-"}
        >
          -
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"1"}
        >
          1
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"2"}
        >
          2
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"3"}
        >
          3
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"*"}
        >
          *
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"0"}
        >
          0
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleReset}
        >
          C
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleEvaluate}
        >
          =
        </Button>
        <Button
          color={"white"}
          size={"lg"}
          bgColor={"purple.900"}
          _hover={{ bgColor: "purple.700" }}
          borderRadius={"3xl"}
          onClick={handleAddExpression}
          value={"/"}
        >
          /
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default Buttons;
