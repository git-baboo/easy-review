import {
  Button,
  Box,
  Container,
  HStack,
  Divider,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";

import Layout from "@/components/Layout";
import DiffFileList from "@/components/review/DiffFileList";
import PullRequestHeading from "@/components/review/PullRequestHeading";
import TemplateList from "@/components/review/TemplateList";
import useWidgets from "@/components/review/useWidgets";
import { reviewer } from "@/data/dummyReviewer";
import { useApi } from "@/hooks/useApi";
import { Comment, PreviewComment } from "@/types/CommentType";
import { ReviewPullRequestType } from "@/types/PullRequestType";

const initialPull = {
  title: "",
  userName: "",
  avatarUrl: "",
};

const ReviewPage = () => {
  const [diff, setDiff] = useState<string>("");
  const [pull, setPull] = useState<ReviewPullRequestType>(initialPull);
  const router = useRouter();
  const { owner, repo, pullNumber } = router.query || "";
  const [widgets, { addWidget }]: any = useWidgets(reviewer);
  const { octokit } = useApi();
  const toast = useToast({
    title: "コメントの追加が完了しました",
    position: "top",
    variant: "subtle",
    status: "success",
    duration: 2000,
  });

  useEffect(() => {
    if (owner && repo && pullNumber) {
      octokit
        .request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
          headers: {
            Accept: "application/vnd.github.v3.diff", // NOTE: diff データを取得するため
          },
          owner: String(owner),
          repo: String(repo),
          pull_number: Number(pullNumber),
        })
        .then((response) => {
          setDiff(String(response.data));
        });
      octokit
        .request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
          owner: String(owner),
          repo: String(repo),
          pull_number: Number(pullNumber),
        })
        .then((response) => {
          setPull({
            title: response.data.title,
            userName: response.data.assignee?.login,
            avatarUrl: response.data.assignee?.avatar_url,
          });
        });
    }
  }, [owner, repo, pullNumber]);

  const getSideAndLine = (changeKey: string): [string, string] => {
    const changeType = changeKey.slice(0, 1);
    const line = changeKey.slice(1);
    switch (changeType) {
      case "I":
        return ["RIGHT", line];
      case "N":
        return ["LEFT", line];
      case "D":
        return ["LEFT", line];

      default:
        return ["", ""];
    }
  };

  const handleSubmit = () => {
    const comments: Comment[] = [];
    Object.keys(widgets).map((key) => {
      const changeKey = widgets[key].props.changeKey;
      const [side, line] = getSideAndLine(changeKey);
      widgets[key].props.comments.map(({ path, body }: PreviewComment) => {
        comments.push({
          path: path,
          line: Number(line),
          side: side,
          body: body,
        });
      });
    });

    octokit
      .request("POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews", {
        owner: String(owner),
        repo: String(repo),
        pull_number: Number(pullNumber),
        comments: comments,
      })
      .then((response) => {
        octokit.request(
          "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
          {
            owner: String(owner),
            repo: String(repo),
            pull_number: Number(pullNumber),
            review_id: response.data.id,
            event: "COMMENT",
          }
        );
      });

    toast();

    router.push("/");
  };

  return (
    <>
      <Layout
        text={"テンプレートを使ってレビューをしてみよう！"}
        icon={BsFillChatDotsFill}
      >
        <Container py={9} maxW="container.lg">
          <HStack spacing="50px" align="top">
            <Box align="end">
              <PullRequestHeading
                owner={String(owner)}
                repo={String(repo)}
                pull={pull}
              />
              <DiffFileList
                spacing={6}
                mt={3}
                w={700}
                align="start"
                diff={diff}
                widgets={widgets}
                addWidget={addWidget}
              />
              <Button
                mt={3}
                size="lg"
                w="full"
                colorScheme="teal"
                fontWeight="bold"
                onClick={handleSubmit}
              >
                完了
              </Button>
            </Box>
            <Center h="lg">
              <Divider color="black" orientation="vertical" />
            </Center>
            <TemplateList />
          </HStack>
        </Container>
      </Layout>
    </>
  );
};

export default ReviewPage;