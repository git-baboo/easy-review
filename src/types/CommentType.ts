export type Comment = {
  path: string;
  line: number;
  side: string;
  body: string;
};

export type PreviewComment = {
  id: string;
  author: string;
  avatarUrl: string;
  path: string;
  body: string;
};
