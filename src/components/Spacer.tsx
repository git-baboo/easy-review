import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  horizontal: boolean;
  heightSize: number;
  widthSize?: number;
};

const Spacer = ({ horizontal, heightSize, widthSize }: Props) => {
  return horizontal ? (
    <Box bg="black" w={"100%"} p={heightSize}></Box>
  ) : (
    <Box bg="tomato" w={widthSize} p={heightSize}></Box>
  );
};

export default Spacer;
