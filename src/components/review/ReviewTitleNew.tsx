import { Avatar, Text, Box } from '@chakra-ui/react';
import React from 'react';

// import { ReviewPullRequestType } from '@/types/PullRequestType';

type Props = {
  ownerName: string;
  repoName: string;
  reviewTitle: string;
  userName: string | undefined;
  avatarUrl: string | undefined;
};

const ReviewTitleNew = ({ ownerName, repoName, reviewTitle, userName, avatarUrl }: Props) => {
  return (
    <Box width={700} align="start">
      <Text color="gray" fontSize="xs">
        {`${ownerName}/${repoName}`}
      </Text>
      <Text color="black" fontSize="md">
        {reviewTitle}
      </Text>
      <Text color="black" fontSize="xs">
        <Avatar name={userName} src={avatarUrl} size="2xs" />
        {userName}
      </Text>
    </Box>
  );
};

export default ReviewTitleNew;
