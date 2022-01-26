/* eslint-disable max-len */
import { Container, Link, Heading, Text } from "@chakra-ui/layout";
import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import Layout from "@/components/Layout";
import withAuth from "@/hoc/withAuth";

export const Faq = () => {
  return (
    <Layout text={"よくある質問"} icon={AiFillQuestionCircle}>
      <Container py={12} maxW="container.sm">
        <Heading pb={2} fontSize="md">
          {"Q. プルリクエストが表示されません"}
        </Heading>
        <Alert status="warning" colorScheme="blue">
          <AlertIcon />
          <Text lineHeight={6}>
            アプリを使用するにはグループの管理者の許可が必要です
          </Text>
        </Alert>
        <Text pt={2} fontSize="sm" lineHeight={5} whiteSpace="pre-line">
          A. 以下の手順 を参考に、GitHub
          の設定を確認してください。アプリケーションのアクセスが許可されていない可能性があります。
          <br />
          <br />
          1. GitHub の
          <Link
            href="https://github.com/settings/connections/applications/f36da358d46af3fd2862"
            color="teal.500"
          >
            設定画面
          </Link>
          へアクセス
          <br />
          2. Easy Review を使いたい Organization を選び Request（あなたが
          Organization の管理者の場合は Grant）を押す
          <br />
          3. 完了
        </Text>
      </Container>
    </Layout>
  );
};

export default withAuth(Faq);
