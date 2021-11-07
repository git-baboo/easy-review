import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import Layout from '@/components/Layout';
import PullRequestList from '@/components/top/PullRequestList';
import { useApi } from '@/hooks/useApi';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { TopPullRequestType } from '@/types/PullRequestType';

const TopPage = () => {
  const [pulls, setPulls] = useState<TopPullRequestType[]>([]);
  const { octokit } = useApi();
  const { username } = useCurrentUser();

  useEffect(() => {
    if (username) {
      octokit
        .request('GET /search/issues', {
          q: `is:pr+user-review-requested:${username}+state:open`,
        })
        .then((response) => {
          const items = response.data.items;
          const newPulls: TopPullRequestType[] = [];
          items.map((item) => {
            octokit.request(`GET ${item.repository_url}`).then((response) => {
              const pullRequest: TopPullRequestType = {
                pullNumber: item.number,
                ownerName: response.data.organization.login,
                repoName: response.data.name,
                title: item.title,
              };
              newPulls.push(pullRequest);
            });
            setPulls(newPulls);
          });
        });
    }
  }, [username]);

  return (
    <Layout
      text={`あなた宛のレビューの依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！`}
      icon={BsCheckCircleFill}
    >
      <Container maxW="container.sm">
        <PullRequestList pulls={pulls} />
      </Container>
    </Layout>
  );
};

export default TopPage;
