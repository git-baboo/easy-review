import { atom } from 'recoil';

import { CurrentUserType } from '@/types/CurrentUserType';

const initialState: CurrentUserType = {
  isSignedIn: false,
  username: '',
  accessToken: '',
};

export const currentUserState = atom<CurrentUserType>({
  key: 'currentUserState',
  default: initialState,
});
