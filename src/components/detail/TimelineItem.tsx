import { Box, BoxProps } from '@chakra-ui/layout';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CheckboxTheme from '@/components/detail/theme/CheckboxTheme';
import CodeTheme from '@/components/detail/theme/CodeTheme';
import DividerTheme from '@/components/detail/theme/DividerTheme';
import HeadingTheme from '@/components/detail/theme/HeaderTheme';
import LinkTheme from '@/components/detail/theme/LinkTheme';
import QuoteTheme from '@/components/detail/theme/QuoteTheme';

type CustomProps = {
  comment: string;
};

type Props = BoxProps & CustomProps;

const TimelineItem = ({ comment, ...boxProps }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    input: CheckboxTheme,
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
