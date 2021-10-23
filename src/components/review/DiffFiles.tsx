/* eslint-disable @typescript-eslint/no-explicit-any */
import { StackProps, VStack } from '@chakra-ui/layout';
import React, { Dispatch, SetStateAction } from 'react';

import DiffFile from '@/components/review/DiffFile';
import { Comment } from '@/types/CommentType';

const reactDiffView = require('react-diff-view');
const parseDiff = reactDiffView.parseDiff;

type CustomProps = {
  diff: string;
  reviewer: any;
  setComments: Dispatch<SetStateAction<Comment[]>>;
};

type Props = StackProps & CustomProps;

const DiffFiles = ({ diff, reviewer, setComments, ...props }: Props) => {
  const files = parseDiff(diff);

  return (
    <VStack {...props}>
      {files.map(({ oldPath, newPath, oldRevision, newRevision, type, hunks }: any) => (
        <DiffFile
          key={oldRevision + '-' + newRevision}
          oldPath={oldPath}
          newPath={newPath}
          type={type}
          hunks={hunks}
          reviewer={reviewer}
          setComments={setComments}
        />
      ))}
    </VStack>
  );
};

export default DiffFiles;
