/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@chakra-ui/button';
import { Box, List, Spacer } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import CommentList from '@/components/review/CommentList';
import { useApi } from '@/hooks/useApi';
import { currentUserState } from '@/store/currentUserState';
import { CurrentUserType } from '@/types/CurrentUserType';

type Path = {
  owner: string;
  repo: string;
  pullNumber: string;
};

const Widget = ({ changeKey, comments, draft, onDraftChange, onSubmit }: any) => {
  const [text, setText] = useState<string>('');
  const { owner, repo, pullNumber } = useParams<Path>();
  const { octokit } = useApi();
  const setCurrentUser = useSetRecoilState<CurrentUserType>(currentUserState);

  const input = useCallback(
    (e) => {
      onDraftChange(changeKey, e.target.value);
      setText(e.target.value);
    },
    [onDraftChange, changeKey]
  );

  const submit = useCallback(() => {
    onSubmit(changeKey);
  }, [onSubmit, changeKey]);

  const handleSubmit = () => {
    console.log(text);

    octokit
      .request('POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews', {
        headers: {
          accept: 'application/vnd.github.v3+json',
        },
        owner: owner,
        repo: repo,
        pull_number: Number(pullNumber),
        body: text,
      })
      .then((response) => {
        console.log(response);
        setCurrentUser((prevState) => ({
          ...prevState,
          reviewId: response.data.id,
        }));
      });
  };

  return (
    <Box m={4}>
      <List>{comments.map(CommentList)}</List>
      <Textarea h={150} value={draft} onChange={input} />
      <Flex>
        <Spacer />
        <Button
          m={2}
          colorScheme="teal"
          onClick={() => {
            submit();
            handleSubmit();
          }}
        >
          コメントを追加
        </Button>
      </Flex>
    </Box>
  );
};

export default Widget;
