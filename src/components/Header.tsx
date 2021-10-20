import { Container, Text, Icon, HStack } from '@chakra-ui/react';
import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

// type Props = () => {
//   pageType: string;
// };

const Header = () => {
  return (
    <HStack pl={16} height={36} bg="teal.500">
      {/* 別途Containerを作ってflex-startをしないと、縦中央揃えがうまく作用しなかった*/}
      <Container display="flex" alignItems="flex-start">
        <Icon as={BiCheckCircle}></Icon>
        <Container display="flex" flexDirection="column" justifyContent="center" textColor="white">
          <Text>あなた宛にレビュー依頼が届いているよ👀</Text>
          <Text>レビューするプルリクエストを選んでみよう！</Text>
        </Container>
      </Container>
    </HStack>
  );
};

export default Header;
