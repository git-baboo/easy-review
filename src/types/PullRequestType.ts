import { Comment } from '@/types/CommentType';

export type PullRequest = {
  repoOwner: string;
  repoName: string;
  title: string;
  commentList: Comment[];
};
