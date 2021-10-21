import { Container, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import Layout from '@/components/Layout';
import ReviewButton from '@/components/detail/ReviewButton';
import Reviewee from '@/components/detail/Reviewee';
import TimelineItem from '@/components/detail/TimelineItem';
import { pullRequest } from '@/data/dummyPullRequest';

type Path = {
  owner: string;
  repo: string;
  pullNumber: string;
};

const DetailPage = () => {
  // TODO: eslint の例外設定を削除
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { owner, repo, pullNumber } = useParams<Path>();

  return (
    <Layout
      text={`REVIEWボタンを押して\nさっそくレビューを開始しよう！`}
      icon={AiOutlineThunderbolt}
    >
      <Container py={9} maxW="container.sm">
        <Text size="xs" color="gray.600">
          {owner}/{repo}
        </Text>
        <Heading size="md">{pullRequest.title}</Heading>
        <Reviewee pullRequest={pullRequest} />
        <TimelineItem my={3} px={8} py={7} boxShadow="base" comment={pullRequest.comment} />
        <ReviewButton />
      </Container>
    </Layout>
  );
};

export default DetailPage;
