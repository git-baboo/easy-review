import { Box, VStack, Heading, Text, StackDivider } from '@chakra-ui/react';
import React from 'react';

import { dummyPullRequests } from '@/data/dummyPullRequests';

type PullRequest = {
  ownerName: string;
  repoName: string;
  title: string;
};

const PullRequestList = () => {
  const handleClick = (pullRequest: PullRequest) => {
    console.log(pullRequest);
  };

  return (
    <VStack align="stretch" my={6} spacing={6} divider={<StackDivider />}>
      {/* TODO: API から取得したデータに置き換える */}
      {dummyPullRequests.map((pullRequest, index) => (
        <Box key={index} mx={8} onClick={() => handleClick(pullRequest)}>
          <Heading size="md">{pullRequest.title}</Heading>
          <Text size="xs" color="gray.600" S>
            {pullRequest.ownerName}/{pullRequest.repoName}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default PullRequestList;
