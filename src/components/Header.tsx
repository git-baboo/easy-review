import { Container, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      pl={16}
      height={36}
      textColor="white"
      bg="teal.500"
    >
      <Text>今日のご飯何にしよう</Text>
      <Text>焼肉食べたいなー</Text>
    </Container>
  );
};

export default Header;
