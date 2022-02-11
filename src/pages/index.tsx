import { Container } from "@chakra-ui/react";
import { Octokit } from "@octokit/rest";
import { getRedirectResult, GithubAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSetRecoilState } from "recoil";

import Layout from "@/components/Layout";
import NoPullsMessage from "@/components/top/NoPullsMessage";
import PullRequestList from "@/components/top/PullRequestList";
import withAuth from "@/hoc/withAuth";
import { useApi } from "@/hooks/useApi";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { currentUserState } from "@/store/currentUserState";
import { CurrentUserType } from "@/types/CurrentUserType";
import { TopPullRequestType } from "@/types/PullRequestType";
import { auth } from "@/utils/firebase";

const TopPage = () => {
  const [pulls, setPulls] = useState<TopPullRequestType[]>([]);
  const { octokit } = useApi();
  const { username } = useCurrentUser();
  const setCurrentUser = useSetRecoilState<CurrentUserType>(currentUserState);

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result) {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;

          const octokit = new Octokit({
            auth: token,
          });

          octokit.request("GET /user").then((res) => {
            setCurrentUser((prevState) => ({
              ...prevState,
              username: res.data.login,
            }));
          });

          setCurrentUser((prevState) => ({
            ...prevState,
            isSignedIn: true,
            accessToken: String(token),
          }));
        }
      }
    });
  }, []);

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
        {pulls.length ? <PullRequestList pulls={pulls} /> : <NoPullsMessage />}
      </Container>
    </Layout>
  );
};

export default withAuth(TopPage);
