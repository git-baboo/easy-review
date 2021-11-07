import { Box, Heading, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';

import { TopPullRequestType } from '@/types/PullRequestType';

type Props = {
  pulls: TopPullRequestType[];
};

const PullRequestList = ({ pulls }: Props) => {
  const history = useHistory();

  const handleClick = (pullRequest: TopPullRequestType) => {
    history.push(`/${pullRequest.ownerName}/${pullRequest.repoName}/${pullRequest.pullNumber}`);
  };

  return (
    <VStack align="stretch" my={6} spacing={6} divider={<StackDivider />}>
      {pulls.map((pullRequest, index) => (
        <Box key={index} mx={8}>
          <Box
            display="inline-block"
            _hover={{ cursor: 'pointer' }}
            onClick={() => handleClick(pullRequest)}
          >
            <Heading size="md">{pullRequest.title}</Heading>
            <Text fontSize="xs" color="gray.600">
              {pullRequest.ownerName}/{pullRequest.repoName}
            </Text>
          </Box>
        </Box>
      ))}
    </VStack>
  );
};

export default PullRequestList;
