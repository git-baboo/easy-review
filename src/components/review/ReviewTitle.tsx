import { Text } from '@chakra-ui/layout';
import { Avatar, Box } from '@chakra-ui/react';
import React from 'react';

import { ReviewPullRequestType } from '@/types/PullRequestType';

type Props = {
  owner: string;
  repo: string;
  pull: ReviewPullRequestType;
};

const ReviewTitle = ({ owner, repo, pull }: Props) => {
  return (
    <Box width={700} align="start">
      <Text color="gray" fontSize="xs">
        {`${owner}/${repo}`}
      </Text>
      <Text color="black" fontSize="md">
        {pull.title}
      </Text>
      <Text color="black" fontSize="xs">
        <Avatar name={pull.userName} src={pull.avatarUrl} size="2xs" />
        {pull.userName}
      </Text>
    </Box>
  );
};

export default ReviewTitle;
