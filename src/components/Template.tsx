import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Template = () => {
  return (
    <>
      <Heading color="black" size="sm">
        ❓質問
      </Heading>
      <Text color="black">
        わからないコードや疑問に思った部分があれば積極的に質問してみましょう！
      </Text>
      <Heading color="black" size="sm">
        ✨素敵
      </Heading>
      <Text color="black">
        命名や設計がキレイなどの良いコードを見つけたときはポジティブな意見をバシバシ送っちゃいましょう！
        プルリクエストの作成者は嬉しいこと間違いなしです
      </Text>
      <Heading color="black" size="sm">
        🤔指摘
      </Heading>
      <Text color="black">
        タイポや可読性の低いコードを見つけた場合は早急に報告しましょう！あなたの報告がプロダクトを改善します！
      </Text>
    </>
  );
};

export default Template;
