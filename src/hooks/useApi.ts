import { Octokit } from '@octokit/rest';

import { useCurrentUser } from '@/hooks/useCurrentUser';

export const useApi = () => {
  const { accessToken } = useCurrentUser();

  const octokit = new Octokit({
    auth: accessToken,
  });

  return { octokit };
};
