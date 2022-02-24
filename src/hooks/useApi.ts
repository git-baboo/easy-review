import { Octokit } from "@octokit/rest";

import { currentUserSelectors } from "@/store/currentUserState";

export const useApi = () => {
  const currentUser = currentUserSelectors.useCurrentUser();

  const octokit = new Octokit({
    auth: currentUser.accessToken,
  });

  return { octokit };
};
