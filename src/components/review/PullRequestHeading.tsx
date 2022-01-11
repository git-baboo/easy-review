import React from "react";

import PullRequestInformation from "@/components/PullRequestInformation";
import { ReviewPullRequestType } from "@/types/PullRequestType";

type Props = {
  owner: string;
  repo: string;
  pull: ReviewPullRequestType;
};

const PullRequestHeading = ({ owner, repo, pull }: Props) => {
  return (
    <PullRequestInformation owner={owner} repo={repo} pullRequest={pull} />
  );
};

export default PullRequestHeading;
