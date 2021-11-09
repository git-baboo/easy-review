import { Avatar, Text } from '@chakra-ui/react';
import React from 'react';

// import { ReviewPullRequestType } from '@/types/PullRequestType';

type Props = {
  ownerName: string;
  repoName: string;
  reviewTitle: string;
  userName: string;
  avatarUrl: string;
};

const ReviewTitleNew = ({ ownerName, repoName, reviewTitle, userName, avatarUrl }: Props) => {
  return (
    <>
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
    </>
  );
};

export default ReviewTitleNew;
