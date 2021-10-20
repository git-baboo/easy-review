import { Text, Icon, Flex, HStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

type Props = {
  text: string;
  icon: IconType;
  children: ReactNode;
};

const Layout = ({ text, icon, children }: Props) => {
  return (
    <>
      <Flex alignItems="center" pl={16} h={36} bg="teal.500">
        <HStack>
          <Icon mb={6} as={icon} color="teal.600" />
          <Text color="white" whiteSpace="pre-line">
            {text}
          </Text>
        </HStack>
      </Flex>
      {children}
    </>
  );
};

export default Layout;
