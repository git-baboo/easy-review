/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@chakra-ui/button';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Heading, VStack } from '@chakra-ui/layout';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/popover';
import { Portal } from '@chakra-ui/portal';
import { useMemo } from 'react';

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
  const ButtonTextList = ['❓ 質問', '✨ 素敵', '🤔 改善'];

  const renderGutter = ({ side, renderDefault, inHoverState }: any) =>
    inHoverState && side === 'new' ? (
      <Popover>
        <PopoverTrigger>
          <PlusSquareIcon color="white" bgColor="blue.500" />
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>テンプレートを選んでみよう！</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <VStack>
                {ButtonTextList.map((ButtonText, index) => (
                  <Button key={index} w="100%" colorScheme="teal">
                    {ButtonText}
                  </Button>
                ))}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    ) : (
      renderDefault()
    );

  const gutterEvents = useMemo(() => {
    return {
      onClick({ change }: any) {
        const key = getChangeKey(change);
        addWidget(key, postPath);
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
