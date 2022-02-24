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
import {
  currentUserActions,
  currentUserSelectors,
} from "@/store/currentUserState";
import { isLoginButtonLoadingState } from "@/store/isLoginButtonLoadingState";
import { TopPullRequestType } from "@/types/PullRequestType";
import { auth } from "@/utils/firebase";

const TopPage = () => {
  const [pulls, setPulls] = useState<TopPullRequestType[]>([]);
  const setIsLoginButtonLoading = useSetRecoilState<boolean>(
    isLoginButtonLoadingState
  );
  const { octokit } = useApi();
  const currentUser = currentUserSelectors.useCurrentUser();
  const updateCurrentUser = currentUserActions.useUpdateCurrentUser();

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
            updateCurrentUser({
              username: res.data.login,
              isSignedIn: true,
              accessToken: String(token),
            });
          });

          setIsLoginButtonLoading(false);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (currentUser.username) {
      octokit
        .request("GET /search/issues", {
          q: `is:pr+user-review-requested:${currentUser.username}+state:open`,
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
  }, [currentUser.username]);

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
