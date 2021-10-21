import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

import { dummyPullRequests } from '@/data/dummyPullRequests';

const PullRequestList = () => {
  return (
    <>
      {/* TODO: API から取得したデータに置き換える */}
      {dummyPullRequests.map((pullRequest) => {
        return (
          <VStack key={pullRequest.title} mt={6} mb={6} align="stretch">
            <Box fontSize={20} fontWeight="bold">
              {pullRequest.title}
            </Box>
            <Box fontSize="xs">
              {pullRequest.ownerName}/{pullRequest.repoName}
            </Box>
          </VStack>
        );
      })}
    </>
  );
};

export default PullRequestList;
