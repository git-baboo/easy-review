import { Text, Icon, Flex, HStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import LogoutButton from '@/components/LogoutButton';

type Props = {
  text: string;
  icon: IconType;
  children: ReactNode;
};

const Layout = ({ text, icon, children }: Props) => {
  return (
    <>
      <Flex alignItems="center" pl={16} h={36} bg="teal.500">
        <HStack w="100%" mr={16} justifyContent="space-between">
          <HStack alignItems="start">
            <Icon mt={1} as={icon} boxSize={6} color="teal.600" />
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
          <LogoutButton />
        </HStack>
      </Flex>
      {children}
    </>
  );
};

export default Layout;
