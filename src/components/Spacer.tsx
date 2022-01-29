import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  size: number;
  horizontal?: boolean;
};

const Spacer = ({ size, horizontal = false }: Props) => {
  return horizontal ? (
    <Box w={size} h="auto" display="inline-block" flexShrink={0} />
  ) : (
    <Box w="auto" h={size} flexShrink={0} />
  );
};

export default Spacer;
