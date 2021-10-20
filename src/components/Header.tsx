import { Text, Icon, Flex, Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

const Header = () => {
  return (
    <Flex alignItems="center" pl={16} height={36} bg="teal.500">
      <HStack>
        <Icon mb={6} as={BiCheckCircle}></Icon>
        <Box textColor="white">
          <Text>あなた宛にレビュー依頼が届いているよ👀</Text>
          <Text>レビューするプルリクエストを選んでみよう！</Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Header;
