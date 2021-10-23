import { Box, Text, Container, HStack, Divider, Center } from '@chakra-ui/layout';
import { Avatar, Button } from '@chakra-ui/react';
import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';

import Layout from '@/components/Layout';
import PostData from '@/components/PostDatas';
import TemplateList from '@/components/TemplateList';
import DiffFiles from '@/components/review/DiffFiles';
import Popover from '@/components/review/Popover';
import ReviewTitle from '@/components/review/ReviewTitle';

const ReviewPage = () => {
  return (
    <>
      <Layout text={'テンプレートを使ってレビューをしてみよう！'} icon={BsFillChatDotsFill}>
        <Container maxW="container.lg">
          <HStack spacing="50px" mt={9} align="top">
            <Box align="end">
              <Box width={700} align="start">
                <ReviewTitle color="gray" fontSize="xs" title="git-baboo/minihackathon-a" />
                <ReviewTitle color="black" fontSize="md" title="ToDoのstate管理方法の変更" />
                <Text color="black" fontSize="xs">
                  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" size="2xs" />
                  kacha-122
                </Text>
              </Box>
              <DiffFiles spacing={6} mt={3} w={700} align="start" />
              <Popover />
              <Button colorScheme="teal" mt={9} size="lg" onClick={PostData}>
                完了
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
