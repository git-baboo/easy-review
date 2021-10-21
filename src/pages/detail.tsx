import { Image } from '@chakra-ui/image';
import { Container, Flex, Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

import TimelineItem from '@/components/detail/TimelineItem';
import { pullRequest } from '@/data/dummyPullRequest';

const DetailPage = () => {
  // TODO: eslint の例外設定を削除
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams<{ id: string }>();

  return (
    <Container maxW="container.sm">
      <Text fontSize="xs" color="gray.600">
        {pullRequest.repoOwner}/{pullRequest.repoName}
      </Text>
      <Heading size="md">{pullRequest.title}</Heading>
      <Flex>
        <Image
          borderRadius="full"
          boxSize="16px"
          src={pullRequest.avatarUrl}
          alt={pullRequest.userName}
        />
        <Text fontSize="xs" lineHeight={4}>
          {pullRequest.userName}
        </Text>
      </Flex>
      <TimelineItem comment={pullRequest.comment} />
    </Container>
  );
};

export default DetailPage;
