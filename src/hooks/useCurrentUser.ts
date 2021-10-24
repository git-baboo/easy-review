import { useRecoilValue } from 'recoil';

import { currentUserState } from '@/store/currentUserState';
import { CurrentUserType } from '@/types/CurrentUserType';

export const useCurrentUser = () => {
  const currentUser = useRecoilValue<CurrentUserType>(currentUserState);

  const isSignedIn = currentUser.isSignedIn;
  const username = currentUser.username;
  const accessToken = currentUser.accessToken;
  const reviewId = currentUser.reviewId;

  return { isSignedIn, username, accessToken, reviewId };
};
