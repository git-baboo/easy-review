/* eslint-disable @typescript-eslint/no-explicit-any */
import { StackProps, VStack } from '@chakra-ui/layout';
import React from 'react';

import DiffFile from '@/components/review/DiffFile';
import { dummyDiff } from '@/data/dummyDiff';

const reactDiffView = require('react-diff-view');
const parseDiff = reactDiffView.parseDiff;

const DiffFiles = ({ ...props }: StackProps) => {
  const files = parseDiff(dummyDiff);

  return (
    <VStack {...props}>
      {files.map(({ oldPath, newPath, oldRevision, newRevision, type, hunks }: any) => (
        <DiffFile
          key={oldRevision + '-' + newRevision}
          oldPath={oldPath}
          newPath={newPath}
          type={type}
          hunks={hunks}
        />
      ))}
    </VStack>
  );
};

export default DiffFiles;
