import { VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

import Template from '@/components/Template';

const templates = [
  {
    title: '❓ 質問',
    description: 'わからないコードや疑問に思った部分があれば積極的に質問してみましょう！',
  },
  {
    title: '✨ 素敵',
    description: `命名や設計がキレイなどの良いコードを見つけたときはポジティブな意見をバシバシ送っちゃいましょう！\nプルリクエストの作成者は嬉しいこと間違いなしです`,
  },
  {
    title: '🤔 改善',
    description: `タイポや可読性の低いコードを見つけた場合は早急に報告しましょう！\nあなたの報告がプロダクトを改善します！`,
  },
];

const TemplateList = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [leftCoordinate, setLeftCoordinate] = useState<number>(1000);
  const constant = 170;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = function () {
    //スクロール量の測定
    const tmp =
      document.documentElement.scrollTop || // IE、Firefox、Opera
      document.body.scrollTop; // Chrome、Safari
    setScroll(tmp);

    // 絶対座標の取得
    const targetElement = document.getElementById('target');
    if (targetElement) {
      const targetElementCoordinate = targetElement.getBoundingClientRect();
      setLeftCoordinate(targetElementCoordinate.left);
    }
  };

  return scroll < constant ? (
    <VStack id="target" h={420} p={5} spacing={5} position="sticky" shadow="base">
      {templates.map((template) => (
        <Template key={template.title} title={template.title} description={template.description} />
      ))}
    </VStack>
  ) : (
    // XXX: leftCoordinate で取得した座標と画面上の座標との差を埋めるために-50 している。何が起因しているかはよくわかってない
    <VStack
      id="target"
      top={180 - constant + 5}
      p={5}
      left={leftCoordinate - 50}
      spacing={5}
      position="fixed"
      shadow="base"
    >
      {templates.map((template) => (
        <Template key={template.title} title={template.title} description={template.description} />
      ))}
    </VStack>
  );
};

export default TemplateList;
