type PullRequest = {
  ownerName: string;
  repoName: string;
  title: string;
};

export const dummyPullRequests: PullRequest[] = [
  {
    ownerName: 'git-baboo',
    repoName: 'minihackathon-a',
    title: 'ToDoのstate管理方法の変更',
  },
  {
    ownerName: 'git-baboo',
    repoName: 'react-study-sugimizu',
    title: 'Feature/7 change todo state',
  },
  {
    ownerName: 'zemi-team2',
    repoName: 'sake',
    title: '認証機能の実装',
  },
];
