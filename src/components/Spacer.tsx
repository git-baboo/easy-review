import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  size: number;
};

export const VSpacer = ({ size }: Props) => {
  return <Box w="auto" h={size} flexShrink={0} />;
};

export const HSpacer = ({ size }: Props) => {
  return <Box w={size} h="auto" display="inline-block" flexShrink={0} />;
};
