import { Image } from '@chakra-ui/image';
import { Heading } from '@chakra-ui/layout';
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
    <>
      <Text>
        {pullRequest.repoOwner}/{pullRequest.repoName}
      </Text>
      <Heading>{pullRequest.title}</Heading>
      <Image src={pullRequest.avatarUrl} />
      <Text>{pullRequest.userName}</Text>
      <TimelineItem comment={pullRequest.comment} />
    </>
  );
};

export default DetailPage;
