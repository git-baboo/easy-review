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
          <Text>ToDoのstate管理方法の変更</Text>
          <Text>git-baboo/minihackathon-a</Text>
        </Box>
      </Container>
    </Layout>
  );
};

export default TopPage;
