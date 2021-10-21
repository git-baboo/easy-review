import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Container, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { useParams } from 'react-router-dom';

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
      <TimelineItem my={3} comment={pullRequest.comment} />
      <Button size="lg" w="full" bgColor="teal.500" color="white">
        REVIEW
      </Button>
    </Container>
  );
};

export default DetailPage;
