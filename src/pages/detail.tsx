import { Container, Heading, Text } from '@chakra-ui/layout';
import { Octokit } from '@octokit/rest';
import React, { useEffect, useState } from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import Layout from '@/components/Layout';
import ReviewButton from '@/components/detail/ReviewButton';
import Reviewee from '@/components/detail/Reviewee';
import TimelineItem from '@/components/detail/TimelineItem';
import { PullRequest } from '@/types/PullRequestType';

// TODO: octokit の宣言を抽象化する
const octokit = new Octokit({
  auth: process.env.REACT_APP_TOKEN,
});

type Path = {
  owner: string;
  repo: string;
  pullNumber: string;
};

const initialPullRequest: PullRequest = {
  title: '',
  userName: '',
  avatarUrl: '',
  comment: '',
};

const DetailPage = () => {
  // TODO: eslint の例外設定を削除
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { owner, repo, pullNumber } = useParams<Path>();
  const [pullRequest, setPullRequest] = useState<PullRequest>(initialPullRequest);

  useEffect(() => {
    octokit
      .request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
        owner: owner,
        repo: repo,
        pull_number: Number(pullNumber), // NOTE: useParams の型定義は string でなければならない
      })
      .then((res) => {
        console.log(res.data);
        const data: PullRequest = {
          title: res.data.title,
          userName: res.data.assignee?.login,
          avatarUrl: res.data.assignee?.avatar_url,
          comment: res.data.body,
        };
        setPullRequest(data);
      });
  }, []);

  return (
    <Layout
      text={`REVIEWボタンを押して\nさっそくレビューを開始しよう！`}
      icon={AiOutlineThunderbolt}
    >
      <Container py={9} maxW="container.sm">
        <Text fontSize="xs" color="gray.600">
          {owner}/{repo}
        </Text>
        <Heading size="md">{pullRequest.title}</Heading>
        <Reviewee pullRequest={pullRequest} />
        <TimelineItem my={3} px={8} py={7} boxShadow="base" comment={pullRequest.comment} />
        <ReviewButton />
      </Container>
    </Layout>
  );
};

export default DetailPage;
