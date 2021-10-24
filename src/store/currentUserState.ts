import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { CurrentUserType } from '@/types/CurrentUserType';

const { persistAtom } = recoilPersist({
  key: 'persistedCurrentUserState',
});

const initialState: CurrentUserType = {
  isSignedIn: false,
  username: '',
  accessToken: '',
  reviewId: 0,
  commitNumber: 0,
};

export const currentUserState = atom<CurrentUserType>({
  key: 'currentUserState',
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});
