import { Container, Flex } from '@chakra-ui/react';
import React from 'react';

import LoginButton from '@/components/LoginButton';
import Title from '@/components/Title';

const LoginPage = () => {
  return (
    <Flex bgColor="teal.500" h="100vh">
      <Container maxW="container.md">
        <Title size={36} mt={64} text="Easy Review" />
        <Title size={20} mt={2} text="より気軽なレビュー体験を" />
        <LoginButton />
      </Container>
    </Flex>
  );
};

export default LoginPage;
