import { Box, BoxProps } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { VFC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import customTheme from "@/utils/markdown/customTheme";

type CustomProps = {
  comment: string | null;
};

type Props = BoxProps & CustomProps;

const TimelineItem: VFC<Props> = ({ comment, ...boxProps }) => {
  if (comment) {
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
  } else {
    return <></>;
  }
};

export default TimelineItem;
