import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

import { dummyPullRequests } from '@/data/dummyPullRequests';

const PullRequestList = () => (
  <>
    <VStack align="stretch" mt={6} mb={6} space={6}>
      {/* TODO: API から取得したデータに置き換える */}
      {dummyPullRequests.map((pullRequest) => (
        <Box key={pullRequest.title}>
          <Box fontSize={20} fontWeight="bold">
            {pullRequest.title}
          </Box>
          <Box fontSize="xs">
            {pullRequest.ownerName}/{pullRequest.repoName}
          </Box>
        </Box>
      ))}
    </VStack>
  </>
);

export default PullRequestList;
