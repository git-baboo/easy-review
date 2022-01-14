import { Container, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import Layout from "@/components/Layout";
import PullRequestList from "@/components/top/PullRequestList";
import withAuth from "@/hoc/withAuth";
import { useApi } from "@/hooks/useApi";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { TopPullRequestType } from "@/types/PullRequestType";

const TopPage = () => {
  const [pulls, setPulls] = useState<TopPullRequestType[]>([]);
  const { octokit } = useApi();
  const { username } = useCurrentUser();

  useEffect(() => {
    if (username) {
      octokit
        .request("GET /search/issues", {
          q: `is:pr+user-review-requested:${username}+state:open`,
        })
        .then((response) => {
          const items = response.data.items;
          const newPulls: TopPullRequestType[] = [];
          items.map((item) => {
            // item.repository_urlの例: https://api.github.com/repos/git-baboo/dummy-pr
            const splitRepositoryUrl = item.repository_url.split("/");

            const [ownerName, repoName]: string[] =
              splitRepositoryUrl.slice(-2);

            const pull: TopPullRequestType = {
              pullNumber: item.number,
              ownerName: ownerName,
              repoName: repoName,
              title: item.title,
            };
            newPulls.push(pull);
          });
          setPulls(newPulls);
        });
    }
  }, [username]);

  return (
    <Layout
      text={
        "あなた宛のレビューの依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！"
      }
      icon={BsCheckCircleFill}
    >
      <Container maxW="container.sm">
        {/* TODO: 遷移先のｐ画面確認用のため、後に削除*/}
        <Link href="/faq">FAQ へ Go !</Link>
        <PullRequestList pulls={pulls} />
      </Container>
    </Layout>
  );
};

export default withAuth(TopPage);
