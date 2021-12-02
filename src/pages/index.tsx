import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import Layout from "@/components/Layout";
import PullRequestList from "@/components/top/PullRequestList";
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
            const repositoryUrl = item.repository_url;
            const splitRepositoryUrl = repositoryUrl.split("/");

            // スラッシュで分割されたリポジトリ URL の末尾と末尾から2番目が slicedRepositoryUrl に入っている
            // 例: item.repository_url が https://api.github.com/repos/git-baboo/dummy-pr のとき
            // slicedRepositoryUrl: ["git-baboo", "dummy-pr"]
            const slicedRepositoryUrl: string[] = splitRepositoryUrl.slice(-2);

            const pull: TopPullRequestType = {
              pullNumber: item.number,
              ownerName: slicedRepositoryUrl[0],
              repoName: slicedRepositoryUrl[1],
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
        <PullRequestList pulls={pulls} />
      </Container>
    </Layout>
  );
};

export default TopPage;
