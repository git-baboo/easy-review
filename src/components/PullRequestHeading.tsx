import { Avatar, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { ReviewPullRequestType } from "@/types/PullRequestType";

type Props = {
  owner: string;
  repo: string;
  pullRequest: ReviewPullRequestType;
};

const PullRequestHeading = ({ owner, repo, pullRequest }: Props) => {
  return (
    <>
      <Text color="gray.600" fontSize="xs">
        {owner}/{repo}
      </Text>
      <Heading color="black" fontSize="md">
        {pullRequest.title}
      </Heading>
      <Text color="black" fontSize="xs" lineHeight={4}>
        <Avatar
          name={pullRequest.userName}
          src={pullRequest.avatarUrl}
          size="2xs"
        />
        {pullRequest.userName}
      </Text>
    </>
  );
};

export default PullRequestHeading;
