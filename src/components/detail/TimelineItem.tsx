import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { codeTheme } from '@/components/detail/codeTheme';

type Props = {
  comment: string;
};

const TimelineItem = ({ comment }: Props) => {
  const customTheme: any = {
    code: codeTheme,
  };

  return (
    <ReactMarkdown
      skipHtml={true}
      components={ChakraUIRenderer(customTheme)}
      remarkPlugins={[remarkGfm]}
    >
      {comment}
    </ReactMarkdown>
  );
};

export default TimelineItem;
