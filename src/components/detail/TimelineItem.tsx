import { Box, BoxProps } from '@chakra-ui/layout';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CodeTheme from '@/components/detail/theme/CodeTheme';
import DividerTheme from '@/components/detail/theme/DividerTheme';
import HeadingTheme from '@/components/detail/theme/HeaderTheme';
import LinkTheme from '@/components/detail/theme/LinkTheme';
import QuoteTheme from '@/components/detail/theme/QuoteTheme';
import TableTheme, { TdTheme, ThTheme } from '@/components/detail/theme/TableTheme';

type CustomProps = {
  comment: string;
};

type Props = BoxProps & CustomProps;

const TimelineItem = ({ comment, ...boxProps }: Props) => {
  const customTheme: any = {
    h1: HeadingTheme,
    h2: HeadingTheme,
    h3: HeadingTheme,
    h4: HeadingTheme,
    h5: HeadingTheme,
    h6: HeadingTheme,
    code: CodeTheme,
    blockquote: QuoteTheme,
    hr: DividerTheme,
    a: LinkTheme,
    table: TableTheme,
    th: ThTheme,
    td: TdTheme,
  };

  return (
    <Box {...boxProps}>
      <ReactMarkdown
        skipHtml={true}
        components={ChakraUIRenderer(customTheme)}
        remarkPlugins={[remarkGfm]}
      >
        {comment}
      </ReactMarkdown>
    </Box>
  );
};

export default TimelineItem;
