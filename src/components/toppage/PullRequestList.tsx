import { Box, VStack, Heading, Text, StackDivider } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';

// TODO: ダミーデータのとこで作成した型を再利用しているため、後に変更が必要
import { dummyPullRequests, PullRequest } from '@/data/dummyPullRequests';

const PullRequestList = () => {
  const history = useHistory();
  const handleClick = (pullRequest: PullRequest) => {
    history.push(
      '/' + pullRequest.ownerName + '/' + pullRequest.repoName + '/' + pullRequest.pullNumber
    );
  };

  return (
    <VStack align="stretch" my={6} spacing={6} divider={<StackDivider />}>
      {/* TODO: API から取得したデータに置き換える */}
      {dummyPullRequests.map((pullRequest, index) => (
        <Box key={index} mx={8}>
          <Box display="inline-block" onClick={() => handleClick(pullRequest)}>
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
