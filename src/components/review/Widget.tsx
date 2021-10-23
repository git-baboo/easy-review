/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, List, ListItem, Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import React, { useCallback, useEffect } from 'react';

type Props = {
  id: string;
  author: string;
  content: string;
  time: string;
  avatarUrl: string;
};

const Widget = ({ changeKey, comments, draft, onDraftChange, onSubmit }: any) => {
  const renderComment = ({ id, author, content, time, avatarUrl }: Props) => (
    <ListItem key={id} m={2} p={4} border="1px" borderRadius="md" borderColor="gray.300">
      <Flex>
        <Avatar size="2md" name={author} src={avatarUrl} />
        <Text ml={2} fontSize="md">
          {author}
        </Text>
      </Flex>
      <Text ml={8}>{content}</Text>
    </ListItem>
  );

  const input = useCallback(
    (e) => onDraftChange(changeKey, e.target.value),
    [onDraftChange, changeKey]
  );

  const submit = useCallback(() => onSubmit(changeKey), [onSubmit, changeKey]);

  return (
    <Box m={4}>
      <List>{comments.map(renderComment)}</List>
      <Textarea value={draft} onChange={input} />
      <Button m={2} colorScheme="teal" onClick={submit}>
        コメントを追加
      </Button>
    </Box>
  );
};

export default Widget;
