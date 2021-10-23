import { Box, Heading, StackDivider, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { useApi } from '@/hooks/useApi';

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

  useEffect(() => {
    let isMounted = true;
    octokit
      .request('GET /search/issues', {
        // TODO: ユーザ名をログイン中のユーザのものに変更する
        q: 'is:pr+user-review-requested:watagit+state:open',
      })
      .then((response) => {
        const items = response.data.items;
        const newPulls: Pull[] = [];
        items.map((item) => {
          octokit.request(`GET ${item.repository_url}`).then((response) => {
            const pullRequest: Pull = {
              pullNumber: item.number,
              ownerName: response.data.organization.login,
              repoName: response.data.name,
              title: item.title,
            };
            newPulls.push(pullRequest);
          });
          if (isMounted) {
            setPulls(newPulls);
          }
        });
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
