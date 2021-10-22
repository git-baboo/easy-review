/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';

import DiffFile from '@/components/review/DiffFile';
import { dummyDiff } from '@/data/dummyDiff';

const reactDiffView = require('react-diff-view');
const parseDiff = reactDiffView.parseDiff;

const DiffFiles = ({ ...props }: BoxProps) => {
  const files = parseDiff(dummyDiff);

  return (
    <Box {...props}>
      {files.map(({ oldPath, newPath, oldRevision, newRevision, type, hunks }: any) => (
        <DiffFile
          key={oldRevision + '-' + newRevision}
          oldPath={oldPath}
          newPath={newPath}
          type={type}
          hunks={hunks}
        />
      ))}
    </Box>
  );
};

export default DiffFiles;
