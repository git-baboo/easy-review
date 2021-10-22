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
  const [scrollTop, setScrollTop] = useState(0);

  window.onscroll = function () {
    const tmp =
      document.documentElement.scrollTop || // IE、Firefox、Opera
      document.body.scrollTop; // Chrome、Safari
    setScrollTop(tmp);
    console.log(scrollTop);
  };

  return (
    // {console.log(scrollTop)
    <VStack spacing={5} left={862} top={190} position="sticky">
      {templates.map((template) => (
        <Template key={template.title} title={template.title} description={template.description} />
      ))}
    </VStack>
  );
  //   {(scrollTop > 180) ? (
  //     <VStack spacing={5} left={862} top={0} position="fixed">
  //     {templates.map((template) => (
  //       <Template
  //         key={template.title}
  //         title={template.title}
  //         description={template.description}
  //       />
  //     ))}
  //   </VStack>
  //   ): (      <VStack spacing={5} left={862} top={0} position="fixed">
  //   {templates.map((template) => (
  //     <Template
  //       key={template.title}
  //       title={template.title}
  //       description={template.description}
  //     />
  //   ))}
  // </VStack>)}
};

export default TemplateList;
