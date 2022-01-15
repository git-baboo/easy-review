import { WarningIcon } from "@chakra-ui/icons";
import { Box, Center, HStack, Link, Text } from "@chakra-ui/react";

const NoPullsMessage = () => {
  return (
    <Box mt={12}>
      <Center boxShadow="xs">
        <HStack px={9} py="26px" spacing={4}>
          <WarningIcon w="32px" h="32px" color="gray.300" />
          <Text fontSize="sm" lineHeight={5} fontWeight="bold">
            あなたがレビュワーに指定されている
            <br />
            プルリクエストが見つかりませんでした
          </Text>
        </HStack>
      </Center>
      <HStack mt={2} justify="end">
        <Link href="#" color="gray.600">
          <Text fontSize="xs" lineHeight={4}>
            正しく表示されないときは →
          </Text>
        </Link>
      </HStack>
    </Box>
  );
};

export default NoPullsMessage;
