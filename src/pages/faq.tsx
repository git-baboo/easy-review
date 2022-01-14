/* eslint-disable max-len */
import { Container, Heading, Text, Link } from "@chakra-ui/layout";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import Layout from "@/components/Layout";
import withAuth from "@/hoc/withAuth";

export const Faq = () => {
  return (
    <Layout text={"よくある質問"} icon={AiFillQuestionCircle}>
      <Container py={9} maxW="container.sm">
        <Heading fontSize="md">{"Q. プルリクエストが表示されません"}</Heading>
        <Text font="Inter" fontSize="sm" lineHeight={5} whiteSpace="pre-line">
          {
            "A. 以下の手順 を参考に、GitHub の設定を確認してください。アプリケーションのアクセスが許可されていない可能性があります。 \n\n 1. GitHub の"
          }
          <Link href="https://github.com/settings/connections/applications/f36da358d46af3fd2862">
            設定画面
          </Link>
          {
            "へアクセス \n 2. Easy Review を使いたい Organization を選び Request（あなたが Organization の管理者の場合はGrant）を押す \n 3. 完了 "
          }
        </Text>
      </Container>
    </Layout>
  );
};

export default withAuth(Faq);
