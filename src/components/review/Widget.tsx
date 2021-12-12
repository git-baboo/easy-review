import { Box, Button, Flex, List, Spacer, Textarea } from "@chakra-ui/react";
import React, { useCallback } from "react";

import CommentList from "@/components/review/CommentList";
import { PreviewComment } from "@/types/CommentType";

type Props = {
  changeKey: string;
  comments: PreviewComment[];
  draft: PreviewComment;
  onDraftChange: (key: any, body: any) => void;
  onSubmit: (key: any, body: any) => void;
};

const Widget = ({
  changeKey,
  comments,
  draft,
  onDraftChange,
  onSubmit,
}: Props) => {
  const input = useCallback(
    (e) => {
      onDraftChange(changeKey, e.target.value);
    },
    [onDraftChange, changeKey]
  );

  const submit = useCallback(() => {
    onSubmit(changeKey);
  }, [onSubmit, changeKey]);

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
