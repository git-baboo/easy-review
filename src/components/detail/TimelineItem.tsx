import { Box, BoxProps } from '@chakra-ui/layout';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import codeTheme from '@/components/detail/theme/codeTheme';
import dividerTheme from '@/components/detail/theme/dividerTheme';
import headingTheme from '@/components/detail/theme/headerTheme';
import linkTheme from '@/components/detail/theme/linkTheme';
import quoteTheme from '@/components/detail/theme/quoteTheme';
import tableTheme, { tdTheme, thTheme } from '@/components/detail/theme/tableTheme';

type CustomProps = {
  comment: string;
};

type Props = BoxProps & CustomProps;

const TimelineItem = ({ comment, ...boxProps }: Props) => {
  const customTheme: any = {
    h1: headingTheme,
    h2: headingTheme,
    h3: headingTheme,
    h4: headingTheme,
    h5: headingTheme,
    h6: headingTheme,
    code: codeTheme,
    blockquote: quoteTheme,
    hr: dividerTheme,
    a: linkTheme,
    table: tableTheme,
    th: thTheme,
    td: tdTheme,
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
