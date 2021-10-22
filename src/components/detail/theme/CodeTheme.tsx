import { Code } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
  inline: boolean; // インラインかコードブロックか
  className: string; // コードブロックに指定した言語名 (prefix: 'language-')
  children: ReactNode;
};

const CodeTheme = ({ inline, className, children }: Props) => {
  // 正規表現で言語名を抽出する (ex. 'language-ts' -> 'ts')
  // 正規表現にマッチした場合、配列が返り、言語名は match[1] に入る
  // マッチしなかった場合、null が返る
  const match = /language-(\w+)/.exec(className || '');
  const language = match != null ? match[1] : '';

  return inline ? (
    // インラインコード
    <Code>{children}</Code>
  ) : (
    // コードブロック
    <SyntaxHighlighter style={github} language={language} PreTag="div">
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

export default CodeTheme;
