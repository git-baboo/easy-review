import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  horizontal: boolean;
  size: number;
};

const Spacer = ({ horizontal, size }: Props) => {
  return horizontal ? (
    <Box w={size} h={"auto"} display={"inline-block"} flexShrink={0}></Box>
  ) : (
    <Box w={"auto"} h={size} flexShrink={0}></Box>
  );
};

export default Spacer;
