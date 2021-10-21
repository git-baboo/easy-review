import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import { dummyPullRequests } from '@/data/dummyPullRequests';

const DisplayTopPageItems = () => {
  return (
    <>
      {dummyPullRequests.map((pullRequest) => {
        return (
          <Box key={pullRequest.title} mt={6} mb={6}>
            <Text fontSize={20} fontWeight="bold">
              {pullRequest.title}
            </Text>
            <Text fontSize="xs">
              {pullRequest.ownerName}/{pullRequest.repoName}
            </Text>
          </Box>
        );
      })}
    </>
  );
};

export default DisplayTopPageItems;
