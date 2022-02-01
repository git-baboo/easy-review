import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  size: number;
};

const HSpacer = ({ size }: Props) => {
  return <Box w={size} h="auto" display="inline-block" flexShrink={0} />;
};

export default HSpacer;
