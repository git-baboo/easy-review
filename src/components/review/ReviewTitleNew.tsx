import { Text } from '@chakra-ui/layout';
import React from 'react';

// import { ReviewPullRequestType } from '@/types/PullRequestType';

type Props = {
  owerName: string;
  repoName: string;
  reviewTitle: string;
  userName: string;
  avaterUrl: string;
};

const ReviewTitleNew = ({ owerName, repoName, reviewTitle, userName, avaterUrl }: Props) => {
  return (
    <>
      <Text color="gray" fontSize="xs">
        {'aaa'}
      </Text>
      <Text color="black" fontSize="md">
        {'aasd'}
      </Text>
      <Text color="black" fontSize="md">
        {'aasd'}
      </Text>
    </>
  );
};

export default ReviewTitleNew;
