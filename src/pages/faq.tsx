import { Container, Text } from "@chakra-ui/layout";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import Layout from "@/components/Layout";
import withAuth from "@/hoc/withAuth";

export const Faq = () => {
  return (
    <Layout text={"よくある質問"} icon={AiFillQuestionCircle}>
      <Container py={9} maxW="container.sm">
        <Text fontSize="xs" color="gray.600">
          FAQ
        </Text>
      </Container>
    </Layout>
  );
};

export default withAuth(Faq);
