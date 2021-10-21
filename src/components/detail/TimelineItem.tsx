import { Box, BoxProps } from '@chakra-ui/layout';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

type CustomProps = {
  comment: string;
};

type Props = BoxProps & CustomProps;

const TimelineItem = ({ comment, ...boxProps }: Props) => {
  return (
    <Box {...boxProps}>
      <ReactMarkdown components={ChakraUIRenderer()}>{comment}</ReactMarkdown>
    </Box>
  );
};

export default TimelineItem;
