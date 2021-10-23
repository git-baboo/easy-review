import { Box, Heading, StackDivider, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { useApi } from '@/hooks/useApi';
import { useCurrentUser } from '@/hooks/useCurrentUser';

type Pull = {
  pullNumber: number;
  ownerName: string;
  repoName: string;
  title: string;
};

const PullRequestList = () => {
  const [pulls, setPulls] = useState<Pull[]>([]);
  const history = useHistory();
  const { octokit } = useApi();
  const { username } = useCurrentUser();

  // FIXME: データを配列として保持できない
  useEffect(() => {
    let isMounted = true;
    if (username) {
      console.log('hello');
      octokit
        .request('GET /search/issues', {
          q: `is:pr+review-requested:${username}+state:open`,
        })
        .then((response) => {
          const items = response.data.items;
          items.map((item) => {
            const pullRequest: Pull = {
              pullNumber: 0,
              ownerName: '',
              repoName: '',
              title: '',
            };
            pullRequest.pullNumber = item.number;
            pullRequest.title = item.title;
            octokit.request(`GET ${item.repository_url}`).then((response) => {
              pullRequest.ownerName = response.data.organization.login;
              pullRequest.repoName = response.data.name;
              if (isMounted) {
                setPulls([...pulls, pullRequest]);
              }
            });
          });
        });
    }

    return () => {
      isMounted = false;
    };
  }, [username]);

  const handleClick = (pullRequest: Pull) => {
    history.push(`/${pullRequest.ownerName}/${pullRequest.repoName}/${pullRequest.pullNumber}`);
  };

  return (
    <VStack align="stretch" my={6} spacing={6} divider={<StackDivider />}>
      {/* TODO: API から取得したデータに置き換える */}
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
