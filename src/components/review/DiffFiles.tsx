/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';

import { dummyDiff } from '@/data/dummyDiff';

const reactDiffView = require('react-diff-view');
const parseDiff = reactDiffView.parseDiff;
const Diff = reactDiffView.Diff;
const Hunk = reactDiffView.Hunk;
const Decoration = reactDiffView.Decoration;

const DiffFiles = ({ ...props }: BoxProps) => {
  const files = parseDiff(dummyDiff);

  return (
    <Box {...props}>
      {files.map(({ oldPath, newPath, oldRevision, newRevision, type, hunks }: any) => (
        <div key={oldRevision + '-' + newRevision} className="file-diff">
          <header className="diff-header">
            {oldPath === newPath ? oldPath : `${oldPath} -> ${newPath}`}
          </header>
          <Diff viewType="unified" diffType={type} hunks={hunks}>
            {(hunks: any) =>
              hunks.map((hunk: any) => [
                <Decoration key={'deco-' + hunk.content}>
                  <div className="hunk-header">{hunk.content}</div>
                </Decoration>,
                <Hunk key={hunk.content} hunk={hunk} />,
              ])
            }
          </Diff>
        </div>
      ))}
    </Box>
  );
};

export default DiffFiles;
