import { Box, BoxProps } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { VFC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CheckboxTheme from "@/components/detail/theme/CheckboxTheme";
import CodeTheme from "@/components/detail/theme/CodeTheme";
import DividerTheme from "@/components/detail/theme/DividerTheme";
import HeadingTheme from "@/components/detail/theme/HeadingTheme";
import LinkTheme from "@/components/detail/theme/LinkTheme";
import QuoteTheme from "@/components/detail/theme/QuoteTheme";

type CustomProps = {
  comment: string | null;
};

type Props = BoxProps & CustomProps;

const TimelineItem: VFC<Props> = ({ comment, ...boxProps }) => {
  const customTheme = {
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
