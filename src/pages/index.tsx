import { Box, Text, Container } from '@chakra-ui/react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import Layout from '@/components/Layout';

const TopPage = () => {
  return (
    <Layout
      text={`あなた宛のレビューの依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！`}
      icon={BsCheckCircleFill}
    >
      <Container maxW="container.sm" bg="blue.200">
        <Box mt={6} mb={6} bg="green.100">
          <Text fontSize="md" fontWeight="bold">
            ToDoのstate管理方法の変更
          </Text>
          <Text fontSize="xs">git-baboo/minihackathon-a</Text>
        </Box>
        <Box mt={6} mb={6} bg="green.100">
          <Text fontSize="md" fontWeight="bold">
            Feature/7 change todo state
          </Text>
          <Text fontSize="xs">git-baboo/react-study-sugimizu</Text>
        </Box>
        <Box mt={6} mb={6} bg="green.100">
          <Text fontSize="md" fontWeight="bold">
            認証の実装
          </Text>
          <Text fontSize="xs">zemi-team2/sake</Text>
        </Box>
      </Container>
    </Layout>
  );
};

export default TopPage;
