import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

import { ReviewPullRequestType } from "@/types/PullRequestType";

type Props = {
  owner: string;
  repo: string;
  pull: ReviewPullRequestType;
};

const PullRequestInformation = ({ owner, repo, pull }: Props) => {
  return (
    <Box width={700} align="start">
      <Text color="gray" fontSize="xs">
        {owner}/{repo}
      </Text>
      <Text color="black" fontSize="md">
        {pull.title}
      </Text>
      <Text color="black" fontSize="xs" lineHeight={4}>
        <Avatar name={pull.userName} src={pull.avatarUrl} size="2xs" />
        {pull.userName}
      </Text>
    </Box>
  );
};

export default PullRequestInformation;
