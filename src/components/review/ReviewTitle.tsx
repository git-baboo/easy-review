import { Text } from '@chakra-ui/layout';
import { Avatar, Box } from '@chakra-ui/react';
import React from 'react';

import { ReviewPullRequestType } from '@/types/PullRequestType';

type Props = {
  ownerName: string;
  repoName: string;
  pull: ReviewPullRequestType;
};

const ReviewTitle = ({ ownerName, repoName, pull }: Props) => {
  return (
    <Box width={700} align="start">
      <Text color="gray" fontSize="xs">
        {`${ownerName}/${repoName}`}
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
