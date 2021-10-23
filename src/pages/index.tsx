import { Button, Container } from '@chakra-ui/react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import Layout from '@/components/Layout';
import PullRequestList from '@/components/toppage/PullRequestList';
import { useAuth } from '@/hooks/useAuth';

const TopPage = () => {
  const { logout } = useAuth();

  return (
    <Layout
      text={`あなた宛のレビューの依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！`}
      icon={BsCheckCircleFill}
    >
      <Container maxW="container.sm">
        <PullRequestList />
        {/* TODO: 動作確認用。確認出来次第削除 */}
        <Button onClick={logout}>logout</Button>
      </Container>
    </Layout>
  );
};

export default TopPage;
