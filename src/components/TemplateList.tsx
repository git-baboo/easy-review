import { VStack } from '@chakra-ui/react';
import React from 'react';

import Template from '@/components/Template';

const templates = [
  {
    title: '❓質問',
    tmp: 'わからないコードや疑問に思った部分があれば積極的に質問してみましょう！',
  },
  {
    title: '✨素敵',
    tmp: '命名や設計がキレイなどの良いコードを見つけたときはポジティブな意見をバシバシ送っちゃいましょう！プルリクエストの作成者は嬉しいこと間違いなしです',
  },
  {
    title: '🤔改善',
    tmp: 'タイポや可読性の低いコードを見つけた場合は早急に報告しましょう！あなたの報告がプロダクトを改善します！',
  },
];

const TemplateList = () => {
  return (
    <>
      <VStack spacing={5}>
        <Template title={templates[0].title} tmp={templates[0].tmp} />
        <Template title={templates[1].title} tmp={templates[1].tmp} />
        <Template title={templates[2].title} tmp={templates[2].tmp} />
      </VStack>
    </>
  );
};

export default TemplateList;
