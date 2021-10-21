import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

type Props = {
  comment: string;
};

const TimelineItem = ({ comment }: Props) => {
  return (
    <ReactMarkdown skipHtml={true} components={ChakraUIRenderer()}>
      {comment}
    </ReactMarkdown>
  );
};

export default TimelineItem;
