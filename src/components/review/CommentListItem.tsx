import { Avatar } from "@chakra-ui/avatar";
import { Grid, GridItem, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import customTheme from "@/utils/markdown/customTheme";

type Props = {
  author: string;
  avatarUrl: string;
  body: string;
};

const CommentListItem = ({ author, avatarUrl, body }: Props) => {
  return (
    <Box p={4} border="1px" borderRadius="md" borderColor="gray.300">
      <Grid templateColumns="auto 1fr" gap={2} alignItems="center">
        <GridItem>
          <Avatar size="sm" name={author} src={avatarUrl} />
        </GridItem>
        <GridItem>
          <Text fontSize="md">{author}</Text>
        </GridItem>
        <GridItem gridColumn={2}>
          <ReactMarkdown
            skipHtml={true}
            components={ChakraUIRenderer(customTheme)}
            remarkPlugins={[remarkGfm]}
          >
            {body}
          </ReactMarkdown>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CommentListItem;
