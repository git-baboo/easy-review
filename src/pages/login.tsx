import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import LoginButton from '@/components/LoginButton';

const LoginPage = () => {
  return (
    <Flex bgColor="teal.500" h="100vh">
      <Container maxW="container.md" color="white">
        <Heading size="xl" mt={64}>
          Easy Review
        </Heading>
        <Heading size="md" mt={2}>
          より気軽なコードレビュー体験を
        </Heading>
        <LoginButton />
      </Container>
    </Flex>
  );
};

export default LoginPage;
