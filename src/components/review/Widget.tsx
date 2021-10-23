/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useCallback } from 'react';

const Widget = ({ changeKey, comments, draft, onDraftChange, onSubmit }: any) => {
  const renderComment = (comment: any) => (
    <li key={comment.id}>
      <Text>{comment.author}</Text>
      <Avatar name={comment.author} src="avatar.png" />
      <Text>{comment.content}</Text>
    </li>
  );
  const input = useCallback(
    (e) => onDraftChange(changeKey, e.target.value),
    [onDraftChange, changeKey]
  );
  const submit = useCallback(() => onSubmit(changeKey), [onSubmit, changeKey]);

  return (
    <Box>
      <ol>{comments.map(renderComment)}</ol>
      <Textarea />
      <Button onClick={submit}>{'Submit Comment'}</Button>
    </Box>
  );
};

export default Widget;
