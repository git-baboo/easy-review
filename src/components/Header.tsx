import { Text, Icon, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Header = () => {
  const text = 'あなた宛にレビュー依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！';
  const icon = BsFillCheckCircleFill;

  return (
    <Flex alignItems="center" pl={16} h={36} bg="teal.500">
      <HStack>
        <Icon mb={6} as={icon} color="teal.600" />
        <Text color="white" whiteSpace="pre-line">
          {text}
        </Text>
      </HStack>
    </Flex>
  );
};

export default Header;
