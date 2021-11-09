import { Avatar, Text, Box } from '@chakra-ui/react';
import React from 'react';

import { ReviewPullRequestType, TopPullRequestType } from '@/types/PullRequestType';

type Props = {
  ownerrepoName: Pick<TopPullRequestType, 'ownerName' | 'repoName'>;
  pull: ReviewPullRequestType;
};

const ReviewTitleNew = ({ ownerrepoName, pull }: Props) => {
  return (
    <Box width={700} align="start">
      <Text color="gray" fontSize="xs">
        {`${ownerrepoName.ownerName}/${ownerrepoName.repoName}`}
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

export default ReviewTitleNew;
