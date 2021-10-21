import { Container, Text, Flex } from '@chakra-ui/react';
import React from 'react';

import LoginButton from '@/components/LoginButton';

const LoginPage = () => {
  return (
    <Flex bgColor="teal.500" h="100vh">
      <Container maxW="container.md">
        <Text
          fontSize={36}
          color="white"
          fontWeight={700}
          fontFamily="Inter"
          fontStyle="normal"
          mt={64}
        >
          Easy Review
        </Text>
        <Text
          fontSize={20}
          color="white"
          fontWeight={700}
          fontFamily="Inter"
          fontStyle="normal"
          mt={2}
        >
          より気軽なレビュー体験を
        </Text>
        <LoginButton />
      </Container>
    </Flex>
  );
};

export default LoginPage;
