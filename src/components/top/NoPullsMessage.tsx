import { WarningIcon } from "@chakra-ui/icons";
import { Box, Center, HStack, Link, Text } from "@chakra-ui/react";

const NoPullsMessage = () => {
  return (
    <Center mt={12}>
      <Box>
        <HStack px={9} py={6} spacing={4} boxShadow="xs">
          <WarningIcon w={8} h={8} color="gray.300" />
          <Text fontSize="sm" lineHeight={5} fontWeight="bold">
            あなたがレビュワーに指定されている
            <br />
            プルリクエストが見つかりませんでした
          </Text>
        </HStack>
        <HStack mt={2} justify="end">
          <Link href="#" color="gray.600">
            <Text fontSize="xs" lineHeight={4}>
              正しく表示されないときは →
            </Text>
          </Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default NoPullsMessage;
