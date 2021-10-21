import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  comment: string;
};

const TimelineItem = ({ comment }: Props) => {
  return (
    <ReactMarkdown skipHtml={true} components={ChakraUIRenderer()} remarkPlugins={[remarkGfm]}>
      {comment}
    </ReactMarkdown>
  );
};

export default TimelineItem;
