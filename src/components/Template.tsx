import { Text, VStack, Box } from '@chakra-ui/react';
import React from 'react';

const Template = () => {
  return (
    <>
      <VStack spacing={5} ml={853} mt={264}>
        <Box width={235}>
          <Text color="black" fontSize="lg" fontStyle="semibold">
            ❓質問
          </Text>
          <Text color="black" fontSize="xs" fontStyle="medium">
            わからないコードや疑問に思った部分があれば積極的に質問してみましょう！
          </Text>
        </Box>
        <Box width={235}>
          <Text color="black" fontSize="lg" fontStyle="semibold">
            ✨素敵
          </Text>
          <Text color="black" fontSize="xs" fontStyle="medium">
            命名や設計がキレイなどの良いコードを見つけたときはポジティブな意見をバシバシ送っちゃいましょう！
            プルリクエストの作成者は嬉しいこと間違いなしです
          </Text>
        </Box>
        <Box width={235}>
          <Text color="black" fontSize="lg" fontStyle="semibold">
            🤔改善
          </Text>
          <Text color="black" fontSize="xs" fontStyle="medium">
            タイポや可読性の低いコードを見つけた場合は早急に報告しましょう！あなたの報告がプロダクトを改善します！
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default Template;
