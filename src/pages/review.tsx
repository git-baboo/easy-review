import { Box, Text, Container, HStack, Divider, Center } from '@chakra-ui/layout';
import { Avatar, Button } from '@chakra-ui/react';
import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { useParams } from 'react-router';

import Layout from '@/components/Layout';
import TemplateList from '@/components/TemplateList';
import DiffFiles from '@/components/review/DiffFiles';
import Popover from '@/components/review/Popover';
import ReviewTitle from '@/components/review/ReviewTitle';
import { dummyDiff as diff } from '@/data/dummyDiff'; // TODO: ダミーデータ入れ換え
import { pullRequest } from '@/data/dummyPullRequest'; // TODO: ダミーデータ入れ替え
import { reviewer } from '@/data/dummyReviewer';

type Path = {
  owner: string;
  repo: string;
  pullNumber: string;
};

const ReviewPage = () => {
  // TODO: pullNumber を使用したら ESLint 警告無視用のコメントを削除
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { owner, repo, pullNumber } = useParams<Path>();

  return (
    <>
      <Layout text={'テンプレートを使ってレビューをしてみよう！'} icon={BsFillChatDotsFill}>
        <Container maxW="container.lg">
          <HStack spacing="50px" mt={9} align="top">
            <Box align="end">
              <Box width={700} align="start">
                <ReviewTitle color="gray" fontSize="xs" title={`${owner}/${repo}`} />
                <ReviewTitle color="black" fontSize="md" title={pullRequest.title} />
                <Text color="black" fontSize="xs">
                  <Avatar name={pullRequest.userName} src={pullRequest.avatarUrl} size="2xs" />
                  {pullRequest.userName}
                </Text>
              </Box>
              <DiffFiles spacing={6} mt={3} w={700} align="start" diff={diff} reviewer={reviewer} />
              <Popover />
              <Button colorScheme="teal" mt={9} size="lg">
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
