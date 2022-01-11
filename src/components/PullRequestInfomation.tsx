import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

import { ReviewPullRequestType } from "@/types/PullRequestType";

type Props = {
  owner: string | string[] | undefined;
  repo: string | string[] | undefined;
  pullRequest: ReviewPullRequestType;
};

const PullRequestInformation = ({ owner, repo, pullRequest }: Props) => {
  return (
    <Box width={700} align="start">
      <Text color="gray" fontSize="xs">
        {owner}/{repo}
      </Text>
      <Text color="black" fontSize="md">
        {pullRequest.title}
      </Text>
      <Text color="black" fontSize="xs" lineHeight={4}>
        <Avatar
          name={pullRequest.userName}
          src={pullRequest.avatarUrl}
          size="2xs"
        />
        {pullRequest.userName}
      </Text>
    </Box>
  );
};

export default PullRequestInformation;
