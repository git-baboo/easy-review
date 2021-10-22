import { Box, Text, Container, HStack, VStack, Divider, Center } from '@chakra-ui/layout';
import { Avatar, Button } from '@chakra-ui/react';
import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';

import Layout from '@/components/Layout';
import TemplateList from '@/components/TemplateList';
import Popover from '@/components/review/Popover';

const ReviewPage = () => {
  return (
    <>
      <Layout text={'テンプレートを使ってレビューをしてみよう！'} icon={BsFillChatDotsFill}>
        <Container maxW="container.lg" color="white">
          <HStack spacing="50px" mt={9} align="top">
            <VStack align="end">
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
                <Box bg="green.100" width="707" height="147" color="white" mt={3}>
                  コード
                </Box>
                <Box bg="blue.100" width="707" height="500" color="white" mt={6}>
                  コード
                </Box>
              </Box>
              <Popover />
              <Button colorScheme="teal" mt={9} size="lg">
                完了
              </Button>
            </VStack>
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
