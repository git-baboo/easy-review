import { Code, CodeProps } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CustomProps = {
  inline: boolean; // インラインかコードブロックか
  className: string; // コードブロックに指定した言語名 (prefix: 'language-')
  children: ReactNode;
};

type Props = CodeProps & CustomProps;

export const codeTheme = ({ inline, className, children, ...props }: Props) => {
  // 正規表現で言語名を抽出する (ex. 'language-ts' -> 'ts')
  // 正規表現にマッチした場合、配列が返り、言語名は match[1] に入る
  // マッチしなかった場合、null が返る
  const match = /language-(\w+)/.exec(className || '');
  const langage = match != null ? match[1] : '';

  return inline ? (
    // インラインコード
    <Code className={className} {...props}>
      {children}
    </Code>
  ) : (
    // コードブロック
    <SyntaxHighlighter style={dark} language={langage} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};
