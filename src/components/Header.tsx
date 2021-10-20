import { Container, Text, Icon, HStack } from '@chakra-ui/react';
import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';

const Header = () => {
  return (
    <HStack pl={16} height={36} bg="teal.500">
      {/* 別途Containerを作ってflex-startをしないと、縦中央揃えがうまく作用しなかった*/}
      <Container display="flex" alignItems="flex-start">
        <Icon as={BiBadgeCheck}></Icon>
        <Container display="flex" flexDirection="column" justifyContent="center" textColor="white">
          <Text>今日のご飯何にしよう</Text>
          <Text>焼肉食べたいなー</Text>
          <Text>おすしもいいなー</Text>
        </Container>
      </Container>
    </HStack>
  );
};

export default Header;
