import { Box, VStack, Heading, Text, StackDivider } from '@chakra-ui/react';
import React from 'react';

import { dummyPullRequests } from '@/data/dummyPullRequests';

const PullRequestList = () => (
  <VStack align="stretch" my={6} spacing={6} divider={<StackDivider />}>
    {/* TODO: API から取得したデータに置き換える */}
    {dummyPullRequests.map((pullRequest, index) => (
      <Box key={index} mx={8}>
        <Heading size="md">{pullRequest.title}</Heading>
        <Text size="xs">
          {pullRequest.ownerName}/{pullRequest.repoName}
        </Text>
      </Box>
    ))}
  </VStack>
);

export default PullRequestList;
