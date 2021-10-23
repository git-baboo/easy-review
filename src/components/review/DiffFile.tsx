/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Heading } from '@chakra-ui/layout';
import { Dispatch, SetStateAction, useMemo } from 'react';

import '@/style/difffile.css';
import useWidgets from '@/components/review/useWidgets';
import { Comment } from '@/types/CommentType';

const reactDiffView = require('react-diff-view');
const Diff = reactDiffView.Diff;
const Hunk = reactDiffView.Hunk;
const Decoration = reactDiffView.Decoration;
const getChangeKey = reactDiffView.getChangeKey;

type Props = {
  oldPath: string;
  newPath: string;
  type: string;
  hunks: any;
  reviewer: any;
  setComments: Dispatch<SetStateAction<Comment[]>>;
};

const DiffFile = ({ oldPath, newPath, type, hunks, reviewer, setComments }: Props) => {
  const headerPath = oldPath === newPath ? oldPath : `${oldPath} → ${newPath}`;
  const [widgets, { addWidget }]: any = useWidgets(reviewer);

  const renderGutter = ({ side, renderDefault, wrapInAnchor, inHoverState }: any) =>
    inHoverState && side === 'new' ? (
      <>
        {wrapInAnchor(renderDefault())}
        <PlusSquareIcon color="white" bgColor="blue.500" />
      </>
    ) : (
      renderDefault()
    );

  const gutterEvents = useMemo(() => {
    return {
      onClick({ change }: any) {
        const key = getChangeKey(change);
        addWidget(key);

        const dummy: Comment[] = [{ path: '', line: '', body: '' }];
        setComments(dummy);
      },
    };
  }, [addWidget]);

  return (
    <Box w="full" boxShadow="base" align="start">
      <Heading p={3} size="xs" bgColor="gray.200">
        {headerPath}
      </Heading>
      <Diff
        viewType="unified"
        diffType={type}
        hunks={hunks}
        widgets={widgets}
        renderGutter={renderGutter}
      >
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
            <Hunk key={hunk.content} hunk={hunk} gutterEvents={gutterEvents} />,
          ])
        }
      </Diff>
    </Box>
  );
};

export default DiffFile;
