import { Text, Icon, Flex, Box, Spacer } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

import Menu from "@/components/Menu";
import { HSpacer } from "@/components/Spacer";

type Props = {
  text: string;
  icon: IconType;
  children: ReactNode;
};

const Layout = ({ text, icon, children }: Props) => {
  return (
    <>
      <Flex bgColor="teal.500" h={36} align="center">
        <HSpacer size={16} />
        <Flex>
          <Icon as={icon} boxSize={6} color="teal.600" />
          <HSpacer size={1} />
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="white"
            whiteSpace="pre-line"
          >
            {text}
          </Text>
        </Flex>

        <Spacer />

        <Box h={10} w={10} alignSelf="flex-start">
          <Menu />
        </Box>
      </Flex>
      {children}
    </>
  );
};

export default Layout;
