import { Box, Heading } from '@chakra-ui/layout';

/* eslint-disable @typescript-eslint/no-explicit-any */
const reactDiffView = require('react-diff-view');
const Diff = reactDiffView.Diff;
const Hunk = reactDiffView.Hunk;
const Decoration = reactDiffView.Decoration;

type Props = {
  oldPath: string;
  newPath: string;
  type: string;
  hunks: any;
};

const DiffFile = ({ oldPath, newPath, type, hunks }: Props) => {
  const headerPath = oldPath === newPath ? oldPath : `${oldPath} → ${newPath}`;

  return (
    <Box w="full" boxShadow="base" align="start">
      <Heading p={3} size="xs" bgColor="gray.200">
        {headerPath}
      </Heading>
      <Diff viewType="unified" gutterType="anchor" diffType={type} hunks={hunks}>
        {(hunks: any) =>
          hunks.map((hunk: any) => [
            <Decoration key={'deco-' + hunk.content}>
              <div className="hunk-header">{hunk.content}</div>
            </Decoration>,
            <Hunk key={hunk.content} hunk={hunk} />,
          ])
        }
      </Diff>
    </Box>
  );
};

export default DiffFile;
