/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Heading } from '@chakra-ui/layout';
import { useMemo, useState } from 'react';

import ReviewPopover from '@/components/review/Popover';

import '@/style/difffile.css';

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
  widgets: any;
  addWidget: any;
};

const DiffFile = ({ oldPath, newPath, type, hunks, widgets, addWidget }: Props) => {
  let headerPath = '';
  switch (type) {
    case 'delete':
      headerPath = oldPath;
      break;
    case 'insert':
      headerPath = newPath;
      break;
    case 'rename':
      headerPath = `${oldPath} → ${newPath}`;
      break;
    default:
      headerPath = newPath;
      break;
  }
  const postPath = type === 'delete' ? oldPath : newPath;
  const [tmpKey, setTmpKey] = useState<string>('');

  const renderGutter = ({ side, renderDefault, inHoverState }: any) =>
    inHoverState && side === 'new' ? (
      <ReviewPopover handleClick={handleClick}>
        <PlusSquareIcon boxSize={5} color="white" bgColor="blue.500" />
      </ReviewPopover>
    ) : (
      renderDefault()
    );

  const handleClick = (initText: string) => {
    const key = tmpKey;
    addWidget(key, postPath, initText);
    setTmpKey('');
  };

  const gutterEvents = useMemo(() => {
    return {
      onClick({ change }: any) {
        const key = getChangeKey(change);
        setTmpKey(key);
        // addWidget(key, postPath);
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
