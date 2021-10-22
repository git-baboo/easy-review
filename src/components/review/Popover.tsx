import {
  Box,
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

const ButtonTextList = ['❓質問', '✨素敵', '🤔改善'];

const ReviewPopover = () => (
  // TODO: Boxは作業用に見やすくするための出力場所移動用 後に削除
  <Box p={300}>
    <Popover>
      <PopoverTrigger>
        <Button>＋</Button>
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
  </Box>
);

export default ReviewPopover;
