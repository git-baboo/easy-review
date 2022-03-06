import { Text } from "@chakra-ui/layout";
import {
  Box,
  Image,
  Container,
  Flex,
  Heading,
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlay,
  Spacer,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import { HSpacer, VSpacer } from "@/components/Spacer";
import LoginButton from "@/components/login/LoginButton";
import withoutAuth from "@/hoc/withoutAuth";

const LoginPage = () => {
  const mediaType = useBreakpointValue({ base: "phone", md: "pc" });

  return (
    <Box bgColor="teal.500" h="100vh">
      <VSpacer size={9} />
      <Flex as="header">
        <Spacer />
        <Link
          href="https://www.kiyac.app/termsOfService/uJBSYhgVE6HYcxs7gklF"
          isExternal
          fontSize="xl"
          fontWeight="bold"
          color="white"
        >
          利用規約
        </Link>
        <HSpacer size={12} />
        <Link
          href="https://www.kiyac.app/privacypolicy/pPYhCNHmkxjkZewFkatd"
          isExternal
          fontSize="xl"
          fontWeight="bold"
          color="white"
        >
          プライバシーポリシー
        </Link>
        <HSpacer size={12} />
      </Flex>
      <Flex>
        <Container maxW="container.md" color="white">
          <Box mt={40}>
            <Image
              src="/app_icon.png"
              alt="サービスロゴ"
              borderRadius="full"
              boxSize="150px"
            />
            <Heading size="xl" mt={3}>
              Easy Review
            </Heading>
            <Heading size="md" mt={2}>
              より気軽なコードレビュー体験を
            </Heading>
          </Box>
          <VSpacer size={8} />
          {mediaType === "pc" && <LoginButton />}
        </Container>
        {mediaType === "phone" && (
          <Modal size="xs" isOpen={true} onClose={() => null} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalBody py={6}>
                <Text whiteSpace="pre-line">
                  {"Easy Reviewをご利用いただきありがとうございます。\n" +
                    "現在弊サービスはPC版ブラウザからのみご利用いただけます。\n" +
                    "モバイル版ブラウザへの対応も順次行っていく予定です。"}
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Flex>
    </Box>
  );
};

export default withoutAuth(LoginPage);
