/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Text, Container, HStack, Divider, Center } from '@chakra-ui/layout';
import { Avatar, Button } from '@chakra-ui/react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { useParams } from 'react-router';

import Layout from '@/components/Layout';
import TemplateList from '@/components/TemplateList';
import DiffFiles from '@/components/review/DiffFiles';
import ReviewTitle from '@/components/review/ReviewTitle';
import useWidgets from '@/components/review/useWidgets';
import { dummyDiff as diff } from '@/data/dummyDiff'; // TODO: ダミーデータ入れ換え
import { dummyPost as post } from '@/data/dummyPost'; // TODO: ダミーデータ入れ替え
import { pullRequest } from '@/data/dummyPullRequest'; // TODO: ダミーデータ入れ替え
import { reviewer } from '@/data/dummyReviewer';
import { Comment } from '@/types/CommentType';

type Path = {
  owner: string;
  repo: string;
  pullNumber: string;
};

const ReviewPage = () => {
  // TODO: pullNumber を使用したら ESLint 警告無視用のコメントを削除
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { owner, repo, pullNumber } = useParams<Path>();
  const [widgets, { addWidget }]: any = useWidgets(reviewer);

  const getSideAndLine = (changeKey: string): [string, string] => {
    const changeType = changeKey.slice(0, 1);
    const line = changeKey.slice(1);
    switch (changeType) {
      case 'I':
        return ['RIGHT', line];
      case 'N':
        return ['LEFT', line];
      case 'D':
        return ['LEFT', line];

      default:
        return ['', ''];
    }
  };

  const handleSubmit = () => {
    const comments: Comment[] = [];
    Object.keys(widgets).map((key) => {
      const changeKey = widgets[key].props.changeKey;
      const [side, line] = getSideAndLine(changeKey);
      widgets[key].props.comments.map(({ body }: any) => {
        comments.push({ path: '', line: line, side: side, body: body });
      });
    });
    post(comments);
  };

  return (
    <>
      <Layout text={'テンプレートを使ってレビューをしてみよう！'} icon={BsFillChatDotsFill}>
        <Container py={9} maxW="container.lg">
          <HStack spacing="50px" align="top">
            <Box align="end">
              <Box width={700} align="start">
                <ReviewTitle color="gray" fontSize="xs" title={`${owner}/${repo}`} />
                <ReviewTitle color="black" fontSize="md" title={pullRequest.title} />
                <Text color="black" fontSize="xs">
                  <Avatar name={pullRequest.userName} src={pullRequest.avatarUrl} size="2xs" />
                  {pullRequest.userName}
                </Text>
              </Box>
              <DiffFiles
                spacing={6}
                mt={3}
                w={700}
                align="start"
                diff={diff}
                widgets={widgets}
                addWidget={addWidget}
              />
              <Button colorScheme="teal" mt={9} size="lg" onClick={handleSubmit}>
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
