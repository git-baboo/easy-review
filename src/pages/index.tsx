import { Container } from '@chakra-ui/react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import Layout from '@/components/Layout';
import DisplayTopPageItems from '@/components/toppage/DisplayTopPageItems';

const TopPage = () => {
  return (
    <Layout
      text={`あなた宛のレビューの依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！`}
      icon={BsCheckCircleFill}
    >
      <Container maxW="container.sm" bg="blue.200">
        <DisplayTopPageItems />
      </Container>
    </Layout>
  );
};

export default TopPage;
