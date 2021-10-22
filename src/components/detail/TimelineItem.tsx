import { Box, BoxProps } from '@chakra-ui/layout';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import codeTheme from '@/components/detail/codeTheme';
import quoteTheme from '@/components/detail/quoteTheme';

type CustomProps = {
  comment: string;
};

type Props = BoxProps & CustomProps;

const TimelineItem = ({ comment, ...boxProps }: Props) => {
  const customTheme: any = {
    code: codeTheme,
    blockquote: quoteTheme,
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
