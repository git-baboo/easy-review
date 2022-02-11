import { Button, Flex, Spacer, Textarea, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, useCallback } from "react";

import CommentListItem from "@/components/review/CommentListItem";
import { PreviewCommentType } from "@/types/PreviewCommentType";

type Props = {
  fileId: string;
  changeKey: string;
  author: string;
  avatarUrl: string;
  isWriting: boolean;
  draft: PreviewCommentType;
  comments: PreviewCommentType[];
  onDraftChange: (fileId: string, changeKey: string, body: string) => void;
  onSubmit: (fileId: string, changeKey: string) => void;
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
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onDraftChange(fileId, changeKey, e.target.value);
    },
    [onDraftChange, changeKey]
  );

  const submit = useCallback(() => {
    onSubmit(fileId, changeKey);
  }, [onSubmit, changeKey]);

  return (
    <Stack direction="column" m={4}>
      {comments && (
        <>
          {comments.map((comment, index) => {
            return (
              <CommentListItem
                key={index}
                author={author}
                avatarUrl={avatarUrl}
                body={comment.body}
              />
            );
          })}
        </>
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
    </Stack>
  );
};

export default Widget;
