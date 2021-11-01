export type TopPullRequestType = {
  pullNumber: number;
  title: string;
  ownerName: string;
  repoName: string;
};

export type DetailPullRequestType = {
  title: string;
  userName: string | undefined;
  avatarUrl: string | undefined;
  comment: string | null;
};

export type ReviewPullRequestType = {
  title: string;
  userName: string | undefined;
  avatarUrl: string | undefined;
};
