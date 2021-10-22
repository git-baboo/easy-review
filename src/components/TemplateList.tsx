import { VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import Template from '@/components/Template';

const templates = [
  {
    title: '❓質問',
    description: 'わからないコードや疑問に思った部分があれば積極的に質問してみましょう！',
  },
  {
    title: '✨素敵',
    description: `命名や設計がキレイなどの良いコードを見つけたときはポジティブな意見をバシバシ送っちゃいましょう！\nプルリクエストの作成者は嬉しいこと間違いなしです`,
  },
  {
    title: '🤔改善',
    description: `タイポや可読性の低いコードを見つけた場合は早急に報告しましょう！\nあなたの報告がプロダクトを改善します！`,
  },
];

const TemplateList = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [leftCoordinate, setLeftCoordinate] = useState<number>(0);

  window.onscroll = function () {
    //スクロールの検知の部分
    const tmp =
      document.documentElement.scrollTop || // IE、Firefox、Opera
      document.body.scrollTop; // Chrome、Safari
    setScroll(tmp);

    const targetElement = document.getElementById('target');
    if (targetElement) {
      const targetElementCoordinate = targetElement.getBoundingClientRect();
      console.log(targetElementCoordinate);
      setLeftCoordinate(targetElementCoordinate.left);
    }
  };

  console.log(leftCoordinate);
  return scroll < 180 ? (
    <VStack id="target" spacing={5} position="sticky">
      {templates.map((template) => (
        <Template key={template.title} title={template.title} description={template.description} />
      ))}
    </VStack>
  ) : (
    <VStack id="target" top={0} left={leftCoordinate - 50} spacing={5} position="fixed">
      {templates.map((template) => (
        <Template key={template.title} title={template.title} description={template.description} />
      ))}
    </VStack>
  );
};

export default TemplateList;
