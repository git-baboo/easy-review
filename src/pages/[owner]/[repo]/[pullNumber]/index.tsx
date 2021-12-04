import { Container, Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

import Layout from "@/components/Layout";
import ReviewButton from "@/components/detail/ReviewButton";
import Reviewee from "@/components/detail/Reviewee";
import TimelineItem from "@/components/detail/TimelineItem";
import { useApi } from "@/hooks/useApi";
import { DetailPullRequestType } from "@/types/PullRequestType";

const initialPullRequest: DetailPullRequestType = {
  title: "",
  userName: "",
  avatarUrl: "",
  comment: "",
};

const DetailPage = () => {
  const [pullRequest, setPullRequest] =
    useState<DetailPullRequestType>(initialPullRequest);
  const router = useRouter();
  const { owner, repo, pullNumber } = router.query || "";
  const { octokit } = useApi();

  useEffect(() => {
    if (owner && repo && pullNumber) {
      octokit
        .request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
          owner: String(owner),
          repo: String(repo),
          pull_number: Number(pullNumber),
        })
        .then((res) => {
          setPullRequest({
            title: res.data.title,
            userName: res.data.assignee?.login,
            avatarUrl: res.data.assignee?.avatar_url,
            comment: res.data.body,
          });
        });
    }
  }, [owner, repo, pullNumber]);

  return (
    <Layout
      text={"REVIEWボタンを押して\nさっそくレビューを開始しよう！"}
      icon={AiOutlineThunderbolt}
    >
      <Container py={9} maxW="container.sm">
        <Text fontSize="xs" color="gray.600">
          {owner}/{repo}
        </Text>
        <Heading size="md">{pullRequest.title}</Heading>
        <Reviewee pullRequest={pullRequest} />
        <TimelineItem
          my={3}
          px={8}
          py={7}
          boxShadow="base"
          comment={pullRequest.comment}
        />
        <ReviewButton />
      </Container>
    </Layout>
  );
};

export default DetailPage;
