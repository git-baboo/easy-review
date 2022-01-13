import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { ReviewPullRequestType } from "@/types/PullRequestType";

type Props = {
  owner: string | string[] | undefined;
  repo: string | string[] | undefined;
  pullRequest: ReviewPullRequestType;
};

const PullRequestHeading = ({ owner, repo, pullRequest }: Props) => {
  return (
    <Box width={700} align="start">
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
    </Box>
  );
};

export default PullRequestHeading;
