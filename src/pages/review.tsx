import { Box, Text, Container, HStack, Divider, Center } from '@chakra-ui/layout';
import { Avatar, Button } from '@chakra-ui/react';
import React from 'react';
import { BiCommentAdd } from 'react-icons/bi';
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
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" size="2xs" />
                kacha-122
              </Text>
              <Text color="black" fontSize="xs">
                以下コード
              </Text>
              <Button size="xs" colorScheme="blue">
                <BiCommentAdd color="white" size="15" />
              </Button>
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
