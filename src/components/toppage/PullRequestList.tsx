import { Box, Heading, StackDivider, Text, VStack } from '@chakra-ui/react';
import { Octokit } from '@octokit/rest';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const octokit = new Octokit({
  auth: process.env.REACT_APP_TOKEN,
});

type Pull = {
  pullNumber: number;
  ownerName: string;
  repoName: string;
  title: string;
};

const PullRequestList = () => {
  const [pulls, setPulls] = useState<Pull[]>([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    octokit
      .request('GET /search/issues', {
        // TODO: ユーザ名をログイン中のユーザのものに変更する
        q: 'is:pr+user-review-requested:watagit+state:open',
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
          console.log(item.number);
          pullRequest.title = item.title;
          octokit.request(`GET ${item.repository_url}`).then((response) => {
            console.log(response.data.organization.login);
            pullRequest.ownerName = response.data.organization.login;
            pullRequest.repoName = response.data.name;
            if (isMounted) {
              setPulls([...pulls, pullRequest]);
            }
          });
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
    <>
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
    </>
  );
};

export default PullRequestList;
