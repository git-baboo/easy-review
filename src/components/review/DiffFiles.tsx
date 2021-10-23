/* eslint-disable @typescript-eslint/no-explicit-any */
import { StackProps, VStack } from '@chakra-ui/layout';
import React from 'react';

import DiffFile from '@/components/review/DiffFile';

const reactDiffView = require('react-diff-view');
const parseDiff = reactDiffView.parseDiff;

type CustomProps = {
  diff: string;
};

type Props = StackProps & CustomProps;

const DiffFiles = ({ diff, ...props }: Props) => {
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
        />
      ))}
    </VStack>
  );
};

export default DiffFiles;
