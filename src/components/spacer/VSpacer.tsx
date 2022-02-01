import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  size: number;
};

const VSpacer = ({ size }: Props) => {
  return <Box w={size} h="auto" display="inline-block" flexShrink={0} />;
};

export default VSpacer;
