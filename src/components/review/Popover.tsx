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

const ButtonTextList = [
  {
    label: '❓ 質問',
    initText: `<!--
できるだけ具体的に質問してみましょう
例）〜の処理の内容がわからないので教えてください！
-->
`,
  },
  {
    label: '✨ 素敵',
    initText: `<!--
良いと感じたコードを見つけたら気軽にコメントしましょう！
例）命名がとてもキレイです 💯
例）この部分がとても読みやすいです ✨
-->
`,
  },
  {
    label: '🤔 改善',
    initText: ` <!--
タイポやバグなどを見つけたら早急に報告しましょう！
例）タイポしてるので修正お願いします！ reveiw > review
例）ローカルだと以下のようにレイアウトが崩れてしまっているので確認をお願いします！
-->
`,
  },
];

type Props = {
  handleClick: (initText: string) => void;
  children: ReactNode;
};

const ReviewPopover = ({ handleClick, children }: Props) => {
  return (
    <Popover gutter={0}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>テンプレートを選んでみよう！</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <VStack>
              {ButtonTextList.map((ButtonText, index) => (
                <Button
                  key={index}
                  w="100%"
                  colorScheme="teal"
                  onClick={() => handleClick(ButtonText.initText)}
                >
                  {ButtonText.label}
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
