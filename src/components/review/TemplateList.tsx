import { VStack } from "@chakra-ui/react";

import Template from "@/components/review/Template";

const templates = [
  {
    title: "❓ 質問",
    description:
      "わからないコードや疑問に思った部分があれば積極的に質問してみましょう！",
  },
  {
    title: "✨ 素敵",
    description:
      "命名や設計がキレイなどの良いコードを見つけたときはポジティブな意見をバシバシ送っちゃいましょう！\nプルリクエストの作成者は嬉しいこと間違いなしです",
  },
  {
    title: "🤔 改善",
    description:
      "タイポや可読性の低いコードを見つけた場合は早急に報告しましょう！\nあなたの報告がプロダクトを改善します！",
  },
];

const TemplateList = () => {
  return (
    <VStack
      id="target"
      top={5} // 表示のどの位置で固定するかを決定(定数, ハイパーパラメータ！？)
      h={420}
      p={5}
      spacing={5}
      position="sticky"
      shadow="base"
    >
      {templates.map((template) => (
        <Template
          key={template.title}
          title={template.title}
          description={template.description}
        />
      ))}
    </VStack>
  );
};

export default TemplateList;
