import { Container, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { useParams } from 'react-router-dom';

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
    <Container py={9} maxW="container.sm">
      <Text fontSize="xs" color="gray.600">
        {owner}/{repo}
      </Text>
      <Heading size="md">{pullRequest.title}</Heading>
      <Reviewee pullRequest={pullRequest} />
      <TimelineItem my={3} comment={pullRequest.comment} />
      <ReviewButton />
    </Container>
  );
};

export default DetailPage;
