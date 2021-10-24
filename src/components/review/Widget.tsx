/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@chakra-ui/button';
import { Box, List, Spacer } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import React, { useCallback } from 'react';

import CommentList from '@/components/review/CommentList';

const Widget = ({ changeKey, comments, draft, onDraftChange, onSubmit }: any) => {
  const input = useCallback(
    (e) => onDraftChange(changeKey, e.target.value),
    [onDraftChange, changeKey]
  );

  const submit = useCallback(() => onSubmit(changeKey), [onSubmit, changeKey]);

  return (
    <Box m={4}>
      <List>{comments.map(CommentList)}</List>
      <Textarea h={150} value={draft} onChange={input} />
      <Flex>
        <Spacer />
        <Button m={2} colorScheme="teal" onClick={submit}>
          コメントを追加
        </Button>
      </Flex>
    </Box>
  );
};

export default Widget;
