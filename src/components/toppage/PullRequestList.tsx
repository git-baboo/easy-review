import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { dummyPullRequests } from '@/data/dummyPullRequests';

const PullRequestList = () => {
  return (
    <>
      <VStack align="stretch" mt={6} mb={6} spacing={6}>
        {/* TODO: API から取得したデータに置き換える */}
        {dummyPullRequests.map((pullRequest) => {
          return (
            <Box key={pullRequest.title}>
              <Heading size="md">{pullRequest.title}</Heading>
              <Text size="xs">
                {pullRequest.ownerName}/{pullRequest.repoName}
              </Text>
            </Box>
          );
        })}
      </VStack>
    </>
  );
};

export default PullRequestList;
