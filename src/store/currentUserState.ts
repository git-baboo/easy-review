import { useCallback } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

import {
  RecoilAtomKeys,
  RecoilPersistenceKeys,
  RecoilSelectorKeys,
} from "@/store/RecoilKeys";

type CurrentUserState = {
  isSignedIn: boolean;
  username: string;
  accessToken: string;
  reviewId: number;
};

const { persistAtom } = recoilPersist({
  key: RecoilPersistenceKeys.PERSISTED_CURRENT_USER,
});

const initialState: CurrentUserState = {
  isSignedIn: false,
  username: "",
  accessToken: "",
  reviewId: 0,
};

const currentUserState = atom<CurrentUserState>({
  key: RecoilAtomKeys.CURRENT_USER_STATE,
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});

type CurrentUserActions = {
  useUpdateCurrentUser: () => (
    partialCurrentUser: Partial<CurrentUserState>
  ) => void;
};

export const currentUserActions: CurrentUserActions = {
  useUpdateCurrentUser: () => {
    const setCurrentUser =
      useSetRecoilState<CurrentUserState>(currentUserState);

    return useCallback((partialCurrentUser) => {
      setCurrentUser((prevState) => ({
        ...prevState,
        ...partialCurrentUser,
      }));
    }, []);
  },
};

type CurrentUserSelectors = {
  useCurrentUser: () => CurrentUserState;
};

const currentUserSelector = selector<CurrentUserState>({
  key: RecoilSelectorKeys.CURRENT_USER,
  get: ({ get }) => get(currentUserState),
});

export const currentUserSelectors: CurrentUserSelectors = {
  useCurrentUser: () => useRecoilValue<CurrentUserState>(currentUserSelector),
};
