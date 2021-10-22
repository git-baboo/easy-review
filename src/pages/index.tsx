import { Container } from '@chakra-ui/react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import Layout from '@/components/Layout';
import PullRequestList from '@/components/toppage/PullRequestList';

const TopPage = () => (
  <Layout
    text={`あなた宛のレビューの依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！`}
    icon={BsCheckCircleFill}
  >
    {console.log('賞金ゲットしたらみんなで焼肉行きたいかも')}
    <Container maxW="container.sm">
      <PullRequestList />
    </Container>
  </Layout>
);

export default TopPage;
