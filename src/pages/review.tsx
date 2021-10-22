import { Box, Text, Container, HStack, Divider, Center } from '@chakra-ui/layout';
import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';

import Layout from '@/components/Layout';
import TemplateList from '@/components/TemplateList';

const ReviewPage = () => {
  return (
    <>
      <Layout text={'テンプレートを使ってレビューをしてみよう！'} icon={BsFillChatDotsFill}>
        <Container maxW="container.lg" color="white">
          <HStack spacing={20} mt={9} align="top">
            <Box width={700}>
              <Text color="gray" fontSize="xs">
                git-baboo/minihackathon-a
              </Text>
              <Text color="black" fontSize="md">
                ToDoのstate管理方法の変更
              </Text>
              <Text color="black" fontSize="xs">
                kacha-122
              </Text>
              <Text color="black" fontSize="xs">
                以下コード
              </Text>
            </Box>
            <Center height="lg">
              <Divider color="black" orientation="vertical" />
            </Center>
            <TemplateList />
          </HStack>
        </Container>
      </Layout>
    </>
  );
};

export default ReviewPage;
