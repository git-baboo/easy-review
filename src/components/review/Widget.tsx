/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, List, ListItem, Spacer, Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import React, { useCallback } from 'react';

type Props = {
  id: string;
  author: string;
  avatarUrl: string;
  body: string;
};

const Widget = ({ changeKey, comments, draft, onDraftChange, onSubmit }: any) => {
  const renderComment = ({ id, author, avatarUrl, body }: Props) => (
    <ListItem key={id} m={2} p={4} border="1px" borderRadius="md" borderColor="gray.300">
      <Flex alignItems="center">
        <Avatar size="sm" name={author} src={avatarUrl} />
        <Text ml={2} fontSize="md">
          {author}
        </Text>
      </Flex>
      <Text ml={10}>{body}</Text>
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
