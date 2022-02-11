import { Text, Icon, Flex, HStack, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

import Menu from "@/components/Menu";
import { HSpacer, VSpacer } from "@/components/Spacer";

type Props = {
  text: string;
  icon: IconType;
  children: ReactNode;
};

const Layout = ({ text, icon, children }: Props) => {
  return (
    <>
      <Flex alignItems="center" h={36} bg="teal.500">
        <HSpacer size={16} />
        <HStack w="100%" h="100%">
          <HStack w="90%" alignItems="start">
            <VSpacer size={1} />
            <Icon as={icon} boxSize={6} color="teal.600" />
            <Text
              fontSize="lg"
              lineHeight={7}
              fontWeight="semibold"
              color="white"
              whiteSpace="pre-line"
            >
              {text}
            </Text>
          </HStack>
          <Box h="100%" w="10%" align="right">
            <Menu />
          </Box>
        </HStack>
        <HSpacer size={3} />
      </Flex>
      {children}
    </>
  );
};

export default Layout;
