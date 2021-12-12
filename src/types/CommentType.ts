export type Comment = {
  path: string;
  line: number;
  side: string;
  body: string;
};

export type PreviewComment = {
  path: string;
  body: string;
};
