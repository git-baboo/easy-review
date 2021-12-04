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
  useBreakpointValue,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

import LoginButton from "@/components/login/LoginButton";
import withoutAuth from "@/hoc/withoutAuth";

const LoginPage = () => {
  const mediaType = useBreakpointValue({ base: "phone", md: "pc" });

  return (
    <Flex bgColor="teal.500" h="100vh">
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
  );
};

export default withoutAuth(LoginPage);
