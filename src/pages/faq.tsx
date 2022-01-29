import {
  Container,
  Link,
  Heading,
  Text,
  ListItem,
  OrderedList,
} from "@chakra-ui/layout";
import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import Layout from "@/components/Layout";
import withAuth from "@/hoc/withAuth";

const FaqPage = () => {
  return (
    <Layout text={"よくある質問"} icon={AiFillQuestionCircle}>
      <Container py={12} maxW="container.sm">
        <Heading pb={3} fontSize="md">
          Q. プルリクエストが表示されません
        </Heading>
        <Alert status="info">
          <AlertIcon />
          <Text lineHeight={6}>
            アプリを使用するにはグループの管理者の許可が必要です
          </Text>
        </Alert>
        <Text pt={3} fontSize="sm" lineHeight={5}>
          A.
          以下の手順を参考に、GitHubの設定を確認してください。アプリケーションのアクセスが許可されていない可能性があります。
          <br />
          <br />
          <OrderedList>
            <ListItem>
              GitHubの
              <Link
                href="https://github.com/settings/connections/applications/f36da358d46af3fd2862"
                isExternal
                color="teal.500"
              >
                設定画面
              </Link>
              へアクセス
            </ListItem>
            <ListItem>
              Easy
              Reviewを使いたいグループを選びGrant（あなたがグループの管理者でない場合はRequest）を押す
            </ListItem>
            <ListItem>3. 完了</ListItem>
          </OrderedList>
        </Text>
      </Container>
    </Layout>
  );
};

export default withAuth(FaqPage);
