import { Avatar } from "@chakra-ui/avatar";
import { Flex, ListItem, Text } from "@chakra-ui/layout";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import customTheme from "@/markdown/customTheme";

type Props = {
  id: string;
  author: string;
  avatarUrl: string;
  body: string;
};

const CommentList = ({ id, author, avatarUrl, body }: Props) => {
  return (
    <ListItem
      key={id}
      m={2}
      p={4}
      border="1px"
      borderRadius="md"
      borderColor="gray.300"
    >
      <Flex alignItems="center">
        <Avatar size="sm" name={author} src={avatarUrl} />
        <Text ml={2} fontSize="md">
          {author}
        </Text>
      </Flex>
      <ReactMarkdown
        skipHtml={true}
        components={ChakraUIRenderer(customTheme)}
        remarkPlugins={[remarkGfm]}
      >
        {body}
      </ReactMarkdown>
    </ListItem>
  );
};

export default CommentList;
