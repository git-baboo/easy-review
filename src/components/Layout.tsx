import { Text, Icon, Flex, HStack, Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

import { useAuth } from '@/hooks/useAuth';

type Props = {
  text: string;
  icon: IconType;
  children: ReactNode;
};

const Layout = ({ text, icon, children }: Props) => {
  const { logout } = useAuth();

  return (
    <>
      <Flex alignItems="center" pl={16} h={36} bg="teal.500">
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
          <Button onClick={logout}>logout</Button>
        </HStack>
      </Flex>
      {children}
    </>
  );
};

export default Layout;
