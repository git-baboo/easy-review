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
    <Box w="full" overflowX="scroll" boxShadow="base" align="start">
      <Heading p={3} size="xs" bgColor="gray.200">
        {headerPath}
      </Heading>
      <Diff viewType="unified" gutterType="anchor" diffType={type} hunks={hunks}>
        {(hunks: any) =>
          hunks.map((hunk: any) => [
            <Decoration key={'deco-' + hunk.content}>
              <Box bg="blue.300" p={2}>
                {'　'}
              </Box>
              <Box bg="blue.100" p={2}>
                {hunk.content}
              </Box>
            </Decoration>,
            <Hunk key={hunk.content} hunk={hunk} />,
          ])
        }
      </Diff>
    </Box>
  );
};

export default DiffFile;
