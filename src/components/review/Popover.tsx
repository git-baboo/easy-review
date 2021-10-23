import {
  VStack,
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const ButtonTextList = ['❓ 質問', '✨ 素敵', '🤔 改善'];

type Props = {
  children: ReactNode;
};

const ReviewPopover = ({ children }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        {/* <Button size="xs" colorScheme="blue">
          <BiCommentAdd color="white" size={15} />
        </Button> */}
        {children}
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
  );
};

export default ReviewPopover;
