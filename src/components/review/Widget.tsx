import { Box, Button, Flex, List, Spacer, Textarea } from "@chakra-ui/react";
import React, { useCallback } from "react";

import CommentList from "@/components/review/CommentList";
import { PreviewCommentType } from "@/types/PreviewCommentType";

type Props = {
  fileId: string;
  changeKey: string;
  author: string;
  avatarUrl: string;
  isWriting: boolean;
  draft: PreviewCommentType;
  comments: PreviewCommentType[];
  onDraftChange: (fileId: any, changeKey: any, body: any) => void;
  onSubmit: (fileId: any, changeKey: any) => void;
};

const Widget = ({
  fileId,
  changeKey,
  author,
  avatarUrl,
  isWriting,
  draft,
  comments,
  onDraftChange,
  onSubmit,
}: Props) => {
  const input = useCallback(
    (e) => {
      onDraftChange(fileId, changeKey, e.target.value);
    },
    [onDraftChange, changeKey]
  );

  const submit = useCallback(() => {
    onSubmit(fileId, changeKey);
  }, [onSubmit, changeKey]);

  return (
    <Box m={4}>
      {comments && (
        <List>
          {comments.map((comment, index) => {
            return (
              <CommentList
                key={index}
                author={author}
                avatarUrl={avatarUrl}
                body={comment.body}
              />
            );
          })}
        </List>
      )}
      {isWriting && (
        <>
          <Textarea h={150} value={draft.body} onChange={input} />
          <Flex>
            <Spacer />
            <Button m={2} colorScheme="teal" onClick={submit}>
              コメントを追加
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Widget;
