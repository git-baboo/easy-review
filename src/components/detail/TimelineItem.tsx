import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

type Props = {
  comment: string;
};

const TimelineItem = ({ comment }: Props) => {
  return <ReactMarkdown components={ChakraUIRenderer()}>{comment}</ReactMarkdown>;
};

export default TimelineItem;
